import { Transition } from '@/components/animation';
import { PlayersSetup } from '@/features/players/components';
import { Gameplay } from '@/features/gameplay/components';
import { StartButton } from './StartButton';
import { useSelector } from '@/store';
import { selectGameState } from '@/store/globalSlices';
import { cn } from '@/utils';

export const Start = () => {
  const { isStarted, isPlaying } = useSelector(selectGameState);

  return (
    <div
      className={cn(
        'relative flex',
        'flex-col items-center justify-center gap-20',
        'p-5',
        'h-screen',
        'bg-red-500',
        'transition-colors',
        isPlaying && 'justify-start gap-10 bg-red-100',
      )}
    >
      <Transition translateX={-20} duration={300}>
        <h1
          className={cn(
            'font-bangers text-6xl text-white',
            'drop-shadow-md',
            '-rotate-12 transition-transform ',
            'sm:text-8xl',
            isStarted && 'scale-50',
            isPlaying && 'scale-[0.3] text-white',
          )}
        >
          tic tac toe
        </h1>
      </Transition>

      {!isStarted && <StartButton />}
      {isStarted && !isPlaying && <PlayersSetup />}
      {isPlaying && <Gameplay />}
      {/* <Gameplay /> */}
    </div>
  );
};
