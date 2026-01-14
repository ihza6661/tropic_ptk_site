import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Coffee, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Coffee className="w-10 h-10 text-primary" />
        </div>
        <h1 className="font-serif text-6xl font-semibold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! Halaman ini sedang liburan tropis dan tidak dapat ditemukan.
        </p>
        <Button asChild className="btn-tropical text-accent-foreground rounded-xl px-6">
          <a href="/">
            <Home className="w-4 h-4 mr-2" />
            Kembali ke Tropic
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
