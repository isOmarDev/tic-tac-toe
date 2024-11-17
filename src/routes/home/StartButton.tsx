import { Transition } from '@/components/animation';
import { Button } from '@/components/buttons/Button';
import { useDispatch } from '@/store';
import { startGameSetup } from '../../store/globalSlices/gameSlice';
import { cn } from '@/utils';

export const StartButton = () => {
  const dispatch = useDispatch();

  const handleStartGameSetup = () => {
    dispatch(startGameSetup());
  };

  return (
    <Transition translateY={16} duration={300} delay={300}>
      <Button
        className={cn(
          'p-6',
          'w-[100px]',
          'rounded-full border-2 border-white',
          'text-lg font-normal tracking-widest text-white',
          'shadow',
          'transition-all duration-200 ease-in-out hover:w-[110px]',
        )}
        variant="outline"
        onClick={handleStartGameSetup}
      >
        Start
      </Button>
    </Transition>
  );
};
