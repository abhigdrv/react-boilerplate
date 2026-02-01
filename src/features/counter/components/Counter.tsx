import { useCounterStore } from '../store/counterStore';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Plus, Minus, RotateCcw } from 'lucide-react';

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Counter Example</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center">
          <div className="text-6xl font-bold tabular-nums">{count}</div>
        </div>
        <div className="flex gap-2">
          <Button onClick={decrement} variant="outline" className="flex-1">
            <Minus className="mr-2 h-4 w-4" />
            Decrement
          </Button>
          <Button onClick={increment} className="flex-1">
            <Plus className="mr-2 h-4 w-4" />
            Increment
          </Button>
        </div>
        <Button onClick={reset} variant="secondary" className="w-full">
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </CardContent>
    </Card>
  );
}
