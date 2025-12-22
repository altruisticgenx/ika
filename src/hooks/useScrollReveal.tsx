import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const useScrollReveal = (amount: number = 0.3, once: boolean = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once });
  
  return { ref, isInView };
};

export const scrollRevealVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
    }
  },
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

export const staggerItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    }
  },
};
