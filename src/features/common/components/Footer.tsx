import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Coffee className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-2xl font-semibold text-primary">Tropic</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Kopi panggang segar dengan inspirasi tropis. 4 cabang lokal siap melayani Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#branches" className="hover:text-primary transition-colors">Cabang</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><Link to="/pengembang" className="hover:text-primary transition-colors">Pengembang</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Karir</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/tropic.pnk/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Tropic Coffee. Hak cipta dilindungi. <br />Made with ☕️ by @ihza_baker.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary transition-colors">Syarat Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
