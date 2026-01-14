export interface Branch {
  id: string;
  name: string;
  address: string;
  hours: { open: string; close: string };
  vibes: string[];
  image: string;
  coordinates: { lat: number; lng: number };
}

export interface BranchesData {
  branches: Branch[];
}
