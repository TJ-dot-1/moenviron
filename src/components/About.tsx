"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Globe, Leaf, Recycle, TrendingUp, Users, Handshake, Target, Sparkles, Zap, Cpu, Database, Orbit, Radar, Shield, BarChart3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animated grid lines
    gsap.to(".grid-line-horizontal", {
      x: -100,
      duration: 8,
      repeat: -1,
      ease: "none",
      modifiers: {
        x: (x) => `${parseFloat(x) % 200}px`
      }
    });

    gsap.to(".grid-line-vertical", {
      y: -100,
      duration: 8,
      repeat: -1,
      ease: "none",
      modifiers: {
        y: (y) => `${parseFloat(y) % 200}px`
      }
    });

    // Floating particles animation
    gsap.to(".floating-particle", {
      y: "random(-30, 30)",
      x: "random(-30, 30)",
      duration: "random(3, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.1
    });

    // Glowing orb animations
    gsap.to(".glow-orb", {
      scale: 1.2,
      opacity: 0.7,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Text entrance animation
    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
    );

    gsap.utils.toArray<HTMLElement>(".about-section").forEach((section, i) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#050507] pt-20 overflow-hidden relative">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,136,0.03)_1px,_transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0">
          <div className="grid-line-horizontal absolute top-0 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-30" style={{ top: "20%" }} />
          <div className="grid-line-horizontal absolute top-0 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-30" style={{ top: "40%" }} />
          <div className="grid-line-horizontal absolute top-0 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-30" style={{ top: "60%" }} />
          <div className="grid-line-horizontal absolute top-0 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-30" style={{ top: "80%" }} />
          <div className="grid-line-vertical absolute top-0 left-0 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-[#00ff88] to-transparent opacity-30" style={{ left: "20%" }} />
          <div className="grid-line-vertical absolute top-0 left-0 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-[#00ff88] to-transparent opacity-30" style={{ left: "40%" }} />
          <div className="grid-line-vertical absolute top-0 left-0 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-[#00ff88] to-transparent opacity-30" style={{ left: "60%" }} />
          <div className="grid-line-vertical absolute top-0 left-0 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-[#00ff88] to-transparent opacity-30" style={{ left: "80%" }} />
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="floating-particle absolute w-1 h-1 bg-[#00ff88] rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 md:py-28 lg:py-32 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Glowing Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="glow-orb absolute w-[500px] h-[500px] bg-[#00ff88]/10 rounded-full blur-[120px] -top-[200px] -right-[200px] animate-pulse" />
          <div className="glow-orb absolute w-[400px] h-[400px] bg-[#00ccff]/10 rounded-full blur-[100px] bottom-0 -left-[200px]" />
          <div className="absolute w-[300px] h-[300px] bg-[#ff00ff]/5 rounded-full blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 text-center" ref={textRef}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-[#00ff88]" />
            <span className="text-sm font-mono text-[#00ff88] tracking-wider">NEXT-GEN CIRCULAR ECONOMY</span>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="bg-gradient-to-r from-[#00ff88] via-[#00ccff] to-[#00ff88] bg-clip-text text-transparent bg-300% animate-gradient">
              Moenviron
            </span>
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light tracking-wide"
          >
            Redefining Textile Waste into Circular Value for a Sustainable Future
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="about-section py-16 md:py-24 relative z-10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 to-[#00ccff]/10 blur-3xl" />
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light relative z-10 backdrop-blur-sm p-8 rounded-2xl border border-[#00ff88]/20">
                Moenviron is a circular economy company focused on transforming textile waste into structured, scalable value. 
                We operate at the intersection of sustainability, global trade, and material innovation—developing solutions 
                that extend the life of textiles today while building the systems required for full circularity tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-section py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="group relative bg-gradient-to-br from-[#00ff88]/5 to-transparent backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-[#00ff88]/30 hover:border-[#00ff88]/60 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/0 via-[#00ff88]/5 to-[#00ff88]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00ff88]/20 to-transparent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-[#00ff88]/30">
                <Target className="w-8 h-8 text-[#00ff88]" />
              </div>
              <h3 
                className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Vision
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To become a leading circular textile infrastructure company connecting global supply chains with emerging markets, 
                enabling textiles to be reused, recycled, and continuously reintegrated into the economy.
              </p>
            </div>
            <div className="group relative bg-gradient-to-br from-[#00ff88]/5 to-transparent backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-[#00ff88]/30 hover:border-[#00ff88]/60 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/0 via-[#00ff88]/5 to-[#00ff88]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00ff88]/20 to-transparent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-[#00ff88]/30">
                <Leaf className="w-8 h-8 text-[#00ff88]" />
              </div>
              <h3 
                className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Mission
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  To reduce textile waste and unlock its value by:
                </p>
                <ul className="space-y-4 text-gray-300">
                  {[
                    "Enabling efficient recovery of post-consumer textiles",
                    "Supporting reuse through structured second-hand markets",
                    "Developing scalable pathways for textile-to-textile recycling"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className="mt-1.5 w-5 h-5 rounded-full bg-[#00ff88]/20 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <ArrowRight className="w-3 h-3 text-[#00ff88]" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="about-section py-16 md:py-24 relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 backdrop-blur-sm mb-6">
              <Radar className="w-4 h-4 text-[#00ff88]" />
              <span className="text-sm font-mono text-[#00ff88] tracking-wider">MARKET INTELLIGENCE</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Opportunity We See
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              The global textile industry is undergoing a structural shift. Rising consumption, increasing waste, and tightening 
              environmental regulations—particularly across Europe—are accelerating the need for circular solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Market Gap", desc: "Large volumes of reusable textiles remain underutilized despite growing demand for affordable clothing in emerging markets." },
              { icon: Globe, title: "Growing Demand", desc: "Demand for affordable clothing continues to grow in emerging markets, creating opportunities for structured redistribution." },
              { icon: Database, title: "Infrastructure Need", desc: "Recycling infrastructure for textiles is still limited and fragmented, presenting a significant opportunity for innovation." }
            ].map((item, i) => (
              <div key={i} className="group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#00ff88]/5 to-transparent backdrop-blur-sm border border-[#00ff88]/20 hover:border-[#00ff88]/60 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/0 via-[#00ff88]/5 to-[#00ff88]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 border border-[#00ff88]/30">
                  <item.icon className="w-6 h-6 text-[#00ff88]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="about-section py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,255,136,0.1),_transparent_50%)]" />
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 backdrop-blur-sm mb-6">
              <Cpu className="w-4 h-4 text-[#00ff88]" />
              <span className="text-sm font-mono text-[#00ff88] tracking-wider">SYSTEM ARCHITECTURE</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Approach
            </h2>
          </div>
          
          <div className="space-y-10 max-w-4xl mx-auto">
            {[
              { num: "01", title: "Recovery & Sourcing", desc: "We collaborate with partners to channel post-consumer textiles into organized value streams, ensuring materials are not lost to landfill or incineration." },
              { num: "02", title: "Reuse & Redistribution", desc: "We align with established second-hand ecosystems to extend garment life, supporting markets where demand, quality control, and economic value already exist." },
              { num: "03", title: "Circular Processing", desc: "We are developing pathways for textile recycling and material recovery, enabling non-reusable textiles to be transformed into new raw materials.", badge: "Next Phase" }
            ].map((item, i) => (
              <div key={i} className="group relative flex flex-col md:flex-row gap-8 md:gap-12 p-10 bg-gradient-to-br from-[#00ff88]/5 to-transparent backdrop-blur-sm rounded-3xl border border-[#00ff88]/30 hover:border-[#00ff88]/60 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/0 via-[#00ff88]/5 to-[#00ff88]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00ff88] to-[#00ccff] flex items-center justify-center text-3xl font-bold text-black shadow-lg">
                    {item.num}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {item.title}
                    {item.badge && (
                      <span className="ml-3 text-sm font-mono text-[#00ff88] border border-[#00ff88]/30 px-3 py-1 rounded-full bg-[#00ff88]/10">
                        {item.badge}
                      </span>
                    )}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="about-section py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 backdrop-blur-sm mb-6">
                <BarChart3 className="w-4 h-4 text-[#00ff88]" />
                <span className="text-sm font-mono text-[#00ff88] tracking-wider">IMPACT METRICS</span>
              </div>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Why This Matters
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Extending the life of textiles is one of the most effective ways to reduce environmental impact. 
                  Reuse significantly lowers emissions, reduces resource consumption, and creates economic opportunities 
                  across the value chain.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  At the same time, building recycling capacity is essential to address textiles that have reached end-of-life. 
                  Moenviron's model integrates both—ensuring no value is lost.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] bg-[#00ff88]/20 -top-20 -right-20 animate-pulse" />
              <div className="relative bg-gradient-to-br from-[#00ff88]/10 to-[#00ccff]/10 backdrop-blur-xl p-10 md:p-12 rounded-[2.5rem] border border-[#00ff88]/30 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 to-transparent" />
                <h3 className="text-2xl font-bold mb-10 relative z-10 text-white">Impact at a Glance</h3>
                <div className="grid grid-cols-2 gap-10 relative z-10">
                  {[
                    { value: "70%", label: "less emissions from reuse" },
                    { value: "3x", label: "more value retained" },
                    { value: "90%", label: "water saved vs new textiles" },
                    { value: "∞", label: "circular potential" }
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-4xl md:text-5xl font-bold text-[#00ff88] mb-2">{item.value}</p>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="about-section py-20 md:py-32 mb-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/30 to-[#00ccff]/30 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-[#00ff88]/10 to-[#00ccff]/10 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 text-center overflow-hidden border border-[#00ff88]/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#00ff8810,transparent_70%)]" />
              <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] bg-[#00ff88]/10 bottom-0 right-0 animate-pulse" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 backdrop-blur-sm mb-8">
                  <Zap className="w-4 h-4 text-[#00ff88]" />
                  <span className="text-sm font-mono text-[#00ff88] tracking-wider">JOIN THE MOVEMENT</span>
                </div>
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Join Us
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  We are actively seeking partners, collaborators, and investors who share our vision for a circular textile future.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
                  <a
                    href="/contact"
                    className="group/btn w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 font-heading font-semibold rounded-full bg-gradient-to-r from-[#00ff88] to-[#00ccff] text-black hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] hover:-translate-y-1 transition-all duration-300"
                  >
                    Partner With Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 font-heading font-semibold rounded-full bg-transparent text-white border-2 border-[#00ff88]/30 hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300"
                  >
                    Explore Opportunities
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}