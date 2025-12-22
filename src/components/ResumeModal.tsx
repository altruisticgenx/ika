import { X, Download, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[95vw] max-w-3xl max-h-[90vh] bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
              <h2 className="font-display text-xl sm:text-2xl font-medium">Resume</h2>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="/Inga_Kaltak_Resume.pdf"
                  download="Inga_Kaltak_Resume.pdf"
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Download size={16} />
                  <span className="hidden sm:inline">Download PDF</span>
                  <span className="sm:hidden">PDF</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="h-[60vh] sm:h-[70vh] bg-secondary/30">
              <iframe
                src="/Inga_Kaltak_Resume.pdf"
                className="w-full h-full"
                title="Inga Kaltak Resume"
              />
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border bg-card">
              <p className="text-sm text-muted-foreground text-center">
                Having trouble viewing? {' '}
                <a
                  href="/Inga_Kaltak_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Open in new tab <ExternalLink size={14} />
                </a>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
