import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">About This Boilerplate</h1>
          <p className="text-lg text-muted-foreground">
            A comprehensive, production-ready React starter template
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
            <CardDescription>
              Modern tools for building scalable applications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold">Core</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>React 19 with TypeScript</li>
                <li>Vite for lightning-fast builds</li>
                <li>React Router v7 for routing</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">State Management</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Zustand for client state</li>
                <li>TanStack Query for server state</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Styling</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Tailwind CSS with custom design tokens</li>
                <li>Dark mode support</li>
                <li>Responsive design utilities</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Testing</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Vitest for unit/integration tests</li>
                <li>Playwright for E2E tests</li>
                <li>React Testing Library</li>
                <li>MSW for API mocking</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Code Quality</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>ESLint with strict rules</li>
                <li>Prettier for formatting</li>
                <li>Husky for git hooks</li>
                <li>Commitlint for conventional commits</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Structure</CardTitle>
            <CardDescription>Organized for scalability</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
              {`src/
├── components/     # Reusable UI components
│   ├── ui/        # Base UI components
│   ├── layout/    # Layout components
│   └── common/    # Common components
├── features/       # Feature-based modules
├── pages/          # Route pages
├── hooks/          # Custom React hooks
├── stores/         # Zustand stores
├── services/       # API services
├── utils/          # Utility functions
├── types/          # TypeScript types
├── config/         # App configuration
└── assets/         # Static assets`}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
