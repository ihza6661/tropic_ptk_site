/**
 * Formats a number as Indonesian Rupiah currency
 * @param amount - The amount to format (in IDR)
 * @returns Formatted string in Indonesian Rupiah format (e.g., "Rp 52.500")
 * 
 * @example
 * formatCurrency(52500) // Returns "Rp 52.500"
 * formatCurrency(1000000) // Returns "Rp 1.000.000"
 */
export function formatCurrency(amount: number): string {
  // Round to nearest integer (IDR doesn't use decimals)
  const rounded = Math.round(amount);
  
  // Convert to string and add period as thousand separator
  const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
  // Return with "Rp " prefix
  return `Rp ${formatted}`;
}
