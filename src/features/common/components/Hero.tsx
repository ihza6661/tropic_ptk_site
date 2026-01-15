import { m } from 'framer-motion';
import { Coffee, MapPin, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/shared/utils/scrollUtils';
import heroBg from '@/assets/hero-bg.jpg';

export function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg}
          alt="Suasana kopi tropis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>

      {/* Decorative Elements */}
      <m.div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <m.div 
        className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-tropical-orange/20 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-24 sm:pt-20 md:pt-0">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm mb-8 whitespace-nowrap"
          >
            <Leaf className="w-4 h-4" />
            <span>24 Jam • 4 Cabang Lokal • Ruang Hijau</span>
          </m.div>

          {/* Headline */}
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Kopi <span className="text-tropical-orange drop-shadow-md">Segar</span> Setiap Hari.
          </m.h1>

          {/* Subtext */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow"
          >
            Kopi lokal berkualitas, suasana hijau yang santai dan tenang. Tropic hadir di 4 cabang.
          </m.p>

          {/* CTAs */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg"
              onClick={() => scrollToSection('branches')}
              className="btn-tropical text-accent-foreground px-8 py-6 text-lg rounded-2xl"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Cari Cabang
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('menu')}
              className="bg-white/15 backdrop-blur-md border-white/40 text-white hover:bg-white/25 px-8 py-6 text-lg rounded-2xl"
            >
              <Coffee className="w-5 h-5 mr-2" />
              Lihat Menu
            </Button>
          </m.div>

          {/* Scroll Indicator */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center mt-16 md:mt-20"
          >
            <m.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2"
            >
              <m.div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
            </m.div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
