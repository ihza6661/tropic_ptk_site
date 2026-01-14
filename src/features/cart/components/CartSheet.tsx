import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Minus, Plus, X, MapPin, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/features/cart/context/CartContext';
import { useBranchSelection } from '@/features/branches/context/BranchContext';
import { useBranches } from '@/features/branches/queries/useBranches';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CartSheet() {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    removeItem, 
    updateQuantity, 
    totalPrice,
    clearCart 
  } = useCart();
  const { selectedBranch, setSelectedBranch } = useBranchSelection();
  const { data: branches = [] } = useBranches();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg bg-card border-l border-border flex flex-col">
        <SheetHeader className="pb-4 border-b border-border">
          <SheetTitle className="flex items-center gap-2 font-serif text-2xl">
            <ShoppingBag className="w-6 h-6 text-accent" />
            Pesanan Anda
          </SheetTitle>
        </SheetHeader>

        {/* Pickup Location Selector */}
        <div className="py-4 border-b border-border">
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Lokasi Pengambilan
          </label>
          <Select 
            value={selectedBranch?.id || ''} 
            onValueChange={(value) => {
              const branch = branches.find(b => b.id === value);
              if (branch) setSelectedBranch(branch);
            }}
          >
            <SelectTrigger className="w-full rounded-xl bg-background">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <SelectValue placeholder="Pilih cabang" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {branches.map(branch => (
                <SelectItem key={branch.id} value={branch.id}>
                  {branch.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto py-4">
          <AnimatePresence mode="popLayout">
            {items.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-lg font-medium text-foreground mb-2">Keranjang Anda kosong</p>
                <p className="text-sm text-muted-foreground">
                  Tambahkan item lezat dari menu kami!
                </p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center gap-4 p-3 rounded-2xl bg-background"
                  >
                    {/* Item Image Placeholder */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex-shrink-0" />
                    
                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">{item.name}</h4>
                      <p className="text-sm text-accent font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 rounded-lg"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-6 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 rounded-lg"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>

                    {/* Remove Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(item.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-border space-y-4">
            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Pajak (8%)</span>
                <span>${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold text-foreground pt-2 border-t border-border">
                <span>Total</span>
                <span className="text-accent">${(totalPrice * 1.08).toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <Button 
              className="w-full btn-tropical text-accent-foreground py-6 rounded-2xl text-lg font-semibold"
              disabled={!selectedBranch}
            >
              {selectedBranch ? `Checkout untuk Pengambilan di ${selectedBranch.name.replace('Tropic ', '')}` : 'Pilih Cabang untuk Melanjutkan'}
            </Button>

            {/* Clear Cart */}
            <Button
              variant="ghost"
              className="w-full text-muted-foreground"
              onClick={clearCart}
            >
              Kosongkan Keranjang
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
