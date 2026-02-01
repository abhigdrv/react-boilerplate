import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto max-w-md space-y-6 px-4 text-center">
        <div className="flex justify-center">
          <AlertTriangle className="h-16 w-16 text-destructive" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{t('error.title')}</h1>
          <p className="text-muted-foreground">
            {error.message || 'An unexpected error occurred'}
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Button onClick={resetErrorBoundary}>{t('error.retry')}</Button>
          <Button variant="outline" onClick={() => (window.location.href = '/')}>
            {t('error.goHome')}
          </Button>
        </div>
      </div>
    </div>
  );
}
