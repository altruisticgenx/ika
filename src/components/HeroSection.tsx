import { ArrowDown, Mail, Linkedin, FileText } from "lucide-react";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";

// Lazy load WebGL component for performance
const GovernanceLattice = lazy(() => import("./GovernanceLattice"));
const HeroSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [showLattice, setShowLattice] = useState(false);

  // Delay WebGL load for initial paint performance
  useEffect(() => {
    const timer = setTimeout(() => setShowLattice(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Lightweight 3D parallax (mobile-safe)
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y / rect.height - 0.5) * -6;
      const rotateY = (x / rect.width - 0.5) * 6;
      el.style.transform = `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(12px)
      `;
    };
    const reset = () => {
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    };
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-14 sm:pt-16">
      {/* WebGL Governance Lattice */}
      <Suspense fallback={null}>
        {showLattice && <GovernanceLattice />}
      </Suspense>

      {/* Ambient gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(174_72%_50%_/_0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(220_40%_20%_/_0.3)_0%,_transparent_50%)]" />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
      backgroundSize: "60px 60px"
    }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div ref={cardRef} className="max-w-4xl mx-auto will-change-transform" style={{
        transformStyle: "preserve-3d"
      }} variants={containerVariants} initial="hidden" animate="visible">
          <div className="card-glass rounded-2xl p-8 md:p-12 backdrop-blur-xl border-border/30">
            {/* Status */}
            <motion.div className="flex items-center gap-2 mb-8" variants={itemVariants}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-mono text-muted-foreground">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6" variants={itemVariants}>
              Inga Kaltak
            </motion.h1>

            {/* Title */}
            <motion.p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-display mb-8 flex flex-wrap items-center gap-3" variants={itemVariants}>
              <span className="text-gradient">Technical Policy Researcher</span>
              <span className="text-border hidden sm:inline">|</span>
              <span>Applied AI Engineer</span>
            </motion.p>

            {/* Description */}
            <motion.p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12" variants={itemVariants}>
              Turning governance frameworks into real, testable systems. 4+ years
              bridging federal regulatory analysis, public policy research, and
              LLM-powered tooling across public-sector environments.
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-4 mb-10" variants={itemVariants}>
              <a href="mailto:ingakaltak7@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 sm:px-5 py-2.5 sm:py-3 text-primary-foreground text-sm sm:text-base font-medium transition-transform hover:scale-[1.02] glow-primary">
                <Mail size={18} />
                <span className="hidden sm:inline">Contact</span>
                <span className="sm:hidden">Email</span>
              </a>
              <a href="https://www.linkedin.com/in/inga-kaltak" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 border border-border text-foreground text-sm sm:text-base font-medium rounded-md hover:bg-secondary transition-colors">
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 border border-border text-foreground text-sm sm:text-base font-medium rounded-md hover:bg-secondary transition-colors">
                <FileText size={18} />
                Work
              </a>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants}>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Experience with
              </p>
              <div className="flex flex-wrap gap-[10px]">
                {["DoD", "DIA", "DOE", "DLA"].map(org => <span key={org} className="bg-secondary/50 border border-border rounded font-mono text-secondary-foreground text-xs px-[10px] py-[5px]">
                    {org}
                  </span>)}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float" aria-label="Scroll to about section">
        <ArrowDown size={24} />
      </a>
    </section>;
};
export default HeroSection;