import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal, staggerContainerVariants, staggerItemVariants } from '@/hooks/useScrollReveal';

const ContactSection = () => {
  const { ref, isInView } = useScrollReveal(0.3);

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174_72%_50%_/_0.08)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          {/* Section header */}
          <motion.span 
            className="font-mono text-xs sm:text-sm text-primary uppercase tracking-wider"
            variants={staggerItemVariants}
          >
            Contact
          </motion.span>
          <motion.h2 
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mt-2 mb-4 sm:mb-6"
            variants={staggerItemVariants}
          >
            Let's Build Something<br />
            <span className="text-gradient">Responsible</span> Together
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-12"
            variants={staggerItemVariants}
          >
            Interested in AI governance, policy implementation, or building compliant AI systems? 
            I'd love to hear from you.
          </motion.p>

          {/* Contact buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            variants={staggerItemVariants}
          >
            <motion.a
              href="mailto:ingakaltak7@gmail.com"
              className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground text-sm sm:text-base font-medium rounded-lg hover:bg-primary/90 transition-all group glow-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">ingakaltak7@gmail.com</span>
              <span className="sm:hidden">Email Me</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/inga-kaltak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 border border-border text-foreground text-sm sm:text-base font-medium rounded-lg hover:bg-card transition-colors group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              LinkedIn
              <ArrowUpRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </motion.a>
          </motion.div>

          {/* Decorative element */}
          <motion.div 
            className="flex items-center justify-center gap-4 text-muted-foreground"
            variants={staggerItemVariants}
          >
            <div className="h-px w-16 bg-border" />
            <span className="font-mono text-xs uppercase tracking-wider">
              AI Governance & Public Sector Systems
            </span>
            <div className="h-px w-16 bg-border" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
