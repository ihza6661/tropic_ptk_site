import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core - changes infrequently
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          
          // UI library - Radix components
          'ui-vendor': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-label',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slot',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip',
          ],
          
          // Animations - Framer Motion (with LazyMotion, this is smaller)
          'animation-vendor': ['framer-motion'],
          
          // Maps - Leaflet (heavy dependency, split separately)
          'map-vendor': ['leaflet', 'react-leaflet'],
          
          // State management & utilities
          'utils-vendor': [
            '@tanstack/react-query',
            'clsx',
            'tailwind-merge',
            'class-variance-authority',
          ],
          
          // Icons
          'icons-vendor': ['lucide-react'],
        },
      },
    },
    // Increase chunk size warning limit since we're intentionally splitting
    chunkSizeWarningLimit: 600,
  },
}));
