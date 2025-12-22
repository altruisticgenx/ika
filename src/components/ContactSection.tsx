import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174_72%_50%_/_0.08)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <span className="font-mono text-sm text-primary uppercase tracking-wider">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mt-2 mb-6">
            Let's Build Something<br />
            <span className="text-gradient">Responsible</span> Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Interested in AI governance, policy implementation, or building compliant AI systems? 
            I'd love to hear from you.
          </p>

          {/* Contact buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="mailto:altruisticxai@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all group glow-primary"
            >
              <Mail className="w-5 h-5" />
              altruisticxai@gmail.com
              <ArrowUpRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-card transition-colors group"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
              <ArrowUpRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </a>
          </div>

          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <div className="h-px w-16 bg-border" />
            <span className="font-mono text-xs uppercase tracking-wider">
              AI Governance & Public Sector Systems
            </span>
            <div className="h-px w-16 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
