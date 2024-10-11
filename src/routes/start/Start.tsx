import { StartButton } from './StartButton';
import { Players } from '@/features/players/components/Players';
import { useSelector } from '@/store';
import { selectGame } from '../../store/globalSlices/gameSlice';
import { useIsMounted } from '@/hooks/useIsMounted';
import { cn } from '@/utils';

export const Start = () => {
  const { isStarted } = useSelector(selectGame);
  const { isMounted } = useIsMounted();

  return (
    <div
      className={cn(
        'bg- relative flex h-screen flex-col items-center justify-center gap-20 p-5',
        'bg-gradient-to-b from-red-600 to-red-500',
      )}
    >
      <h1
        className={cn(
          '-translate-x-20 -rotate-12 font-bangers text-6xl text-white opacity-0',
          isMounted && 'opacity-1 translate-x-0',
          isStarted && 'scale-50',
          'transition-all duration-300',
          'sm:text-8xl',
        )}
      >
        tic tac toe
      </h1>

      {!isStarted && <StartButton isMounted={isMounted} />}

      {isStarted && <Players />}
    </div>
  );
};
