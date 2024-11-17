import { Transition } from '@/components/animation';
import { useSelector } from '@/store';
import {
  selectIsDraw,
  selectPlayerTurn,
  selectWinner,
} from '../../gameboard/slices';
import { cn } from '@/utils';

type TurnIndicatorProps = { playerSymbol: 'x' | 'o' };

export const TurnIndicator = ({
  playerSymbol,
}: TurnIndicatorProps) => {
  const playerTurn = useSelector(selectPlayerTurn);
  const winner = useSelector(selectWinner);
  const isDraw = useSelector(selectIsDraw);

  const shouldShowTurnIndicator =
    playerSymbol === playerTurn && !winner && !isDraw;

  if (shouldShowTurnIndicator) {
    return (
      <div
        className={cn(
          'absolute -bottom-4',
          'text-rose-500',
          'animate-bounce transition-opacity',
        )}
      >
        <Transition duration={500}>
          <span
            className={cn(
              'px-3 py-2',
              'rounded-full',
              'text-xs tracking-wide text-white',
              'bg-rose-400',
            )}
          >
            your turn
          </span>
        </Transition>
      </div>
    );
  }

  return null;
};
