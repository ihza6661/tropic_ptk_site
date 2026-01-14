import { useQuery } from '@tanstack/react-query';
import { fetchBranches, fetchBranch } from '../services/branchService';

/**
 * Hook to fetch all branches with React Query
 * Provides loading, error, and data states
 */
export const useBranches = () => {
  return useQuery({
    queryKey: ['branches'],
    queryFn: fetchBranches,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Cache for 10 minutes
  });
};

/**
 * Hook to fetch a single branch by ID
 */
export const useBranch = (id: string) => {
  return useQuery({
    queryKey: ['branch', id],
    queryFn: () => fetchBranch(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    enabled: !!id, // Only fetch if ID is provided
  });
};
