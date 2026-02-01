# Quick Start Guide

Get up and running with React Boilerplate in 5 minutes!

## Prerequisites

Make sure you have installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **pnpm** (recommended) - `npm install -g pnpm`

## Installation

### 1. Clone or Download

```bash
# Clone the repository
git clone <your-repo-url>
cd react-boilerplate

# Or download and extract the ZIP
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env if needed (optional for getting started)
```

### 4. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## What's Included

Out of the box, you get:

✅ **Working homepage** with example features  
✅ **Dark mode** toggle  
✅ **API integration** example (fetching posts)  
✅ **Counter feature** demonstrating Zustand  
✅ **Routing** setup (home, about, 404)  
✅ **Responsive design** with Tailwind CSS  
✅ **TypeScript** with strict mode  
✅ **Testing** ready (Vitest + Playwright)  

## Next Steps

### Create Your First Feature

1. **Create a new feature folder:**
```bash
mkdir -p src/features/my-feature/{components,hooks,store}
```

2. **Create a component:**
```tsx
// src/features/my-feature/components/MyComponent.tsx
export default function MyComponent() {
  return <div>My Feature</div>;
}
```

3. **Create a store (if needed):**
```tsx
// src/features/my-feature/store/myStore.ts
import { create } from 'zustand';

interface MyState {
  value: string;
  setValue: (value: string) => void;
}

export const useMyStore = create<MyState>((set) => ({
  value: '',
  setValue: (value) => set({ value }),
}));
```

4. **Export from index:**
```tsx
// src/features/my-feature/index.ts
export { default as MyComponent } from './components/MyComponent';
export { useMyStore } from './store/myStore';
```

### Add a New Page

1. **Create the page component:**
```tsx
// src/pages/MyPage.tsx
export default function MyPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">My Page</h1>
    </div>
  );
}
```

2. **Add the route in App.tsx:**
```tsx
// Import at the top
const MyPage = lazy(() => import('@/pages/MyPage'));

// Add route in Routes
<Route path="my-page" element={<MyPage />} />
```

### Create an API Service

1. **Define types:**
```tsx
// src/types/myApi.ts
export interface MyData {
  id: number;
  title: string;
}
```

2. **Create service:**
```tsx
// src/services/myService.ts
import { useQuery } from '@tanstack/react-query';
import apiClient from './apiClient';
import type { MyData } from '@/types/myApi';

const fetchMyData = async (): Promise<MyData[]> => {
  const response = await apiClient.get<MyData[]>('/my-endpoint');
  return response.data;
};

export const useMyData = () => {
  return useQuery<MyData[]>({
    queryKey: ['myData'],
    queryFn: fetchMyData,
  });
};
```

3. **Use in component:**
```tsx
import { useMyData } from '@/services/myService';

export default function MyComponent() {
  const { data, isLoading, error } = useMyData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
```

## Common Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Check for linting errors
pnpm lint:fix         # Fix linting errors
pnpm format           # Format code
pnpm type-check       # Check TypeScript

# Testing
pnpm test             # Run unit tests
pnpm test:e2e         # Run E2E tests
pnpm test:coverage    # Generate coverage report
```

## Tips

### 1. Use Path Aliases
Instead of:
```tsx
import Button from '../../../components/ui/Button';
```

Use:
```tsx
import Button from '@/components/ui/Button';
```

### 2. Leverage Custom Hooks
Check out `src/hooks/` for useful hooks:
- `useDebounce` - Debounce values
- `useLocalStorage` - Sync state with localStorage
- `useMediaQuery` - Responsive breakpoints

### 3. Follow the Style Guide
- Use Tailwind classes for styling
- Keep components small and focused
- Use TypeScript types for props
- Write tests for new features

### 4. Commit Messages
Use conventional commits:
```bash
git commit -m "feat: add user profile page"
git commit -m "fix: resolve login button styling"
git commit -m "docs: update API documentation"
```

## Troubleshooting

### Port 3000 is in use
Change the port in `vite.config.ts`:
```ts
server: {
  port: 3001,
}
```

### Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules .vite
pnpm install
```

### TypeScript errors
```bash
# Check for type errors
pnpm type-check

# If using VS Code, restart the TypeScript server
# Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

## Learn More

- 📖 [Full Documentation](./README.md)
- 🤝 [Contributing Guide](./CONTRIBUTING.md)
- 📝 [Changelog](./CHANGELOG.md)

## Need Help?

- Check the [README](./README.md) for detailed documentation
- Open an [Issue](https://github.com/yourusername/react-boilerplate/issues) for bugs
- Start a [Discussion](https://github.com/yourusername/react-boilerplate/discussions) for questions

---

**Happy coding! 🚀**
