import { useQuery } from '@tanstack/react-query';
import { fetchMenu } from '../services/menuService';

/**
 * Hook to fetch menu data with React Query
 * Provides loading, error, and data states
 */
export const useMenu = () => {
  return useQuery({
    queryKey: ['menu'],
    queryFn: fetchMenu,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Cache for 10 minutes (formerly cacheTime)
  });
};
