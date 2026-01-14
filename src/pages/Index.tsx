import { Navbar } from '@/features/common/components/Navbar';
import { Hero } from '@/features/common/components/Hero';
import { MenuSection } from '@/features/menu/components/MenuSection';
import { BranchHub } from '@/features/branches/components/BranchHub';
import { About } from '@/features/common/components/About';
import { Footer } from '@/features/common/components/Footer';
import { CartSheet } from '@/features/cart/components/CartSheet';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MenuSection />
      <BranchHub />
      <About />
      <Footer />
      <CartSheet />
    </div>
  );
};

export default Index;
