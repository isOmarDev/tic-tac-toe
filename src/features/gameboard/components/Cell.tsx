import { Circle, X } from 'lucide-react';
import { Transition } from '@/components/animation';
import { cn } from '@/utils';

type CellProps = {
  value: 'x' | 'o' | null;
  isWinningCell: boolean;
  onMove: () => void;
};

export const Cell = ({
  value,
  isWinningCell,
  onMove,
}: CellProps) => {
  const isCellEmpty = !value;

  const handleClick = () => {
    if (isCellEmpty) {
      onMove();
    }
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if ((e.key === 'Enter' || e.key === ' ') && isCellEmpty) {
      e.preventDefault();
      onMove();
    }
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center',
        'cursor-pointer',
        'transition-colors',
        'focus:outline-none',
        isCellEmpty && 'hover:bg-rose-400 focus:bg-rose-400',
        isWinningCell && 'bg-rose-600',
      )}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
    >
      {value === 'x' && (
        <Transition scale={0}>
          <X
            size="45"
            strokeWidth={6}
            className="text-golden-yellow drop-shadow-md"
          />
        </Transition>
      )}

      {value === 'o' && (
        <Transition scale={0}>
          <Circle
            size="40"
            strokeWidth={10}
            className="rounded-full text-white drop-shadow-md"
          />
        </Transition>
      )}
    </div>
  );
};
