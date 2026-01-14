# Migration Guide - Old to New Structure

## Quick Reference for Developers

This guide helps team members quickly find where code has been moved.

---

## Import Path Changes

### Before → After

#### Contexts
```typescript
// OLD
import { useBranch } from '@/contexts/BranchContext';
import { useCart } from '@/contexts/CartContext';

// NEW
import { useBranchSelection } from '@/features/branches/context/BranchContext';
import { useBranches } from '@/features/branches/queries/useBranches';
import { useCart } from '@/features/cart/context/CartContext';
```

#### Components
```typescript
// OLD
import { MenuSection } from '@/components/MenuSection';
import { BranchHub } from '@/components/BranchHub';
import { CartSheet } from '@/components/CartSheet';
import { Navbar } from '@/components/Navbar';

// NEW
import { MenuSection } from '@/features/menu/components/MenuSection';
import { BranchHub } from '@/features/branches/components/BranchHub';
import { CartSheet } from '@/features/cart/components/CartSheet';
import { Navbar } from '@/features/common/components/Navbar';

// OR use the index exports
import { MenuSection } from '@/features/menu';
import { BranchHub } from '@/features/branches';
import { CartSheet } from '@/features/cart';
import { Navbar } from '@/features/common';
```

#### Data
```typescript
// OLD
import menuData from '@/data/menu.json';
import branchesData from '@/data/branches.json';

// NEW - Don't import directly! Use React Query hooks instead
import { useMenu } from '@/features/menu/queries/useMenu';
import { useBranches } from '@/features/branches/queries/useBranches';

// In your component:
const { data: menuData, isLoading, isError } = useMenu();
const { data: branches, isLoading, isError } = useBranches();
```

#### Utilities
```typescript
// OLD
import { cn } from '@/lib/utils';

// NEW
import { cn } from '@/shared/lib/utils';
```

#### Hooks
```typescript
// OLD
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

// NEW
import { useToast } from '@/features/common/hooks/use-toast';
import { useIsMobile } from '@/features/common/hooks/use-mobile';
```

---

## File Locations Map

### Components

| Old Location | New Location |
|-------------|--------------|
| `src/components/MenuSection.tsx` | `src/features/menu/components/MenuSection.tsx` |
| `src/components/MenuItem.tsx` | `src/features/menu/components/MenuItem.tsx` |
| `src/components/BranchHub.tsx` | `src/features/branches/components/BranchHub.tsx` |
| `src/components/BranchCard.tsx` | `src/features/branches/components/BranchCard.tsx` |
| `src/components/BranchMap.tsx` | `src/features/branches/components/BranchMap.tsx` |
| `src/components/CartSheet.tsx` | `src/features/cart/components/CartSheet.tsx` |
| `src/components/Navbar.tsx` | `src/features/common/components/Navbar.tsx` |
| `src/components/Hero.tsx` | `src/features/common/components/Hero.tsx` |
| `src/components/About.tsx` | `src/features/common/components/About.tsx` |
| `src/components/Footer.tsx` | `src/features/common/components/Footer.tsx` |

### Contexts

| Old Location | New Location | New Hook Name |
|-------------|--------------|---------------|
| `src/contexts/BranchContext.tsx` | `src/features/branches/context/BranchContext.tsx` | `useBranchSelection()` |
| `src/contexts/CartContext.tsx` | `src/features/cart/context/CartContext.tsx` | `useCart()` |

### Data

| Old Location | New Location | How to Access |
|-------------|--------------|---------------|
| `src/data/menu.json` | `src/features/menu/data/menu.json` | `useMenu()` hook |
| `src/data/branches.json` | `src/features/branches/data/branches.json` | `useBranches()` hook |

### Utilities

| Old Location | New Location |
|-------------|--------------|
| `src/lib/utils.ts` | `src/shared/lib/utils.ts` |
| `src/hooks/use-toast.ts` | `src/features/common/hooks/use-toast.ts` |
| `src/hooks/use-mobile.tsx` | `src/features/common/hooks/use-mobile.tsx` |

---

## Breaking Changes

### 1. BranchContext Split

**Before**:
```typescript
const { branches, selectedBranch, setSelectedBranch } = useBranch();
```

**After**:
```typescript
// For branch data (with loading/error states)
const { data: branches, isLoading, isError } = useBranches();

// For selection state
const { selectedBranch, setSelectedBranch } = useBranchSelection();
```

**Reason**: Separation of concerns - data fetching vs. state management

---

### 2. Menu Data Access

**Before**:
```typescript
import menuData from '@/data/menu.json';
const categories = menuData.categories;
```

**After**:
```typescript
import { useMenu } from '@/features/menu/queries/useMenu';

function MyComponent() {
  const { data: menuData, isLoading, isError } = useMenu();
  const categories = menuData?.categories || [];
  
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage />;
  
  // Use categories...
}
```

**Reason**: Enables loading/error states and prepares for API integration

---

## New Features You Can Use

### 1. React Query Hooks

```typescript
import { useMenu } from '@/features/menu/queries/useMenu';
import { useBranches } from '@/features/branches/queries/useBranches';

function Component() {
  const { data, isLoading, isError, error, refetch } = useMenu();
  
  if (isLoading) return <Spinner />;
  if (isError) return <Error message={error.message} onRetry={refetch} />;
  
  return <Content data={data} />;
}
```

### 2. Error Boundary

Already implemented at app level! Your components can now throw errors safely:

```typescript
function MyComponent() {
  if (!criticalData) {
    throw new Error('Critical data missing!');
  }
  // ErrorBoundary will catch this
}
```

### 3. TypeScript Strict Mode

All code now benefits from strict type checking:
```typescript
// ✅ This will catch errors
function greet(name: string) {
  return `Hello ${name}`;
}

greet(undefined); // ❌ TypeScript error!
```

---

## Common Patterns

### Pattern 1: Data Fetching Component

```typescript
import { useMenu } from '@/features/menu/queries/useMenu';

export function MenuList() {
  const { data: menuData, isLoading, isError } = useMenu();
  
  if (isLoading) {
    return <div>Loading menu...</div>;
  }
  
  if (isError) {
    return <div>Error loading menu</div>;
  }
  
  return (
    <div>
      {menuData.categories.map(category => (
        <CategorySection key={category.id} category={category} />
      ))}
    </div>
  );
}
```

### Pattern 2: Using Branch Selection

```typescript
import { useBranchSelection } from '@/features/branches/context/BranchContext';
import { useBranches } from '@/features/branches/queries/useBranches';

export function BranchSelector() {
  const { data: branches } = useBranches();
  const { selectedBranch, setSelectedBranch } = useBranchSelection();
  
  return (
    <select 
      value={selectedBranch?.id} 
      onChange={(e) => {
        const branch = branches?.find(b => b.id === e.target.value);
        setSelectedBranch(branch || null);
      }}
    >
      {branches?.map(branch => (
        <option key={branch.id} value={branch.id}>
          {branch.name}
        </option>
      ))}
    </select>
  );
}
```

---

## Tips for Smooth Transition

1. **Use IDE Search & Replace**: 
   - Search for `@/contexts/BranchContext` → Replace with new paths
   - Search for `@/data/` → Replace with React Query hooks

2. **Check Import Errors**: 
   - Run `npm run build` to find all broken imports
   - Fix them one by one

3. **Use Index Exports**:
   ```typescript
   // Cleaner
   import { MenuSection } from '@/features/menu';
   
   // Instead of
   import { MenuSection } from '@/features/menu/components/MenuSection';
   ```

4. **Follow the Loading Pattern**:
   Always handle loading and error states when using React Query hooks

---

## Need Help?

- Check `PRODUCTION-READY.md` for detailed documentation
- Check `README-REFACTOR.md` for technical details
- Review the code in `src/features/` for examples

---

## Quick Start After Pulling Changes

```bash
# Install dependencies (if needed)
npm install

# Run dev server
npm run dev

# Build to verify everything works
npm run build

# Check types
npx tsc --noEmit
```

All commands should work without errors! ✅

---

**Last Updated**: January 2026  
**Questions?**: Review the production-ready documentation or ask the team!
