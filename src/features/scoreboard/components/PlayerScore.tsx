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
        'rounded-[28px]',
        'bg-red-50',
        'shadow-lg',
        // "outline outline-4 outline-red-400 outline-offset-4"
      )}
    >
      <PlayerSide side={side} />
      <PlayerName name={name} />
      <PlayerRoundsWon score={score} />
    </div>
  );
};

const PlayerSide = ({
  side,
}: Pick<PlayerScoreProps, 'side'>) => {
  return (
    <div
      className={cn(
        'px-4 py-4',
        'rounded-full text-white',
        'bg-red-500',
        'shadow-md',
      )}
    >
      {side}
    </div>
  );
};

const PlayerName = ({
  name,
}: Pick<PlayerScoreProps, 'name'>) => {
  return (
    <div className={cn('mt-4', 'font-semibold')}>{name}</div>
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
