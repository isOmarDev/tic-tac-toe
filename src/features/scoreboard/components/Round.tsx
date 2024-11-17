import { useSelector } from '@/store';
import { selectRound } from '../slices';
import { cn, getOrdinalSuffix } from '@/utils';

export const Round = () => {
  const round = useSelector(selectRound);

  return (
    <div
      className={cn(
        'flex',
        'shrink-0 flex-col items-center justify-center',
        'h-20 w-20',
        'rounded-full',
        'tracking-wide text-white',
        'bg-cyan-950 shadow-lg',
      )}
    >
      <span className="text-2xl">
        {round}
        <sup>{getOrdinalSuffix(round)}</sup>
      </span>
      <span className="text-xs">Round</span>
    </div>
  );
};
