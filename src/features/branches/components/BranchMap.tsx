import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Clock, Check } from 'lucide-react';
import { Branch, useBranchSelection } from '../context/BranchContext';
import { Button } from '@/components/ui/button';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet icon paths for production builds
// Since we use custom SVG icons, we don't need the default marker images
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '',
  iconUrl: '',
  shadowUrl: '',
});

// Custom emerald green marker icon as SVG
const createEmeraldIcon = (isSelected: boolean = false) => {
  // Use HSL values matching our design system
  const color = isSelected ? 'hsl(25, 95%, 53%)' : 'hsl(160, 89%, 16%)'; // Tropical orange for selected, emerald for others
  const size = isSelected ? 44 : 36;
  
  const svgIcon = `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="${color}" stroke="white" stroke-width="1.5"/>
      <circle cx="12" cy="9" r="3" fill="white"/>
    </svg>
  `;
  
  return L.divIcon({
    html: svgIcon,
    className: 'custom-marker',
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size + 8],
  });
};

// Component to handle map fly-to animation
function MapController({ selectedBranch, focusedBranch }: { selectedBranch: Branch | null; focusedBranch: Branch | null }) {
  const map = useMap();
  
  useEffect(() => {
    const targetBranch = focusedBranch || selectedBranch;
    if (targetBranch) {
      map.flyTo(
        [targetBranch.coordinates.lat, targetBranch.coordinates.lng],
        14,
        { duration: 1.5 }
      );
    }
  }, [focusedBranch, selectedBranch, map]);
  
  return null;
}

interface BranchMapProps {
  branches: Branch[];
  focusedBranch: Branch | null;
  onMarkerClick: (branch: Branch) => void;
}

export function BranchMap({ branches, focusedBranch, onMarkerClick }: BranchMapProps) {
  const { selectedBranch, setSelectedBranch, isOpen } = useBranchSelection();
  
  // Center map on NYC area (average of all branch coordinates)
  const centerLat = branches.reduce((sum, b) => sum + b.coordinates.lat, 0) / branches.length;
  const centerLng = branches.reduce((sum, b) => sum + b.coordinates.lng, 0) / branches.length;

  return (
    <div className="w-full h-full rounded-3xl overflow-hidden shadow-tropic-lg">
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={11}
        scrollWheelZoom={true}
        className="w-full h-full"
        style={{ minHeight: '400px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        
        <MapController selectedBranch={selectedBranch} focusedBranch={focusedBranch} />
        
        {branches.map((branch) => {
          const isSelected = selectedBranch?.id === branch.id;
          const isFocused = focusedBranch?.id === branch.id;
          
          return (
            <Marker
              key={branch.id}
              position={[branch.coordinates.lat, branch.coordinates.lng]}
              icon={createEmeraldIcon(isSelected || isFocused)}
              eventHandlers={{
                click: () => onMarkerClick(branch),
              }}
            >
              <Popup className="tropic-popup">
                <div className="p-2 min-w-[200px]">
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                    {branch.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{branch.hours.open} - {branch.hours.close}</span>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                      isOpen(branch) ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {isOpen(branch) ? 'Buka' : 'Tutup'}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => setSelectedBranch(isSelected ? null : branch)}
                    className={`w-full rounded-lg ${
                      isSelected 
                        ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5 mr-1" />
                        Cabang Saya
                      </>
                    ) : (
                      'Jadikan Cabang Saya'
                    )}
                  </Button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
