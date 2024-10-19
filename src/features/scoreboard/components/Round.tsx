import { cn } from '@/utils';

export const Round = () => {
  return (
    <div
      className={cn(
        'flex h-20 w-20 shrink-0 flex-col items-center justify-center',
        'rounded-full bg-cyan-950 text-white shadow-xl',
      )}
    >
      <span className="text-2xl font-semibold">
        1<sup>st</sup>
      </span>
      <span className="text-xs">Round</span>
    </div>
  );
};
