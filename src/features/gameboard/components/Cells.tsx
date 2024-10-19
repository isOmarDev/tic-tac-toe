import { Cell } from './Cell';
import { cn } from '@/utils';

const cells = Array(9).fill(null);

export const Cells = () => {
  return (
    <div className={cn('grid', 'grid-cols-3', 'h-full')}>
      {cells.map((cell, index) => {
        return <Cell key={index} index={index} />;
      })}
    </div>
  );
};
