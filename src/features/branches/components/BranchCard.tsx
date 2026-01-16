import { m } from 'framer-motion';
import { MapPin, Clock, Check, Wifi, Leaf, Coffee, Briefcase, Sparkles, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Branch, useBranchSelection } from '../context/BranchContext';

interface BranchCardProps {
  branch: Branch;
  index: number;
  onCardClick?: (branch: Branch) => void;
  isFocused?: boolean;
}

export function BranchCard({ branch, index, onCardClick, isFocused }: BranchCardProps) {
  const { selectedBranch, setSelectedBranch, isOpen } = useBranchSelection();
  const open = isOpen(branch);
  const isSelected = selectedBranch?.id === branch.id;

  // Color mapping for branch placeholders
  const branchColorClasses = {
    0: 'from-emerald-100 via-green-50 to-emerald-50',
    1: 'from-amber-100 via-orange-50 to-amber-50',
    2: 'from-blue-100 via-cyan-50 to-blue-50',
    3: 'from-rose-100 via-pink-50 to-rose-50',
  } as const;

  const getBranchColor = (branchId: string): string => {
    let hash = 0;
    for (let i = 0; i < branchId.length; i++) {
      hash = branchId.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colorIndex = Math.abs(hash) % 4 as keyof typeof branchColorClasses;
    return branchColorClasses[colorIndex];
  };

  const branchGradient = getBranchColor(branch.id);

  const getVibeIcon = (vibe: string) => {
    if (vibe.includes('Wifi') || vibe.includes('Coworking')) return Wifi;
    if (vibe.includes('Organic') || vibe.includes('Pet') || vibe.includes('Garden')) return Leaf;
    return Coffee;
  };

  const getFacilityIcon = (facility: string) => {
    const lowerFacility = facility.toLowerCase();
    if (lowerFacility.includes('working') || lowerFacility.includes('coworking')) return Briefcase;
    if (lowerFacility.includes('musholla') || lowerFacility.includes('prayer')) return Sparkles;
    if (lowerFacility.includes('eatery') || lowerFacility.includes('restaurant')) return UtensilsCrossed;
    return Coffee;
  };

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(branch);
    }
  };

  return (
    <m.div
      id={`branch-${branch.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.01 }}
      onClick={handleCardClick}
      className={`glass-card rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer ${
        isSelected ? 'ring-2 ring-accent ring-offset-2 ring-offset-background shadow-tropic-lg' : ''
      } ${isFocused ? 'ring-2 ring-primary ring-offset-2 ring-offset-background shadow-tropic-lg' : ''}`}
    >
      {/* Image Placeholder */}
      <div className={`h-40 bg-gradient-to-br ${branchGradient} relative overflow-hidden shimmer-effect group`}>
        <div className="absolute inset-0 botanical-pattern opacity-40 group-hover:opacity-50 transition-opacity duration-300" />
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          {branch.isOpen24Hours ? (
            <div className="px-3 py-1 rounded-full text-xs font-medium border bg-accent/95 border-accent text-accent-foreground backdrop-blur-sm shadow-lg">
              Buka 24 Jam
            </div>
          ) : (
            <div className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm shadow-md ${
              open ? 'status-open' : 'status-closed'
            }`}>
              {open ? 'Buka Sekarang' : 'Tutup'}
            </div>
          )}
        </div>
        {isSelected && (
          <m.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-lg"
          >
            <Check className="w-4 h-4 text-accent-foreground" />
          </m.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
          {branch.name}
        </h3>
        
        <div className="flex items-start gap-2 text-muted-foreground text-sm mb-4">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
          <span>{branch.address}</span>
        </div>

        {/* Operating Hours */}
        {!branch.isOpen24Hours && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
            <Clock className="w-4 h-4 flex-shrink-0 text-accent" />
            <span>{branch.hours.open} - {branch.hours.close}</span>
          </div>
        )}

        {/* Kitchen Hours */}
        {branch.kitchenHours && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
            <UtensilsCrossed className="w-4 h-4 flex-shrink-0 text-accent" />
            <span>Kitchen: {branch.kitchenHours.open} - {branch.kitchenHours.close}</span>
          </div>
        )}

        {/* Facilities */}
        {branch.facilities && branch.facilities.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {branch.facilities.map((facility, i) => {
              const Icon = getFacilityIcon(facility);
              return (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-xs font-medium border border-accent/30 hover:bg-accent/20 transition-colors duration-200">
                  <Icon className="w-4 h-4" />
                  {facility}
                </span>
              );
            })}
          </div>
        )}

        {/* Vibes */}
        <div className="flex flex-wrap gap-2 mb-8">{branch.vibes.map((vibe, i) => {
            const Icon = getVibeIcon(vibe);
            return (
              <span key={i} className="vibe-tag flex items-center gap-1.5 hover:bg-primary/15 transition-colors duration-200">
                <Icon className="w-3.5 h-3.5" />
                {vibe}
              </span>
            );
          })}
        </div>

        {/* Set as Local Button */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedBranch(isSelected ? null : branch);
          }}
          variant={isSelected ? "default" : "outline"}
          className={`w-full rounded-xl transition-all duration-200 ${
            isSelected 
              ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg' 
              : 'hover:bg-primary hover:text-primary-foreground hover:border-primary'
          }`}
        >
          {isSelected ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Cabang Saya
            </>
          ) : (
            'Jadikan Cabang Saya'
          )}
        </Button>
      </div>
    </m.div>
  );
}
