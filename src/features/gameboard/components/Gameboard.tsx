import { Borders } from './Borders';
import { Cells } from './Cells';
import { cn } from '@/utils';

export const Gameboard = () => {
  return (
    <div
      className={cn(
        'relative',
        'mx-auto',
        'h-[400px] w-[400px]',
        'rounded-3xl outline outline-[6px] -outline-offset-1 outline-red-50',
        'bg-zinc-400',
        'overflow-hidden shadow-2xl',
      )}
    >
      <Borders />
      <Cells />
    </div>
  );
};
