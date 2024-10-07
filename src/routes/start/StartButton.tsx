import { useDispatch } from '@/store';
import { startGame } from './gameSlice';
import { cn } from '@/utils';

type StartButtonType = {
  isMounted: boolean;
};

export const StartButton = ({ isMounted }: StartButtonType) => {
  const dispatch = useDispatch();

  const handleStartGame = () => {
    dispatch(startGame());
  };

  return (
    <div
      className={cn(
        'translate-y-4 opacity-0',
        isMounted && 'opacity-1 translate-y-0',
        'transition-all delay-300 duration-300',
      )}
    >
      <button
        className={cn(
          'rounded-full border-[2px] border-white px-6 py-5 font-ubuntu text-xl text-white',
          'transition-all duration-200 ease-in-out hover:px-7',
        )}
        onClick={handleStartGame}
      >
        Start
      </button>
    </div>
  );
};
