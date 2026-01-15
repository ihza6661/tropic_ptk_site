import { useState, useMemo } from 'react';
import { m } from 'framer-motion';
import { Coffee, Search, X, Loader2, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MenuItem } from './MenuItem';
import { useMenu } from '../queries/useMenu';

export function MenuSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const { data: menuData, isLoading, isError, error } = useMenu();

  const categories = menuData?.categories || [];

  const filteredCategories = useMemo(() => {
    if (!searchQuery && !activeCategory) return categories;

    return categories
      .map(category => ({
        ...category,
        items: category.items.filter(item => {
          const matchesSearch = !searchQuery || 
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
          
          const matchesCategory = !activeCategory || category.id === activeCategory;
          
          return matchesSearch && matchesCategory;
        })
      }))
      .filter(category => category.items.length > 0);
  }, [searchQuery, activeCategory, categories]);

  return (
    <section id="menu" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Coffee className="w-4 h-4" />
            <span>Menu Kami</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Menu Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Latte spesial, kopi klasik, dan makanan ringan.
          </p>
        </m.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
            <p className="text-lg text-muted-foreground">Memuat menu...</p>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <Alert variant="destructive" className="max-w-2xl mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error memuat menu</AlertTitle>
            <AlertDescription>
              {error instanceof Error ? error.message : 'Gagal memuat menu. Silakan coba lagi nanti.'}
            </AlertDescription>
          </Alert>
        )}

        {/* Menu Content */}
        {!isLoading && !isError && (
          <>
            {/* Search & Filters */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 mb-10 max-w-3xl mx-auto"
            >
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Cari menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 pr-10 py-6 rounded-2xl bg-card border-border focus:ring-2 focus:ring-accent/20"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category Filters */}
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                <Button
                  variant={!activeCategory ? "default" : "outline"}
                  onClick={() => setActiveCategory(null)}
                  className={`rounded-xl whitespace-nowrap ${
                    !activeCategory ? 'bg-primary text-primary-foreground' : ''
                  }`}
                >
                  Semua
                </Button>
                {categories.map(cat => (
                  <Button
                    key={cat.id}
                    variant={activeCategory === cat.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                    className={`rounded-xl whitespace-nowrap ${
                      activeCategory === cat.id ? 'bg-primary text-primary-foreground' : ''
                    }`}
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
            </m.div>

            {/* Menu Categories */}
            <div className="space-y-16">
              {filteredCategories.map((category, catIndex) => (
                <m.div
                  key={category.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {category.items.map((item, index) => (
                      <MenuItem key={item.id} item={item} index={index} />
                    ))}
                  </div>
                </m.div>
              ))}

              {filteredCategories.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">
                    Tidak ada item ditemukan. Coba pencarian lain.
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
