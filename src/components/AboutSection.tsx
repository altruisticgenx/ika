import { Shield, Brain, Scale, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal, staggerContainerVariants, staggerItemVariants } from '@/hooks/useScrollReveal';
const AboutSection = () => {
  const {
    ref,
    isInView
  } = useScrollReveal(0.2);
  const highlights = [{
    icon: Brain,
    label: 'AI Systems',
    description: 'GPT-4, Claude, Llama, Mistral'
  }, {
    icon: Scale,
    label: 'Policy Frameworks',
    description: 'NIST AI RMF, FERPA, Title IX'
  }, {
    icon: Shield,
    label: 'Governance',
    description: 'Risk controls & compliance'
  }, {
    icon: Lock,
    label: 'Security',
    description: 'Pentesting & threat modeling'
  }];
  return <section id="about" className="py-16 sm:py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(220_30%_12%)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div ref={ref} className="max-w-6xl mx-auto" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainerVariants}>
          {/* Section header */}
          <motion.div className="mb-10 sm:mb-16" variants={staggerItemVariants}>
            <span className="font-mono text-xs sm:text-sm text-primary uppercase tracking-wider">About</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium mt-2">
              Bridging Policy & Technology
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 bg-transparent">
            {/* Left column - text */}
            <motion.div className="space-y-4 sm:space-y-6" variants={staggerItemVariants}>
              <p className="text-base leading-relaxed text-gray-950 sm:text-base">
                I'm a policy and applied AI researcher who turns governance frameworks into 
                real, testable systems. With over 4 years of experience across federal agencies 
                including DoD, DIA, DOE, and DLA, I specialize in converting compliance mandates 
                into deployable AI prototypes, dashboards, and security-validated risk controls.
              </p>
              <p className="text-base leading-relaxed text-slate-950 sm:text-base">
                My work sits at the intersection of public sector research, regulatory analysis, 
                and hands-on LLM engineering. I believe in building AI systems that are not just 
                powerful, but accountable, auditable, and aligned with public interest.
              </p>
              <div className="pt-2 sm:pt-4">
                <a href="#contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Let's work together
                  <span className="text-lg">→</span>
                </a>
              </div>
            </motion.div>

            {/* Right column - highlights */}
            <motion.div className="grid grid-cols-2 gap-3 sm:gap-4" variants={staggerContainerVariants}>
              {highlights.map(item => <motion.div key={item.label} className="card-glass rounded-lg p-4 sm:p-6 hover:border-primary/30 transition-colors group" variants={staggerItemVariants}>
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-base font-medium text-foreground mb-1 sm:text-base">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground sm:text-xs">
                    {item.description}
                  </p>
                </motion.div>)}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default AboutSection;