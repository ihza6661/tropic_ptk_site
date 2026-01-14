import menuData from '../data/menu.json';
import { MenuData } from '../types';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetch menu data
 * This simulates an API call by loading from local JSON with a delay.
 * Replace with actual API call when backend is ready:
 * return fetch('/api/menu').then(res => res.json())
 */
export const fetchMenu = async (): Promise<MenuData> => {
  await delay(800); // Simulate network delay
  return menuData as MenuData;
};
