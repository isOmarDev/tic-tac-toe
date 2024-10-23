import { Circle, X } from 'lucide-react';
import { cn } from '@/utils';
import { useState } from 'react';
import { Transition } from '@/components/animation';

type CellProps = {
  index: number;
};

export const Cell = ({ index }: CellProps) => {
  const [symbole, setSymbole] = useState<'x' | 'o'>();

  const handleCellClick = () => {
    setSymbole('o');
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center',
        'cursor-pointer',
        (index == 2 || index == 4 || index == 6) && 'bg-red-600',
      )}
      onClick={handleCellClick}
    >
      {symbole === 'x' && (
        <Transition scale={0}>
          <X
            size="45"
            strokeWidth={6}
            className="text-[#ffbf00] drop-shadow-xl"
          />
        </Transition>
      )}

      {symbole === 'o' && (
        <Transition scale={0}>
          <Circle
            size="40"
            strokeWidth={10}
            className="rounded-full text-white drop-shadow-xl"
          />
        </Transition>
      )}
    </div>
  );
};
