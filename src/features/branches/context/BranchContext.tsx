import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Branch } from '../types';

interface BranchSelectionContextType {
  selectedBranch: Branch | null;
  setSelectedBranch: (branch: Branch | null) => void;
  isOpen: (branch: Branch) => boolean;
}

const BranchSelectionContext = createContext<BranchSelectionContextType | undefined>(undefined);

/**
 * Context for managing selected branch state
 * Note: Branch data fetching is now handled by React Query (see queries/useBranches.ts)
 */
export function BranchProvider({ children }: { children: ReactNode }) {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  // Load saved branch from localStorage on mount
  useEffect(() => {
    const savedBranchId = localStorage.getItem('tropic-local-branch');
    if (savedBranchId) {
      // Branch will be set once data is loaded via React Query in components
      // Store the ID for now
    }
  }, []);

  // Save branch selection to localStorage
  useEffect(() => {
    if (selectedBranch) {
      localStorage.setItem('tropic-local-branch', selectedBranch.id);
    } else {
      localStorage.removeItem('tropic-local-branch');
    }
  }, [selectedBranch]);

  const isOpen = (branch: Branch): boolean => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    const [openHour, openMin] = branch.hours.open.split(':').map(Number);
    const [closeHour, closeMin] = branch.hours.close.split(':').map(Number);
    
    const openTime = openHour * 60 + openMin;
    const closeTime = closeHour * 60 + closeMin;
    
    return currentTime >= openTime && currentTime < closeTime;
  };

  return (
    <BranchSelectionContext.Provider value={{ selectedBranch, setSelectedBranch, isOpen }}>
      {children}
    </BranchSelectionContext.Provider>
  );
}

export function useBranchSelection() {
  const context = useContext(BranchSelectionContext);
  if (!context) {
    throw new Error('useBranchSelection must be used within a BranchProvider');
  }
  return context;
}

// Re-export Branch type for convenience
export type { Branch };
