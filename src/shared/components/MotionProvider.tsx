import { LazyMotion, domAnimation } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionProviderProps {
  children: ReactNode;
}

/**
 * LazyMotion wrapper that loads only the necessary features from framer-motion.
 * This significantly reduces the bundle size by only including domAnimation features.
 * Use this at the root of your app or around sections that use framer-motion.
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
