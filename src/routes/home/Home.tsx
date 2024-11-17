import { Transition } from '@/components/animation';
import { StartButton } from './StartButton';
import { PlayersSetup } from '@/features/players/components';
import { Game } from './Game';
import { ExitGame } from './ExitGame';
import { RestartGame } from './RestartGame';
import { useSelector } from '@/store';
import { selectGameState } from '@/store/globalSlices';
import { cn } from '@/utils';

export const Home = () => {
  const { isStarted, isPlaying } = useSelector(selectGameState);

  return (
    <div
      className={cn(
        'relative flex overflow-hidden',
        'flex-col items-center justify-center gap-14',
        'p-5',
        'h-screen',
        'bg-rose-500',
        'transition-colors duration-700',
        isStarted && 'gap-20',
        isPlaying && 'bg-blush-pink justify-start gap-12',
      )}
    >
      {isPlaying ? (
        <>
          <header
            className={cn(
              'flex',
              'items-center justify-between',
              'p-5',
              'w-full',
            )}
          >
            <ExitGame />
            <Transition
              translateX={-20}
              duration={300}
              delay={300}
            >
              <h1
                className={cn(
                  'text-[27px] text-white',
                  '-rotate-12 transition-all drop-shadow-sm',
                )}
              >
                tic tac toe
              </h1>
            </Transition>
            <RestartGame />
          </header>

          <main>
            <Game />
          </main>
        </>
      ) : (
        <>
          <header>
            <Transition
              translateX={-20}
              duration={300}
              delay={300}
            >
              <h1
                className={cn(
                  'text-[90px] text-white',
                  '-rotate-12 transition-all',
                  isStarted && 'text-[45px]',
                )}
              >
                tic tac toe
              </h1>
            </Transition>
          </header>

          <main>
            {!isStarted && <StartButton />}
            {isStarted && <PlayersSetup />}
          </main>
        </>
      )}
    </div>
  );
};
