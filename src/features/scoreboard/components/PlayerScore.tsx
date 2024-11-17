import { TurnIndicator } from '@/features/gameboard/components';
import { cn } from '@/utils';

type PlayerScoreProps = {
  name: string;
  symbol: 'x' | 'o';
  icon: JSX.Element;
  score: number;
};

export const PlayerScore = ({
  name,
  symbol,
  icon,
  score,
}: PlayerScoreProps) => {
  return (
    <div
      className={cn(
        'relative flex',
        'shrink-0 flex-col items-center',
        'p-7',
        'rounded-[28px] outline outline-[0px] -outline-offset-1 outline-red-100',
        'bg-white shadow-md',
        'transition-all',
      )}
    >
      <PlayerSymbol icon={icon} />
      <PlayerName name={name} />
      <PlayerRoundsWon score={score} />
      <TurnIndicator playerSymbol={symbol} />
    </div>
  );
};

const PlayerSymbol = ({
  icon,
}: Pick<PlayerScoreProps, 'icon'>) => {
  return (
    <div className={cn('rounded-full text-white')}>{icon}</div>
  );
};

const PlayerName = ({
  name,
}: Pick<PlayerScoreProps, 'name'>) => {
  return (
    <div className={cn('mt-7', 'tracking-wide')}>{name}</div>
  );
};

const PlayerRoundsWon = ({
  score,
}: Pick<PlayerScoreProps, 'score'>) => {
  return (
    <div
      className={cn(
        'mt-3 px-5 py-2',
        'rounded-full',
        'text-xs tracking-widest text-white',
        'bg-cyan-800',
      )}
    >
      Rounds Won: {score}
    </div>
  );
};
