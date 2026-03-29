"use client";

import { useState, useEffect, useRef } from "react";
import { Layers } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const iconRef = useRef<SVGSVGElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useGSAP(() => {
    if (iconRef.current) {
      const parent = iconRef.current.parentElement;
      if (parent) {
        parent.addEventListener('mouseenter', () => {
          gsap.to(iconRef.current, { rotation: 180, scale: 1.1, duration: 0.4, ease: "back.out(1.7)" });
        });
        parent.addEventListener('mouseleave', () => {
          gsap.to(iconRef.current, { rotation: 0, scale: 1, duration: 0.4, ease: "power2.out" });
        });
      }
    }
  }, { scope: iconRef });

  // Handle menu animations
  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.4, ease: "power2.out" });
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.4, ease: "power2.in" });
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/partnership", label: "Partnership" },
    { href: "/contact", label: "Contact" },
    { href: "/investor", label: "Investors" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] backdrop-blur-[12px] border-b transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "bg-white/95 shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-2"
          : "bg-white/70 border-white/30 py-3"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-2 lg:px-4 flex justify-between items-center">
        {/* Logo */}
        <a
          className="flex items-center gap-2 font-heading font-[800] text-dark-green tracking-[0.05em] text-base lg:text-xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <Layers ref={iconRef} className="w-6 h-6" />
          MOENVIRON
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-text-dark hover:text-forest transition-all duration-400 text-base"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex lg:hidden flex-col gap-[5px] p-[5px] z-[1001] bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-dark-green transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-dark-green transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-dark-green transition-transform duration-300 ${
              menuOpen ? "-rotate-45 translate-x-[5px] -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-[998] transition-opacity duration-300 opacity-0 pointer-events-none"
        onClick={closeMenu}
      />
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-[280px] h-screen bg-white z-[999] flex flex-col pt-20 px-8 pb-8 gap-6 shadow-[-5px_0_30px_rgba(0,0,0,0.1)] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] translate-x-full"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="font-medium text-text-dark hover:text-forest transition-all text-lg"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
