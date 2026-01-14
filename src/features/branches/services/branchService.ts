import branchesData from '../data/branches.json';
import { Branch } from '../types';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetch all branches
 * This simulates an API call by loading from local JSON with a delay.
 * Replace with actual API call when backend is ready:
 * return fetch('/api/branches').then(res => res.json())
 */
export const fetchBranches = async (): Promise<Branch[]> => {
  await delay(600); // Simulate network delay
  return branchesData as Branch[];
};

/**
 * Fetch a single branch by ID
 */
export const fetchBranch = async (id: string): Promise<Branch | undefined> => {
  await delay(400);
  const branches = branchesData as Branch[];
  return branches.find(branch => branch.id === id);
};
