import { cn } from '@/utils';

type PlayerScoreProps = {
  name: string;
  side: JSX.Element;
  score: string;
};

export const PlayerScore = ({
  name,
  side,
  score,
}: PlayerScoreProps) => {
  return (
    <div
      className={cn(
        'flex',
        'shrink-0 flex-col items-center',
        'p-6',
        'rounded-[28px] outline outline-[0px] -outline-offset-1 outline-red-100',
        'bg-red-50',
        'shadow-lg',
        'transition-all',
      )}
    >
      <PlayerSymbole side={side} />
      <PlayerName name={name} />
      <PlayerRoundsWon score={score} />
    </div>
  );
};

const PlayerSymbole = ({
  side,
}: Pick<PlayerScoreProps, 'side'>) => {
  return (
    <div className={cn('rounded-full text-white')}>{side}</div>
  );
};

const PlayerName = ({
  name,
}: Pick<PlayerScoreProps, 'name'>) => {
  return (
    <div className={cn('mt-5', 'font-semibold')}>{name}</div>
  );
};

const PlayerRoundsWon = ({
  score,
}: Pick<PlayerScoreProps, 'score'>) => {
  return (
    <div
      className={cn(
        'mt-3 px-4 py-2',
        'rounded-full',
        'text-xs font-semibold text-white',
        'bg-cyan-900',
      )}
    >
      Rounds Won: {score}
    </div>
  );
};
