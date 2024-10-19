import { Scoreboard } from '@/features/scoreboard/components';
import { Gameboard } from '@/features/gameboard/components';

export const Gameplay = () => {
  return (
    <div>
      <Scoreboard />
      <div className="mt-16">
        <Gameboard />
      </div>
    </div>
  );
};
