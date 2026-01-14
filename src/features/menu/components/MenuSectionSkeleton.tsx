import { Skeleton } from "@/components/ui/skeleton";

export function MenuSectionSkeleton() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-background to-sand-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-64 mx-auto mb-4 bg-emerald-200/40" />
          <Skeleton className="h-6 w-96 mx-auto bg-sand-200/60" />
        </div>

        {/* Categories Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="space-y-4">
              {/* Category Title */}
              <div className="relative overflow-hidden">
                <Skeleton className="h-8 w-40 bg-emerald-300/40 mb-4" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" 
                     style={{ 
                       backgroundSize: '200% 100%',
                       animation: `shimmer ${1.5 + idx * 0.2}s infinite linear`
                     }} 
                />
              </div>
              
              {/* Menu Items */}
              <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, itemIdx) => (
                  <div key={itemIdx} className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-sand-200">
                    <div className="flex justify-between items-start mb-2">
                      <Skeleton className="h-5 w-32 bg-sand-300/60" />
                      <Skeleton className="h-5 w-16 bg-emerald-200/50" />
                    </div>
                    <Skeleton className="h-4 w-full bg-sand-200/50 mb-2" />
                    <Skeleton className="h-4 w-3/4 bg-sand-200/40" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
}
