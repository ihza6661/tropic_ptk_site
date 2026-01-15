import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('CartContext', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <CartProvider>{children}</CartProvider>
  );

  it('provides initial empty state', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    expect(result.current.items).toEqual([]);
    expect(result.current.totalItems).toBe(0);
    expect(result.current.totalPrice).toBe(0);
  });

  it('adds items correctly', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const item = { id: '1', name: 'Coffee', price: 10000 };

    act(() => {
      result.current.addItem(item);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0]).toEqual({ ...item, quantity: 1 });
    expect(result.current.totalItems).toBe(1);
    expect(result.current.totalPrice).toBe(10000);
  });

  it('increments quantity when adding existing item', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const item = { id: '1', name: 'Coffee', price: 10000 };

    act(() => {
      result.current.addItem(item);
      result.current.addItem(item);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].quantity).toBe(2);
    expect(result.current.totalPrice).toBe(20000);
  });

  it('removes items correctly', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const item = { id: '1', name: 'Coffee', price: 10000 };

    act(() => {
      result.current.addItem(item);
      result.current.removeItem('1');
    });

    expect(result.current.items).toHaveLength(0);
  });
  
  it('updates quantity correctly', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const item = { id: '1', name: 'Coffee', price: 10000 };

    act(() => {
        result.current.addItem(item);
        result.current.updateQuantity('1', 5);
    });
    
    expect(result.current.items[0].quantity).toBe(5);
    expect(result.current.totalPrice).toBe(50000);
  });

  it('removes item if quantity updated to 0', () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      const item = { id: '1', name: 'Coffee', price: 10000 };
  
      act(() => {
          result.current.addItem(item);
          result.current.updateQuantity('1', 0);
      });
      
      expect(result.current.items).toHaveLength(0);
  });
});
