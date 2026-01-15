import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BranchProvider } from "@/features/branches/context/BranchContext";
import { CartProvider } from "@/features/cart/context/CartContext";
import { ErrorBoundary } from "@/features/common/components/ErrorBoundary";
import { MotionProvider } from "@/shared/components/MotionProvider";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Developer = lazy(() => import("./pages/Developer"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MotionProvider>
          <BranchProvider>
            <CartProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-screen bg-background">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  </div>
                }>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/pengembang" element={<Developer />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </CartProvider>
          </BranchProvider>
        </MotionProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;