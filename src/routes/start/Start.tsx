import { Transition } from '@/components/animation';
import { PlayersSetup } from '@/features/players/components';
import { StartButton } from './StartButton';
import { useSelector } from '@/store';
import { selectGameState } from '../../store/globalSlices';
import { cn } from '@/utils';

export const Start = () => {
  const { isStarted, isPlaying } = useSelector(selectGameState);

  return (
    <div
      className={cn(
        'relative flex h-screen flex-col items-center justify-center gap-20 p-5',
        'bg-gradient-to-b from-red-600 to-red-500',
      )}
    >
      <Transition translateX={-20} duration={300}>
        <h1
          className={cn(
            '-rotate-12 font-bangers text-6xl text-white',
            isStarted && 'scale-50',
            'transition-transform',
            'sm:text-8xl',
          )}
        >
          tic tac toe
        </h1>
      </Transition>

      {!isStarted ? <StartButton /> : <PlayersSetup />}
    </div>
  );
};
