"use client";

import { useRef } from "react";
import { Layers } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Footer() {
  const iconRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (iconRef.current) {
      const parent = iconRef.current.parentElement;
      if (parent) {
        parent.addEventListener('mouseenter', () => {
          gsap.to(iconRef.current, { rotation: -180, scale: 1.1, duration: 0.4, ease: "back.out(1.7)" });
        });
        parent.addEventListener('mouseleave', () => {
          gsap.to(iconRef.current, { rotation: 0, scale: 1, duration: 0.4, ease: "power2.out" });
        });
      }
    }
  }, { scope: iconRef });

  return (
    <footer className="py-8 bg-darker-green border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center md:text-left text-white/60">
          {/* Logo */}
          <div
            className="font-[800] text-white flex items-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <Layers ref={iconRef} className="w-5 h-5" />
            MOENVIRON
          </div>

          <p>&copy; 2026 Moenviron. All rights reserved.</p>

          <div className="flex gap-6 justify-center">
            <a
              href="#"
              className="hover:text-neon-accent transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-neon-accent transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
