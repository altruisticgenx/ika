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
  return <section className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden pt-16 pb-8 px-4 sm:px-6">
      {/* WebGL Governance Lattice */}
      <Suspense fallback={null}>
        {showLattice && <GovernanceLattice />}
      </Suspense>

      {/* Ambient gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(174_72%_50%_/_0.12)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(220_40%_20%_/_0.4)_0%,_transparent_50%)]" />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
      backgroundSize: "40px 40px"
    }} />

      <div className="container mx-auto relative z-10">
        <motion.div ref={cardRef} className="max-w-4xl mx-auto will-change-transform" style={{
        transformStyle: "preserve-3d"
      }} variants={containerVariants} initial="hidden" animate="visible">
          <div className="card-glass rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 backdrop-blur-xl border-border/40">
            {/* Status */}
            <motion.div className="flex items-center gap-2 mb-6 sm:mb-8" variants={itemVariants}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-4 sm:mb-6 text-foreground" variants={itemVariants}>
              Inga Kaltak
            </motion.h1>

            {/* Title */}
            <motion.div className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-display mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3" variants={itemVariants}>
              <span className="text-gradient font-medium">Technical Policy Researcher</span>
              <span className="hidden sm:inline text-border/50">|</span>
              <span className="text-foreground/80">Applied AI Engineer</span>
            </motion.div>

            {/* Description */}
            <motion.p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8 sm:mb-10" variants={itemVariants}>
              Turning governance frameworks into real, testable systems. 4+ years
              bridging federal regulatory analysis, public policy research, and
              LLM-powered tooling across public-sector environments.
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10" variants={itemVariants}>
              <a href="mailto:ingakaltak7@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-primary-foreground text-sm font-medium transition-all hover:scale-[1.02] hover:brightness-110 glow-primary">
                <Mail size={18} />
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/inga-kaltak" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary/80 transition-colors">
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href="#projects" className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary/80 transition-colors">
                <FileText size={18} />
                View Work
              </a>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants}>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                Experience with
              </p>
              <div className="flex flex-wrap gap-2">
                {["DoD", "DIA", "DOE", "DLA"].map(org => <span key={org} className="bg-secondary border border-border/50 rounded-md font-mono text-secondary-foreground text-xs px-3 py-1.5">
                    {org}
                  </span>)}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float" aria-label="Scroll to about section">
        <ArrowDown size={20} className="sm:w-6 sm:h-6" />
      </a>
    </section>;
};
export default HeroSection;