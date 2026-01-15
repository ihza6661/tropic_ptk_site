# Agent Guidelines for Tropic Coffee Frontend

This document provides coding standards and conventions for AI agents working on the Tropic Coffee website codebase.

## Project Overview

- **Framework**: React 18 + TypeScript + Vite
- **UI Library**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS with custom tropical theme
- **State Management**: React Query + Context API
- **Animation**: Framer Motion
- **Language**: UI is in **Bahasa Indonesia**, code/comments in English
- **Architecture**: Feature-based modular structure

## Build & Test Commands

### Development
```bash
npm run dev              # Start dev server on port 8080
npm run build            # Production build
npm run build:dev        # Development build
npm run preview          # Preview production build
```

### Code Quality
```bash
npm run lint             # Run ESLint on all files
npm run test             # Run all tests once
npm run test:watch       # Run tests in watch mode
```

### Running Single Test
```bash
npx vitest run src/path/to/file.test.ts        # Run specific test file
npx vitest run -t "test name pattern"          # Run tests matching pattern
```

## Project Structure

```
src/
├── components/ui/        # shadcn/ui components (DO NOT MODIFY without reason)
├── features/             # Feature-based modules (PRIMARY WORKSPACE)
│   ├── branches/         # Branch/location feature
│   │   ├── components/   # Feature-specific components
│   │   ├── context/      # React Context providers
│   │   ├── data/         # JSON data files
│   │   ├── queries/      # React Query hooks
│   │   ├── services/     # API/data fetching logic
│   │   └── types/        # TypeScript interfaces
│   ├── cart/             # Shopping cart feature
│   ├── common/           # Shared components (Hero, Navbar, Footer)
│   ├── menu/             # Menu feature
│   └── developer/        # Developer profile feature
├── pages/                # Route pages
├── shared/               # Global utilities & helpers
│   ├── lib/              # Utility functions (utils.ts, currency.ts)
│   └── utils/            # General utilities
└── main.tsx              # Application entry point
```

## Import Conventions

### Import Order (Enforce Strictly)
1. External libraries (React, third-party packages)
2. Internal aliases with `@/` prefix
3. Relative imports (types, local files)
4. CSS/style imports (if any)

### Examples
```typescript
// ✅ CORRECT
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { useCart } from '@/features/cart/context/CartContext';
import { formatCurrency } from '@/shared/lib/currency';
import type { MenuItem } from './types';

// ❌ WRONG - Mixed order
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import type { MenuItem } from './types';
```

### Path Aliases
- Use `@/` for all src imports: `@/components/ui/button`
- Never use relative paths for cross-feature imports
- Relative imports OK within same feature: `./types`, `../services/menuService`

## TypeScript Standards

### Strict Mode Enabled
- `strict: true`
- `noImplicitAny: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `strictNullChecks: true`

### Type Definitions
```typescript
// ✅ Export interfaces from types/index.ts
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  tags: string[];
  calories: number;
}

// ✅ Use explicit types for props
interface MenuItemProps {
  item: MenuItem;
  index: number;
}

// ✅ Type React components
export function MenuItem({ item, index }: MenuItemProps) { ... }

// ❌ AVOID implicit any
function process(data) { ... }  // NO!

// ❌ AVOID inline complex types
export function MenuItem({ item, index }: { item: { id: string; name: string; ... }, index: number }) { ... }
```

## Component Guidelines

### File Naming
- Components: PascalCase (`MenuItem.tsx`, `BranchCard.tsx`)
- Utilities/Hooks: camelCase (`useBranches.ts`, `currency.ts`)
- Types: `index.ts` or `types.ts`
- Tests: `*.test.ts` or `*.spec.tsx`

### Component Structure
```typescript
// 1. Imports
import { m } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 2. Type definitions
interface ComponentProps {
  // ...
}

// 3. Component export
export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // 4. Hooks
  const [state, setState] = useState();
  const { data } = useQuery(...);
  
  // 5. Handlers
  const handleClick = () => { ... };
  
  // 6. Render helpers
  const getStyle = (value: string) => { ... };
  
  // 7. JSX return
  return (
    <div>...</div>
  );
}
```

### Naming Conventions
- Boolean props/vars: `isOpen`, `hasError`, `shouldRender`
- Handlers: `handleClick`, `handleSubmit`, `handleAddToCart`
- Getters: `getTagStyle`, `getBranchStatus`
- Custom hooks: `useBranches`, `useCart`, `useMenu`

## State Management

### React Query (For Server State)
```typescript
// ✅ Define in features/*/queries/
export const useBranches = () => {
  return useQuery({
    queryKey: ['branches'],
    queryFn: fetchBranches,
    staleTime: 5 * 60 * 1000,    // 5 minutes
    gcTime: 10 * 60 * 1000,      // 10 minutes (formerly cacheTime)
  });
};
```

### Context API (For UI State)
```typescript
// ✅ Define in features/*/context/
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  
  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

// ✅ Export custom hook
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
```

## Styling with Tailwind

### Utility Classes
- Use `cn()` utility for conditional classes: `cn("base-class", condition && "extra-class")`
- Custom colors: `primary`, `accent`, `tropical-orange`, `emerald`, `sand`
- Font families: `font-sans` (Inter), `font-serif` (Playfair Display)

### Custom Classes (in CSS)
- `.glass-card` - Glassmorphism effect
- `.botanical-pattern` - Background pattern
- `.btn-tropical` - Tropical themed button

## Animation with Framer Motion

```typescript
// ✅ Import as 'm' for motion
import { m } from 'framer-motion';

// ✅ Standard animation pattern
<m.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: index * 0.05 }}
>
  {children}
</m.div>
```

## Error Handling

```typescript
// ✅ Use ErrorBoundary for component errors
<ErrorBoundary>
  <App />
</ErrorBoundary>

// ✅ Handle async errors with React Query
const { data, error, isLoading } = useBranches();
if (error) return <div>Gagal memuat cabang</div>;

// ✅ Throw errors in custom hooks for context validation
if (!context) {
  throw new Error('useCart must be used within a CartProvider');
}
```

## Testing

### Test Structure
```typescript
import { describe, it, expect } from "vitest";

describe("ComponentName", () => {
  it("should render correctly", () => {
    expect(true).toBe(true);
  });
});
```

### Test Location
- Place tests next to source: `src/features/menu/components/MenuItem.test.tsx`
- Or in `src/test/` for integration tests

## Language Guidelines

- **UI Text**: Bahasa Indonesia (`"Tambah ke Keranjang"`, `"Lihat Menu"`)
- **Code/Variables**: English (`addToCart`, `viewMenu`)
- **Comments**: English
- **Error Messages**: Bahasa Indonesia for user-facing
- **Menu Item Names**: English OK (coffee names are English by convention)
- **Descriptions**: Bahasa Indonesia

## Common Utilities

```typescript
// Currency formatting
import { formatCurrency } from '@/shared/lib/currency';
formatCurrency(5.50) // "Rp5.50"

// Class name merging
import { cn } from '@/shared/lib/utils';
cn("base", condition && "conditional")
```

## Git Workflow

- Write commit messages in English
- Format: `feat: add menu filtering` or `fix: branch map coordinates`
- Test before committing
- Ensure `npm run lint` passes

## Key Reminders

1. **Feature Isolation**: Keep features self-contained in their feature folders
2. **Type Safety**: Always define explicit types, no implicit any
3. **Accessibility**: Use semantic HTML and ARIA labels when needed
4. **Performance**: Lazy load heavy components (especially Leaflet maps)
5. **Responsive**: Test on mobile - primary use case is mobile users
6. **Local Data**: Currently using JSON files, but structure allows easy API migration
