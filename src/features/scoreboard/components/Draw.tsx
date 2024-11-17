import { useSelector } from '@/store';
import { selectDrawScore } from '../slices';
import { cn } from '@/utils';

export const Draw = () => {
  const drawScore = useSelector(selectDrawScore);

  return (
    <div
      className={cn(
        'mt-5 px-1 py-2',
        'rounded-full',
        'text-center text-xs tracking-widest text-white shadow',
        'bg-cyan-600',
      )}
    >
      <span>Draw:</span> {drawScore}
    </div>
  );
};
