import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Map, LayoutGrid, Loader2, AlertCircle } from 'lucide-react';
import { useBranchSelection } from '../context/BranchContext';
import { useBranches } from '../queries/useBranches';
import { Branch } from '../types';
import { BranchCard } from './BranchCard';
import { BranchMap } from './BranchMap';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function BranchHub() {
  const { data: branches = [], isLoading, isError, error } = useBranches();
  const { selectedBranch, setSelectedBranch } = useBranchSelection();
  const [focusedBranch, setFocusedBranch] = useState<Branch | null>(null);
  const [showMapOnMobile, setShowMapOnMobile] = useState(false);

  // Load saved branch from localStorage once data is loaded
  useEffect(() => {
    if (branches.length > 0 && !selectedBranch) {
      const savedBranchId = localStorage.getItem('tropic-local-branch');
      if (savedBranchId) {
        const branch = branches.find(b => b.id === savedBranchId);
        if (branch) setSelectedBranch(branch);
      }
    }
  }, [branches, selectedBranch, setSelectedBranch]);

  const handleCardClick = (branch: Branch) => {
    setFocusedBranch(branch);
  };

  const handleMarkerClick = (branch: Branch) => {
    setFocusedBranch(branch);
  };

  return (
    <section id="branches" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            <span>Cabang</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Temukan Oasis Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih cabang Tropic lokal Anda untuk pemesanan lebih cepat dan suasana yang personal. 
            Setiap lokasi memiliki atmosfer unik tersendiri.
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
            <p className="text-lg text-muted-foreground">Mencari lokasi kami...</p>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <Alert variant="destructive" className="max-w-2xl mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error memuat cabang</AlertTitle>
            <AlertDescription>
              {error instanceof Error ? error.message : 'Gagal memuat lokasi cabang. Silakan coba lagi nanti.'}
            </AlertDescription>
          </Alert>
        )}

        {/* Branch Content */}
        {!isLoading && !isError && branches.length > 0 && (
          <>
            {/* Mobile View Toggle */}
            <div className="lg:hidden flex justify-center mb-6">
              <div className="inline-flex rounded-2xl bg-card p-1 shadow-tropic">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowMapOnMobile(false)}
                  className={`rounded-xl px-4 ${!showMapOnMobile ? 'bg-primary text-primary-foreground' : ''}`}
                >
                  <LayoutGrid className="w-4 h-4 mr-2" />
                  Kartu
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowMapOnMobile(true)}
                  className={`rounded-xl px-4 ${showMapOnMobile ? 'bg-primary text-primary-foreground' : ''}`}
                >
                  <Map className="w-4 h-4 mr-2" />
                  Peta
                </Button>
              </div>
            </div>

            {/* Desktop Layout: Cards + Map Side by Side */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-8">
              {/* Branch Cards - 3 columns */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {branches.map((branch, index) => (
                    <BranchCard 
                      key={branch.id} 
                      branch={branch} 
                      index={index}
                      onCardClick={handleCardClick}
                      isFocused={focusedBranch?.id === branch.id}
                    />
                  ))}
                </div>
              </div>

              {/* Map - 2 columns */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 h-[600px] sticky top-24"
              >
                <BranchMap 
                  branches={branches}
                  focusedBranch={focusedBranch}
                  onMarkerClick={handleMarkerClick}
                />
              </motion.div>
            </div>

            {/* Mobile Layout: Toggle between Cards and Map */}
            <div className="lg:hidden">
              <AnimatePresence mode="wait">
                {showMapOnMobile ? (
                  <motion.div
                    key="map"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-[400px] md:h-[500px]"
                  >
                    <BranchMap 
                      branches={branches}
                      focusedBranch={focusedBranch}
                      onMarkerClick={handleMarkerClick}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="cards"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="grid sm:grid-cols-2 gap-5"
                  >
                    {branches.map((branch, index) => (
                      <BranchCard 
                        key={branch.id} 
                        branch={branch} 
                        index={index}
                        onCardClick={handleCardClick}
                        isFocused={focusedBranch?.id === branch.id}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
