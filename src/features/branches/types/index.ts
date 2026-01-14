export interface Branch {
  id: string;
  name: string;
  address: string;
  hours: { open: string; close: string };
  kitchenHours?: { open: string; close: string };
  isOpen24Hours?: boolean;
  facilities?: string[];
  vibes: string[];
  image: string;
  coordinates: { lat: number; lng: number };
}

export interface BranchesData {
  branches: Branch[];
}
