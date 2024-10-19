import { Circle, X } from 'lucide-react';
import { PlayerScore } from './PlayerScore';
import { Round } from './Round';

export const Scoreboard = () => {
  return (
    <div className="flex items-center gap-10">
      <PlayerScore
        name="Omar"
        side={<X strokeWidth={6} color="#fde047" />}
        score="0"
      />
      <Round />
      <PlayerScore
        name="Mohamed"
        side={
          <Circle strokeWidth={10} className="rounded-full" />
        }
        score="0"
      />
    </div>
  );
};
