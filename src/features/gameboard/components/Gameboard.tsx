import { Borders } from './Borders';
import { Cells } from './Cells';
import { cn } from '@/utils';

export const Gameboard = () => {
  return (
    <div
      className={cn(
        'relative',
        'mx-auto',
        'h-[370px] w-[370px]',
        'rounded-3xl outline outline-[6px] -outline-offset-1 outline-white',
        'bg-red-500',
        'overflow-hidden shadow-2xl',
      )}
    >
      <Borders />
      <Cells />
    </div>
  );
};
