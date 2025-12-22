import { ArrowDown, Mail, Linkedin, FileText } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(174_72%_50%_/_0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(220_40%_20%_/_0.3)_0%,_transparent_50%)]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status indicator */}
          <div className="flex items-center gap-2 mb-8 opacity-0 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-mono text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 opacity-0 animate-fade-up stagger-1">
            Inga Kaltak
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-display mb-8 opacity-0 animate-fade-up stagger-2">
            <span className="text-gradient">Technical Policy Researcher</span>
            <span className="mx-3 text-border">|</span>
            <span>Applied AI Engineer</span>
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12 opacity-0 animate-fade-up stagger-3">
            Turning governance frameworks into real, testable systems. 4+ years bridging 
            federal regulatory analysis, public policy research, and LLM-powered tooling 
            across public-sector environments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 opacity-0 animate-fade-up stagger-4">
            <a
              href="mailto:altruisticxai@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all hover:gap-3 glow-primary"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-colors"
            >
              <FileText size={18} />
              View Work
            </a>
          </div>

          {/* Clients/Experience badges */}
          <div className="opacity-0 animate-fade-up stagger-5">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
              Experience with
            </p>
            <div className="flex flex-wrap gap-3">
              {['DoD', 'DIA', 'DOE', 'DLA'].map((org) => (
                <span
                  key={org}
                  className="px-3 py-1.5 bg-secondary/50 border border-border rounded text-sm font-mono text-secondary-foreground"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
