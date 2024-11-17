import { Transition } from '@/components/animation';
import { Image } from '@/components/image/Image';
import { Button } from '@/components/buttons/Button';
import { useDispatch } from '@/store';
import { resetGameboard } from '../slices';
import {
  incrementRound,
  resetScoreboard,
} from '@/features/scoreboard/slices';
import { cn } from '@/utils';
import trophy from '@/assets/trophy.png';
import scale from '@/assets/scale.png';

type WinnerAnnouncementProps = {
  winner: string | null;
  isDraw: boolean;
};

export const WinnerAnnouncement = ({
  winner,
  isDraw,
}: WinnerAnnouncementProps) => {
  const dispatch = useDispatch();

  const handleContinuePlaying = () => {
    dispatch(incrementRound());
    dispatch(resetGameboard());
  };

  const handleResetPlaying = () => {
    dispatch(resetGameboard());
    dispatch(resetScoreboard());
  };

  return (
    <Transition translateY={100} duration={400} delay={50}>
      <div className="relative mx-auto w-[350px] rounded-[30px] bg-gray-50 px-10 pb-10 pt-16 shadow-lg">
        {winner && (
          <Image
            className="absolute -top-[47px] left-1/2 mx-auto -translate-x-1/2"
            src={trophy}
            alt="trophy"
            width={94}
            height={94}
          />
        )}

        {isDraw && (
          <Image
            className="absolute -top-[47px] left-1/2 mx-auto -translate-x-1/2"
            src={scale}
            alt="balance scale"
            width={94}
            height={94}
          />
        )}

        <h2
          className={cn(
            'mb-6',
            'text-center text-2xl font-semibold tracking-wider text-rose-600',
          )}
        >
          {isDraw && "it's a draw"}
          {winner && `${winner} won`}
        </h2>

        <Button
          className={cn(
            'mx-auto p-2',
            'h-14 w-full',
            'rounded-full border-gray-200',
            'hover:bg-gray-100',
          )}
          variant="outline"
          onClick={handleContinuePlaying}
        >
          Continue
        </Button>
        <Button
          className={cn(
            'mx-auto mt-3 p-2',
            'h-14 w-full',
            'text-white',
            'rounded-full bg-cyan-950',
            'hover:bg-cyan-900',
          )}
          onClick={handleResetPlaying}
        >
          Reset
        </Button>
      </div>
    </Transition>
  );
};
