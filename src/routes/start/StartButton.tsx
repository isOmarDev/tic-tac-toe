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
          'rounded-full border-[2px] border-white px-6 py-5 font-ubuntu text-xl text-white',
          'transition-all duration-200 ease-in-out hover:px-7',
        )}
        onClick={handleStartGameSetup}
      >
        Start
      </button>
    </Transition>
  );
};
