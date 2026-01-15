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
  // Only lazy load non-critical sections (Footer)
  // Menu, Branches, and About are loaded immediately to ensure navigation and CTA buttons work reliably
  const { ref: footerRef, inView: footerInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Menu Section - Always loaded for CTA button reliability */}
      <Suspense fallback={<MenuSectionSkeleton />}>
        <MenuSection />
      </Suspense>
      
      {/* Branch Hub - Always loaded for CTA button reliability */}
      <Suspense fallback={<div className="h-96" />}>
        <BranchHub />
      </Suspense>
      
      {/* About Section - Always loaded for navigation reliability */}
      <Suspense fallback={<div className="h-64" />}>
        <About />
      </Suspense>
      
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
