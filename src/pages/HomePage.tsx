import { useTranslation } from 'react-i18next';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { usePosts } from '@/services/postService';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { Counter } from '@/features/counter';

export default function HomePage() {
  const { t } = useTranslation();
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="container py-8">
        <p className="text-destructive">Error loading posts: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-8 space-y-2">
        <h1 className="text-4xl font-bold">{t('welcome')}</h1>
        <p className="text-lg text-muted-foreground">{t('description')}</p>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Features</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>TypeScript</CardTitle>
              <CardDescription>
                Full type safety with strict mode enabled
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>React Query</CardTitle>
              <CardDescription>
                Powerful data fetching and caching
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Zustand</CardTitle>
              <CardDescription>Lightweight state management</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tailwind CSS</CardTitle>
              <CardDescription>
                Utility-first CSS with dark mode
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Vitest</CardTitle>
              <CardDescription>Fast unit testing with great DX</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Playwright</CardTitle>
              <CardDescription>Reliable end-to-end testing</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Live Demo - Counter (Zustand)
        </h2>
        <div className="flex justify-center">
          <Counter />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold">
          Example Posts (React Query)
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts?.slice(0, 6).map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle className="text-lg">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {post.body.slice(0, 100)}...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
