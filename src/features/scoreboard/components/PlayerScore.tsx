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
        'flex flex-col items-center p-6',
        'rounded-[28px] bg-red-100 shadow-lg',
      )}
    >
      <div className="rounded-full bg-red-500 px-4 py-4 text-white shadow-md">
        {side}
      </div>
      <div className="mt-4 font-semibold">{name}</div>
      <div
        className={cn(
          'mt-3',
          'rounded-full bg-cyan-900 px-4 py-2 text-xs font-semibold text-white',
        )}
      >
        Won Rounds: {score}
      </div>
    </div>
  );
};
