import { m } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DeveloperProfile } from "@/features/developer/components/DeveloperProfile";

const Developer = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="container mx-auto px-6 py-8">
        <Button variant="ghost" className="mb-8" onClick={() => navigate("/")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali
        </Button>

        {/* Page Title */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pengembang
          </h1>
          <p className="text-muted-foreground text-lg">
            Berkenalan dengan developer di balik website ini
          </p>
        </m.div>

        {/* Developer Profile Card */}
        <div className="flex justify-center py-8">
          <DeveloperProfile />
        </div>
      </div>
    </div>
  );
};

export default Developer;
