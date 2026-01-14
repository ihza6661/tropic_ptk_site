import { lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { Navbar } from '@/features/common/components/Navbar';
import { Hero } from '@/features/common/components/Hero';
import { CartSheet } from '@/features/cart/components/CartSheet';
import { MenuSectionSkeleton } from '@/features/menu/components/MenuSectionSkeleton';

// Lazy load heavy sections
const MenuSection = lazy(() => import('@/features/menu/components/MenuSection').then(module => ({ default: module.MenuSection })));
const BranchHub = lazy(() => import('@/features/branches/components/BranchHub').then(module => ({ default: module.BranchHub })));
const About = lazy(() => import('@/features/common/components/About').then(module => ({ default: module.About })));
const Footer = lazy(() => import('@/features/common/components/Footer').then(module => ({ default: module.Footer })));

const Index = () => {
  // Intersection observers for lazy loading
  const { ref: menuRef, inView: menuInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: branchRef, inView: branchInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: footerRef, inView: footerInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Menu Section with lazy loading */}
      <div ref={menuRef}>
        {menuInView ? (
          <Suspense fallback={<MenuSectionSkeleton />}>
            <MenuSection />
          </Suspense>
        ) : (
          <MenuSectionSkeleton />
        )}
      </div>
      
      {/* Branch Hub with lazy loading */}
      <div ref={branchRef}>
        {branchInView ? (
          <Suspense fallback={<div className="h-96" />}>
            <BranchHub />
          </Suspense>
        ) : (
          <div className="h-96" />
        )}
      </div>
      
      {/* About Section with lazy loading */}
      <div ref={aboutRef}>
        {aboutInView ? (
          <Suspense fallback={<div className="h-64" />}>
            <About />
          </Suspense>
        ) : (
          <div className="h-64" />
        )}
      </div>
      
      {/* Footer with lazy loading */}
      <div ref={footerRef}>
        {footerInView ? (
          <Suspense fallback={<div className="h-32" />}>
            <Footer />
          </Suspense>
        ) : (
          <div className="h-32" />
        )}
      </div>
      
      <CartSheet />
    </div>
  );
};

export default Index;
