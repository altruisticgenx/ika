const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      category: 'Policy & Public Sector Research',
      skills: [
        'Policy analysis & requirements mapping',
        'Stakeholder research & memos/briefs',
        'FERPA, Title IX, NIST AI RMF',
        'Impact/risk assessments',
        'Audit readiness',
        'Public interest technology',
      ],
    },
    {
      category: 'Applied AI / LLM Systems',
      skills: [
        'GPT-4, Claude, Llama, Mistral',
        'Prompt design & workflow automation',
        'Regulatory requirement extraction',
        'Summarization pipelines',
        'Open-source LLM deployment',
        'Infrastructure cost optimization',
      ],
    },
    {
      category: 'Responsible AI & Governance',
      skills: [
        'NIST AI RMF implementation',
        'Controls mapping & monitoring',
        'Risk registers',
        'Compliance automation',
        'Governance documentation',
        'Operational controls mapping',
      ],
    },
    {
      category: 'Cybersecurity & Technical Risk',
      skills: [
        'Penetration testing',
        'OSINT & threat modeling',
        'Metasploit',
        'Burp Suite',
        'Nmap',
        'Security assessments',
      ],
    },
    {
      category: 'Analytics & Delivery',
      skills: [
        'Dashboards & metrics',
        'Quantitative analysis',
        'ROI reporting',
        'Stakeholder briefings',
        'Product delivery',
        'UX/content strategy',
      ],
    },
  ];

  return (
    <section id="expertise" className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <span className="font-mono text-sm text-primary uppercase tracking-wider">Expertise</span>
            <h2 className="font-display text-4xl md:text-5xl font-medium mt-2">
              Core Competencies
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              A unique blend of policy research, AI engineering, and cybersecurity expertise 
              built through years of public-sector work.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={area.category}
                className="card-glass rounded-lg p-6 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="font-mono text-xs text-primary opacity-60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl font-medium text-foreground">
                    {area.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {area.skills.map((skill) => (
                    <li 
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
