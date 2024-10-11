import { Stepper, Step, useStepper } from '@/components/stepper';
import { Home, ArrowRight, ArrowLeft } from 'lucide-react';
import { PlayerOne } from './PlayerOne';
import { PlayerTwo } from './PlayerTwo';
import { useDispatch } from '@/store';
import { cn } from '@/utils';
import { exitGameSetup } from '@/store/globalSlices/gameSlice';

export const Players = () => {
  const { activeStep, handleNext, handlePrev } = useStepper();

  const dispatch = useDispatch();

  const handleExitPlayersSetup = () => {
    dispatch(exitGameSetup());
  };

  return (
    <div className="relative w-[350px]">
      <Stepper activeStep={activeStep}>
        <Step>
          <button
            className={cn(
              'group absolute -left-[calc(70px+10px)] bottom-0 flex h-[70px] w-[70px] items-center justify-center',
              'overflow-hidden rounded-full bg-white font-semibold text-cyan-950',
              'hover:-left-[calc(150px+10px)] hover:w-[150px]',
              'transition-all',
            )}
            onClick={handleExitPlayersSetup}
          >
            <Home />
            <span
              className={cn(
                'absolute ml-2 translate-x-20 opacity-0',
                'group-hover:static group-hover:translate-x-0 group-hover:opacity-100',
                'transition-all',
              )}
            >
              Home
            </span>
          </button>
          <PlayerOne />
          <button
            className={cn(
              'group absolute bottom-0 left-[calc(100%+10px)] flex h-[70px] w-[70px] items-center justify-center',
              'overflow-hidden rounded-full bg-white font-semibold text-cyan-950',
              'hover:w-[150px]',
              'transition-all',
            )}
            onClick={handleNext}
          >
            <span
              className={cn(
                'absolute mr-2 -translate-x-20 opacity-0',
                'group-hover:static group-hover:translate-x-0 group-hover:opacity-100',
                'transition-all',
              )}
            >
              Player 2
            </span>
            <ArrowRight />
          </button>
        </Step>

        <Step>
          <button
            className={cn(
              'group absolute -left-[calc(70px+10px)] bottom-0 flex h-[70px] w-[70px] items-center justify-center',
              'overflow-hidden rounded-full bg-white font-semibold text-cyan-950',
              'hover:-left-[calc(150px+10px)] hover:w-[150px]',
              'transition-all',
            )}
            onClick={handlePrev}
          >
            <ArrowLeft />
            <span
              className={cn(
                'absolute ml-2 translate-x-20 opacity-0',
                'group-hover:static group-hover:translate-x-0 group-hover:opacity-100',
                'transition-all',
              )}
            >
              Player 1
            </span>
          </button>
          <PlayerTwo />
          <button
            className={cn(
              'absolute left-0 top-[calc(100%+15px)] flex h-[70px] w-full items-center justify-center',
              'rounded-full bg-gray-700 font-semibold text-white',
              'hover:scale-x-105',
              'transition-all duration-200',
            )}
          >
            Play
          </button>
        </Step>
      </Stepper>
    </div>
  );
};
