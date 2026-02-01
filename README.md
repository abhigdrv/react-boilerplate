# React Boilerplate 🚀

A modern, production-ready React boilerplate with TypeScript, designed for projects of all scales - from small apps to enterprise applications.

## ✨ Features

### Core Stack
- **React 19** - Latest React with all modern features
- **TypeScript** - Type safety with strict mode enabled
- **Vite** - Lightning-fast build tool and dev server
- **pnpm** - Efficient package management

### State Management
- **Zustand** - Lightweight, modern state management
- **TanStack Query (React Query)** - Powerful async state management
- Server state and client state separation

### Routing & Code Splitting
- **React Router v7** - Client-side routing
- Lazy loading for optimal performance
- Protected routes pattern included

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Variables** - Custom design tokens
- Dark mode support built-in
- Responsive design utilities

### Form Management
- **React Hook Form** - Performant forms with minimal re-renders
- **Zod** - TypeScript-first schema validation
- Form examples included

### Testing
- **Vitest** - Fast, Vite-native unit testing
- **React Testing Library** - Component testing best practices
- **Playwright** - Reliable E2E testing
- **MSW** - API mocking

### Code Quality
- **ESLint** - Code linting with React and TypeScript rules
- **Prettier** - Consistent code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files
- **Commitlint** - Conventional commit messages

### DevOps & Deployment
- **Docker** - Containerization ready
- **GitHub Actions** - CI/CD pipeline
- **Nginx** - Production server configuration
- Environment-based configuration

### Developer Experience
- Hot Module Replacement (HMR)
- TypeScript path aliases
- VS Code settings included
- Recommended extensions

### Internationalization
- **react-i18next** - Multi-language support
- Language detection
- Translation examples

### Additional Features
- Error boundaries
- Loading states
- 404 page
- API client with interceptors
- Custom hooks library
- Utility functions

## 📁 Project Structure

```
react-boilerplate/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
├── .vscode/                # VS Code settings
├── e2e/                    # Playwright E2E tests
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── ui/            # Reusable UI components (Button, Input, Card, etc.)
│   │   ├── layout/        # Layout components (Header, Footer, Layout)
│   │   └── common/        # Common components (LoadingSpinner, ErrorFallback)
│   ├── features/          # Feature-based modules (future features go here)
│   ├── pages/             # Route pages (HomePage, AboutPage, NotFoundPage)
│   ├── hooks/             # Custom React hooks
│   │   ├── useDebounce.ts
│   │   ├── useLocalStorage.ts
│   │   └── useMediaQuery.ts
│   ├── stores/            # Zustand stores
│   │   ├── themeStore.ts
│   │   └── userStore.ts
│   ├── services/          # API services
│   │   ├── apiClient.ts
│   │   └── postService.ts
│   ├── utils/             # Utility functions
│   │   └── helpers.ts
│   ├── types/             # TypeScript type definitions
│   ├── config/            # App configuration
│   │   ├── env.ts
│   │   └── i18n.ts
│   ├── assets/            # Images, icons, etc.
│   ├── tests/             # Test utilities and setup
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── .env.example           # Environment variables example
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── commitlint.config.js   # Commitlint configuration
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile             # Docker configuration
├── nginx.conf             # Nginx configuration
├── package.json           # Dependencies and scripts
├── playwright.config.ts   # Playwright configuration
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── vitest.config.ts       # Vitest configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm 8.x or higher (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd react-boilerplate
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
pnpm dev
```

The app will be available at `http://localhost:3000`

## 📜 Available Scripts

### Development
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

### Code Quality
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm type-check` - Run TypeScript type checking

### Testing
- `pnpm test` - Run unit tests
- `pnpm test:ui` - Run tests with UI
- `pnpm test:coverage` - Run tests with coverage
- `pnpm test:e2e` - Run E2E tests
- `pnpm test:e2e:ui` - Run E2E tests with UI

### Analysis
- `pnpm analyze` - Analyze bundle size

## 🏗️ Building for Production

### Standard Build
```bash
pnpm build
```

The built files will be in the `dist/` directory.

### Docker Build
```bash
docker build -t react-boilerplate .
docker run -p 3000:80 react-boilerplate
```

Or use Docker Compose:
```bash
docker-compose up
```

## 🧪 Testing

### Unit Tests
```bash
# Run all tests
pnpm test

# Watch mode
pnpm test --watch

# With coverage
pnpm test:coverage

# With UI
pnpm test:ui
```

### E2E Tests
```bash
# Run E2E tests
pnpm test:e2e

# With UI
pnpm test:e2e:ui

# Specific browser
pnpm test:e2e --project=chromium
```

## 🎨 Customization

### Theme
Customize your theme in `tailwind.config.js` and `src/index.css`. The boilerplate includes:
- Light/dark mode
- Custom color palette
- Design tokens via CSS variables

### Path Aliases
TypeScript path aliases are configured in `tsconfig.json` and `vite.config.ts`:
- `@/` → `src/`
- `@/components/` → `src/components/`
- `@/hooks/` → `src/hooks/`
- etc.

### Environment Variables
Create a `.env` file based on `.env.example`:
```env
VITE_API_BASE_URL=https://api.example.com
VITE_API_TIMEOUT=30000
```

Access in code:
```typescript
import { apiConfig } from '@/config/env';
console.log(apiConfig.baseURL);
```

## 📚 Best Practices

### Component Organization
- Place reusable UI components in `src/components/ui/`
- Place feature-specific components in `src/features/[feature-name]/`
- Use meaningful component names

### State Management
- Use Zustand for client state (UI state, user preferences)
- Use React Query for server state (API data)
- Keep stores small and focused

### Naming Conventions
- Components: PascalCase (e.g., `UserProfile.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useAuth.ts`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Types: PascalCase (e.g., `User.ts`)

### Git Workflow
This boilerplate enforces:
- Conventional commits (feat:, fix:, docs:, etc.)
- Linting before commit
- Type checking in CI/CD

Example commit:
```bash
git commit -m "feat: add user authentication"
```

## 🔧 Troubleshooting

### Port Already in Use
Change the port in `vite.config.ts`:
```typescript
server: {
  port: 3001, // Change this
}
```

### Type Errors
Run type checking:
```bash
pnpm type-check
```

### Build Issues
Clear cache and rebuild:
```bash
rm -rf node_modules dist .vite
pnpm install
pnpm build
```

## 📖 Documentation

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

Built with modern tools and best practices from the React ecosystem.

---

**Happy Coding! 🎉**
