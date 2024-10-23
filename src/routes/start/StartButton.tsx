import { useDispatch } from '@/store';
import { Transition } from '@/components/animation';
import { startGameSetup } from '../../store/globalSlices/gameSlice';
import { cn } from '@/utils';

export const StartButton = () => {
  const dispatch = useDispatch();

  const handleStartGameSetup = () => {
    dispatch(startGameSetup());
  };

  return (
    <Transition translateY={16} duration={300} delay={300}>
      <button
        className={cn(
          'p-6',
          'w-[100px]',
          'rounded-full border-2 border-white',
          'font-ubuntu text-lg font-semibold text-white',
          'shadow',
          'transition-all duration-200 ease-in-out hover:w-[110px]',
        )}
        onClick={handleStartGameSetup}
      >
        Start
      </button>
    </Transition>
  );
};
