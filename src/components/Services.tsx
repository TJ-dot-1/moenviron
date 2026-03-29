"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Package, Recycle, TrendingUp, Globe, Handshake, Users, Building2, Briefcase, Mail, Leaf, Globe2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "sourcing",
    icon: Package,
    title: "Textile Sourcing & Aggregation",
    description: "We connect post-consumer textile supply with structured value chains.",
    whatWeDo: [
      "Identify and secure textile waste streams",
      "Aggregate volumes for efficient handling",
      "Ensure alignment with market demand"
    ],
    whoItsFor: [
      "Collection organizations",
      "Waste management companies",
      "Institutional partners"
    ]
  },
  {
    id: "reuse",
    icon: Recycle,
    title: "Reuse Market Integration",
    description: "We facilitate the movement of reusable textiles into established second-hand markets.",
    whatWeDo: [
      "Align supply with demand-driven markets",
      "Support quality-based sorting and distribution",
      "Enable efficient trade flows"
    ],
    whoItsFor: [
      "Textile collectors",
      "Exporters and traders",
      "Second-hand market operators"
    ]
  },
  {
    id: "advisory",
    icon: TrendingUp,
    title: "Circular Supply Chain Advisory",
    description: "We help organizations transition toward circular textile systems.",
    whatWeDo: [
      "Map textile flows and opportunities",
      "Design circular strategies",
      "Support compliance with emerging regulations"
    ],
    whoItsFor: [
      "Fashion brands",
      "Retailers",
      "Sustainability-focused organizations"
    ]
  },
  {
    id: "partnerships",
    icon: Handshake,
    title: "Partnership Development & Market Access",
    description: "We build and connect stakeholders across the textile ecosystem.",
    whatWeDo: [
      "Facilitate cross-border partnerships",
      "Connect supply and demand actors",
      "Support entry into emerging markets"
    ],
    whoItsFor: [
      "International partners",
      "Circular economy platforms",
      "Investors and ecosystem builders"
    ]
  },
  {
    id: "recycling",
    icon: Leaf,
    title: "Textile Recycling & Material Recovery",
    description: "We are developing capabilities to process non-reusable textiles into new materials.",
    whatWeDo: [
      "Textile-to-textile recycling",
      "Fiber recovery",
      "Industrial reuse applications"
    ],
    whoItsFor: [
      "Recycling facilities",
      "Manufacturers",
      "Industrial partners"
    ],
    comingSoon: true
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Background shapes floating animation
    gsap.to(".bg-shape-1", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    gsap.to(".bg-shape-2", {
      y: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5
    });

    // Text entrance animation
    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-sand bg-[radial-gradient(circle_at_15%_50%,rgba(226,239,231,1),transparent_50%),radial-gradient(circle_at_85%_30%,rgba(196,223,200,0.5),transparent_50%)] pt-20 overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 md:py-28 lg:py-32 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="bg-shape-1 absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] bg-[rgba(196,223,200,0.4)] rounded-full blur-[80px] -top-[30px] -right-[30px] lg:-top-[80px] lg:-right-[80px]" />
          <div className="bg-shape-2 absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] bg-[rgba(62,229,142,0.1)] rounded-full blur-[80px] bottom-0 -left-[30px] lg:-left-[80px]" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 text-center" ref={textRef}>
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-dark-green leading-[1.05]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Services
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl text-dark-green/80 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            Moenviron delivers solutions across the circular textile value chain—helping partners recover, redistribute, and prepare textiles for a circular future.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="service-card group flex flex-col lg:flex-row gap-8 lg:gap-12 p-8 md:p-10 lg:p-12 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-mint/30 shadow-xl hover:shadow-2xl hover:bg-white/60 transition-all duration-500"
              >
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center transition-all duration-500 shadow-lg ${service.comingSoon ? 'bg-gray-100' : 'bg-dark-green group-hover:scale-110 group-hover:rotate-6'}`}>
                    <service.icon className={`w-10 h-10 md:w-12 md:h-12 ${service.comingSoon ? 'text-gray-400' : 'text-white'}`} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 mb-6">
                    <h3 
                      className="text-2xl md:text-3xl font-bold text-dark-green leading-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {service.title}
                    </h3>
                    {service.comingSoon && (
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-forest/10 text-forest uppercase tracking-wider">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  
                  <p className="text-lg md:text-xl text-text-dark mb-8 leading-relaxed font-medium opacity-90">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-white/30 p-6 rounded-2xl border border-mint/20">
                      <h4 className="text-lg font-bold text-dark-green mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-forest" />
                        What we do:
                      </h4>
                      <ul className="space-y-3">
                        {service.whatWeDo.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-text-dark font-medium">
                            <ArrowRight className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white/30 p-6 rounded-2xl border border-mint/20">
                      <h4 className="text-lg font-bold text-dark-green mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-neon-accent" />
                        Who it's for:
                      </h4>
                      <ul className="space-y-3">
                        {service.whoItsFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-text-dark font-medium">
                            <ArrowRight className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-32 bg-dark-green/5 relative z-10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-dark-green"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Approach
            </h2>
            <div className="w-24 h-1.5 bg-neon-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 md:p-10 bg-white/60 backdrop-blur-md rounded-[2rem] shadow-lg text-center hover:bg-white transition-all duration-300 group hover:-translate-y-2 border border-mint/20">
              <div className="w-16 h-16 rounded-2xl bg-forest/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Recycle className="w-8 h-8 text-forest" />
              </div>
              <h3 className="text-xl font-bold text-dark-green mb-3">Reuse Before Recycling</h3>
              <p className="text-text-dark font-medium opacity-80">
                We prioritize extending textile life through reuse before considering recycling pathways.
              </p>
            </div>
            <div className="p-8 md:p-10 bg-white/60 backdrop-blur-md rounded-[2rem] shadow-lg text-center hover:bg-white transition-all duration-300 group hover:-translate-y-2 border border-mint/20">
              <div className="w-16 h-16 rounded-2xl bg-forest/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-forest" />
              </div>
              <h3 className="text-xl font-bold text-dark-green mb-3">Market-Driven Solutions</h3>
              <p className="text-text-dark font-medium opacity-80">
                Our solutions are anchored in real market demand and economic viability.
              </p>
            </div>
            <div className="p-8 md:p-10 bg-white/60 backdrop-blur-md rounded-[2rem] shadow-lg text-center hover:bg-white transition-all duration-300 group hover:-translate-y-2 border border-mint/20">
              <div className="w-16 h-16 rounded-2xl bg-forest/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe2 className="w-8 h-8 text-forest" />
              </div>
              <h3 className="text-xl font-bold text-dark-green mb-3">Scalable Systems</h3>
              <p className="text-text-dark font-medium opacity-80">
                We build systems designed to scale across regions and markets.
              </p>
            </div>
            <div className="p-8 md:p-10 bg-white/60 backdrop-blur-md rounded-[2rem] shadow-lg text-center hover:bg-white transition-all duration-300 group hover:-translate-y-2 border border-mint/20">
              <div className="w-16 h-16 rounded-2xl bg-forest/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-forest" />
              </div>
              <h3 className="text-xl font-bold text-dark-green mb-3">Cross-Border Collaboration</h3>
              <p className="text-text-dark font-medium opacity-80">
                We facilitate partnerships across borders to create global circular flows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Us CTA */}
      <section className="py-20 md:py-32 relative z-10 mb-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto relative bg-dark-green rounded-[3rem] p-12 md:p-20 text-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-forest),transparent_70%)] opacity-50" />
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] bg-neon-accent/10 -bottom-20 -right-20" />
          
          <div className="relative z-10">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Work With Us
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Moenviron partners with organizations looking to unlock value from textile waste and participate in the circular economy.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 font-heading font-semibold rounded-full bg-neon-accent text-dark-green shadow-[0_4px_20px_rgba(62,229,142,0.3)] hover:bg-white hover:text-dark-green hover:shadow-[0_8px_30px_rgba(62,229,142,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                Explore Partnership Opportunities
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 font-heading font-semibold rounded-full bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Get in Touch
                <Mail className="w-5 h-5 ml-2 text-neon-accent" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

