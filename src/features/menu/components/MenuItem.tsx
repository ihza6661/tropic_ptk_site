import { m } from 'framer-motion';
import { Plus, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/features/cart/context/CartContext';
import { formatCurrency } from '@/shared/lib/currency';

interface MenuItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: string;
    tags: string[];
    calories: number;
  };
  index: number;
}

export function MenuItem({ item, index }: MenuItemProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
  };

  const getTagStyle = (tag: string) => {
    switch (tag) {
      case 'terlaris':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'baru':
        return 'bg-emerald-light/20 text-emerald-light border-emerald-light/30';
      case 'vegan':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'musiman':
        return 'bg-tropical-orange/20 text-tropical-orange border-tropical-orange/30';
      case 'dingin':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'segar':
        return 'bg-cyan-100 text-cyan-700 border-cyan-200';
      case 'sehat':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  // Color mapping for consistent Tailwind class generation
  const colorClasses = {
    0: 'from-orange-100 via-amber-50 to-orange-50', // Warm/Coffee
    1: 'from-emerald-100 via-green-50 to-emerald-50', // Fresh/Matcha
    2: 'from-rose-100 via-pink-50 to-rose-50', // Berry/Sweet
    3: 'from-amber-100 via-yellow-50 to-amber-50', // Pastry
    4: 'from-stone-200 via-stone-100 to-stone-50', // Neutral/Dark Coffee
    5: 'from-blue-100 via-slate-50 to-blue-50', // Cool/Iced
  } as const;

  const getPlaceholderColor = (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colorIndex = Math.abs(hash) % 6 as keyof typeof colorClasses;
    return colorClasses[colorIndex];
  };

  const placeholderGradient = getPlaceholderColor(item.name);

  return (
    <m.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="glass-card rounded-2xl overflow-hidden group hover:shadow-tropic-lg transition-all duration-300"
    >
      {/* Image Placeholder */}
      <div className={`h-44 bg-gradient-to-br ${placeholderGradient} relative overflow-hidden shimmer-effect`}>
        <div className="absolute inset-0 botanical-pattern opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {item.tags.map((tag, i) => (
            <span 
              key={i}
              className={`px-2 py-0.5 rounded-full text-xs font-medium border capitalize flex items-center gap-1 backdrop-blur-sm ${getTagStyle(tag)}`}
            >
              {tag === 'terlaris' && <Sparkles className="w-3 h-3" />}
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Add Button - appears on hover */}
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="btn-tropical rounded-xl text-accent-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add
          </Button>
        </m.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-200 mb-2 line-clamp-2">
          {item.name}
        </h3>
        
        <div className="mb-4">
          <span className="price-badge inline-block text-base font-bold text-white px-3 py-1.5 rounded-lg shadow-md">
            {formatCurrency(item.price)}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
            {item.calories} kal
          </span>
          
          {/* Mobile Add Button */}
          <Button
            onClick={handleAddToCart}
            size="sm"
            variant="ghost"
            className="md:hidden text-accent hover:text-accent hover:bg-accent/10 transition-all duration-200"
          >
            <Plus className="w-4 h-4 mr-1" />
            Tambah
          </Button>
        </div>
      </div>
    </m.div>
  );
}
