import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Coffee, ShoppingBag, MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBranchSelection } from '@/features/branches/context/BranchContext';
import { useCart } from '@/features/cart/context/CartContext';
import { scrollToSection as scrollToSectionUtil } from '@/shared/utils/scrollUtils';

export function Navbar() {
  const { selectedBranch } = useBranchSelection();
  const { totalItems, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    scrollToSectionUtil(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-card-strong mx-4 mt-4 rounded-2xl">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <m.a 
              href="#"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Coffee className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-2xl font-semibold text-primary">Tropic</span>
            </m.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('branches')}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Cabang
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Tentang Kami
              </button>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Branch Indicator */}
              {selectedBranch && (
                <m.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="truncate max-w-[120px]">{selectedBranch.name.replace('Tropic ', '')}</span>
                </m.div>
              )}

              {/* Cart Button */}
              <Button 
                variant="ghost" 
                size="icon"
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <m.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium"
                  >
                    {totalItems}
                  </m.span>
                )}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-card-strong mx-4 mt-2 rounded-2xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('menu')}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors font-medium"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('branches')}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors font-medium"
              >
                Cabang
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted transition-colors font-medium"
              >
                Tentang Kami
              </button>
              {selectedBranch && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-accent/10 text-accent font-medium mt-2">
                  <MapPin className="w-4 h-4" />
                  <span>Memesan dari: {selectedBranch.name}</span>
                </div>
              )}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
