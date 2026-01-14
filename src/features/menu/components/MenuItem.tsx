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

  return (
    <m.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="glass-card rounded-2xl overflow-hidden group"
    >
      {/* Image Placeholder */}
      <div className="h-44 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 botanical-pattern opacity-30" />
        
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {item.tags.map((tag, i) => (
            <span 
              key={i}
              className={`px-2 py-0.5 rounded-full text-xs font-medium border capitalize flex items-center gap-1 ${getTagStyle(tag)}`}
            >
              {tag === 'terlaris' && <Sparkles className="w-3 h-3" />}
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Add Button - appears on hover */}
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="btn-tropical rounded-xl text-accent-foreground shadow-lg"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add
          </Button>
        </m.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-lg font-semibold text-foreground leading-tight">
            {item.name}
          </h3>
          <span className="text-lg font-semibold text-accent whitespace-nowrap ml-3">
            {formatCurrency(item.price)}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {item.calories} kal
          </span>
          
          {/* Mobile Add Button */}
          <Button
            onClick={handleAddToCart}
            size="sm"
            variant="ghost"
            className="md:hidden text-accent hover:text-accent hover:bg-accent/10"
          >
            <Plus className="w-4 h-4 mr-1" />
            Tambah
          </Button>
        </div>
      </div>
    </m.div>
  );
}
