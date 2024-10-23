import { Circle, X } from 'lucide-react';
import { PlayerScore } from './PlayerScore';
import { Round } from './Round';
import { Draw } from './Draw';
import { useSelector } from '@/store';
import { selectPlayersName } from '@/features/players/slices';

export const Scoreboard = () => {
  const { player1, player2 } = useSelector(selectPlayersName);

  return (
    <div className="flex items-center gap-10">
      <PlayerScore
        name={player1}
        side={
          <X
            size={38}
            strokeWidth={6}
            className="text-[#ffbf00] drop-shadow-md"
          />
        }
        score="0"
      />

      <div className="self-start">
        <Round />
        <Draw />
      </div>

      <PlayerScore
        name={player2}
        side={
          <Circle
            size={38}
            strokeWidth={10}
            className="rounded-full drop-shadow-md"
          />
        }
        score="0"
      />
    </div>
  );
};
