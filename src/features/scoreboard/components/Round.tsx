import { cn } from '@/utils';

export const Round = () => {
  return (
    <div
      className={cn(
        'flex',
        'shrink-0 flex-col items-center justify-center',
        'h-20 w-20',
        'rounded-full',
        'text-white',
        'bg-cyan-950 shadow-xl',
      )}
    >
      <span className="text-2xl font-semibold">
        1<sup>st</sup>
      </span>
      <span className="text-xs">Round</span>
    </div>
  );
};
