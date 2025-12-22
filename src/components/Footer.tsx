const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-display text-lg font-semibold text-foreground">
            Inga Kaltak<span className="text-primary">.</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Inga Kaltak. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="mailto:ingakaltak7@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/inga-kaltak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
