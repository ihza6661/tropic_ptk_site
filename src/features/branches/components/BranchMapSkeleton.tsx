import { Skeleton } from "@/components/ui/skeleton";

export function BranchMapSkeleton() {
  return (
    <div className="w-full h-full rounded-3xl overflow-hidden shadow-tropic-lg bg-sand-50">
      <div className="relative w-full h-full min-h-[400px]">
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/20 to-transparent animate-shimmer" 
             style={{ 
               backgroundSize: '200% 100%',
               animation: 'shimmer 2s infinite linear'
             }} 
        />
        
        {/* Map pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-emerald-200" />
            ))}
          </div>
        </div>
        
        {/* Fake marker positions */}
        <div className="absolute top-1/4 left-1/3 w-8 h-8">
          <Skeleton className="w-full h-full rounded-full bg-emerald-300/40" />
        </div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8">
          <Skeleton className="w-full h-full rounded-full bg-emerald-300/40" />
        </div>
        <div className="absolute bottom-1/3 left-1/2 w-8 h-8">
          <Skeleton className="w-full h-full rounded-full bg-emerald-300/40" />
        </div>
        
        {/* Loading text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <p className="text-emerald-800 font-medium">Loading Map...</p>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
