import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import ResumeModal from './ResumeModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <a href="#" className="font-display text-lg sm:text-xl font-semibold text-foreground">
              IK<span className="text-primary">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="link-underline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => setShowResume(true)}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Download size={16} />
                Resume
              </button>
              <a
                href="mailto:ingakaltak7@gmail.com"
                className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/30">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3 border-b border-border/50"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setShowResume(true);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3 border-b border-border/50"
              >
                <Download size={18} />
                Resume
              </button>
              <a
                href="mailto:ingakaltak7@gmail.com"
                className="mt-2 px-4 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-md text-center hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>

      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </>
  );
};

export default Navigation;
