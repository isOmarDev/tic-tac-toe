import { Circle, X } from 'lucide-react';
import { cn } from '@/utils';

type CellProps = {
  index: number;
};

export const Cell = ({ index }: CellProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        'cursor-pointer',
        (index == 3 || index == 4 || index == 5) &&
          'bg-zinc-500',
      )}
    >
      {index % 3 ? (
        <Circle
          size="40"
          strokeWidth={10}
          color="white"
          className="rounded-full drop-shadow-lg"
        />
      ) : (
        <X
          size="45"
          strokeWidth={5}
          className="text-yellow-300 drop-shadow-lg filter"
        />
      )}
    </div>
  );
};
