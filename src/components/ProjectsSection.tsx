import { ArrowUpRight, BarChart3, Bot, FileCheck, Cpu, Shield, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal, staggerContainerVariants, staggerItemVariants } from '@/hooks/useScrollReveal';

const ProjectsSection = () => {
  const { ref, isInView } = useScrollReveal(0.1);

  const projects = [
    {
      icon: BarChart3,
      title: 'Education Compliance Dashboards',
      description: 'Built FERPA/Title IX compliance dashboards across multiple school districts, automating tracking and reporting.',
      tags: ['FERPA', 'Title IX', 'Analytics'],
      highlight: 'Multi-district deployment',
    },
    {
      icon: Bot,
      title: 'AI Consultancy & Automation',
      description: 'Designed and launched an AI consultancy delivering automation prototypes including inventory systems and virtual support bots.',
      tags: ['LLM', 'Automation', 'Consulting'],
      highlight: 'End-to-end delivery',
    },
    {
      icon: FileCheck,
      title: 'Institutional POC Studies',
      description: 'Delivered 3 institutional proof-of-concept studies translating policy frameworks into deployable controls and audit-ready documentation.',
      tags: ['Policy', 'Compliance', 'Documentation'],
      highlight: '3 POC deliveries',
    },
    {
      icon: Cpu,
      title: 'Regulatory Extraction Tools',
      description: 'Developed GPT-4/Claude tools for regulatory requirement extraction, summarization, and implementation planning.',
      tags: ['GPT-4', 'Claude', 'NLP'],
      highlight: 'Custom LLM tooling',
    },
    {
      icon: Shield,
      title: 'NIST AI RMF Assessments',
      description: 'Conducted 5 feasibility assessments for NIST AI RMF, producing technical specs, controls mappings, and risk registers.',
      tags: ['NIST', 'Risk Assessment', 'Governance'],
      highlight: '5 assessments completed',
    },
    {
      icon: Layers,
      title: 'Open-Source LLM Deployment',
      description: 'Deployed open-source LLMs (Llama/Mistral) to reduce infrastructure costs 40% and minimize vendor dependency.',
      tags: ['Llama', 'Mistral', 'Cost Optimization'],
      highlight: '40% cost reduction',
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(174_72%_50%_/_0.05)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref}
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          {/* Section header */}
          <motion.div className="mb-16" variants={staggerItemVariants}>
            <span className="font-mono text-sm text-primary uppercase tracking-wider">Work</span>
            <h2 className="font-display text-4xl md:text-5xl font-medium mt-2">
              Selected Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              A selection of impactful projects across AI governance, compliance automation, 
              and public-sector technology.
            </p>
          </motion.div>

          {/* Projects grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainerVariants}
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="card-glass rounded-lg p-6 md:p-8 hover:border-primary/30 transition-all group relative overflow-hidden"
                variants={staggerItemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <project.icon className="w-10 h-10 text-primary" />
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlight badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4">
                    <ArrowUpRight className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-primary">{project.highlight}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-secondary/50 text-xs font-mono text-secondary-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
