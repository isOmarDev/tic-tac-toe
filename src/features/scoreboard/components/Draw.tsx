import { cn } from '@/utils';

export const Draw = () => {
  return (
    <div
      className={cn(
        'mt-5 px-1 py-2',
        'rounded-full',
        'text-center text-xs text-white shadow',
        'bg-cyan-700',
      )}
    >
      <span className="font-semibold">Draw:</span> 0
    </div>
  );
};
