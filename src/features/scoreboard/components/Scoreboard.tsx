import { Circle, X } from 'lucide-react';
import { Transition } from '@/components/animation';
import { PlayerScore } from './PlayerScore';
import { Round } from './Round';
import { Draw } from './Draw';
import { useSelector } from '@/store';
import { selectPlayers } from '@/features/players/slices';
import { selectPlayersScore } from '../slices';

export const Scoreboard = () => {
  const score = useSelector(selectPlayersScore);
  const { playerOne, playerTwo } = useSelector(selectPlayers);

  return (
    <Transition translateY={-100} duration={400}>
      <div className="flex items-center gap-10">
        <PlayerScore
          name={playerOne.name}
          symbol={playerOne.symbol}
          score={score.x}
          icon={
            <X
              className="text-golden-yellow drop-shadow-md"
              size={40}
              strokeWidth={6.5}
            />
          }
        />

        <div className="self-start">
          <Round />
          <Draw />
        </div>

        <PlayerScore
          name={playerTwo.name}
          symbol={playerTwo.symbol}
          score={score.o}
          icon={
            <Circle
              className="rounded-full drop-shadow-md"
              size={40}
              strokeWidth={10}
            />
          }
        />
      </div>
    </Transition>
  );
};
