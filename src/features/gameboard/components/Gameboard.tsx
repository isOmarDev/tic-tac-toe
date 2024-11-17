import { Transition } from '@/components/animation';
import { Borders } from './Borders';
import { Cells } from './Cells';
import { cn } from '@/utils';

export const Gameboard = () => {
  return (
    <Transition translateY={100} duration={400}>
      <div
        className={cn(
          'relative overflow-hidden',
          'mx-auto',
          'h-[380px] w-[380px]',
          'rounded-3xl outline outline-[6px] -outline-offset-1 outline-white',
          'bg-rose-500 shadow-2xl',
        )}
      >
        <Borders />
        <Cells />
      </div>
    </Transition>
  );
};
