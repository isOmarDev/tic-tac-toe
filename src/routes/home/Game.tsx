import { Scoreboard } from '@/features/scoreboard/components';
import {
  Gameboard,
  WinnerAnnouncement,
} from '@/features/gameboard/components';
import { useSelector } from '@/store';
import {
  selectIsDraw,
  selectWinner,
} from '@/features/gameboard/slices';
import { selectPlayers } from '@/features/players/slices';

export const Game = () => {
  const winner = useSelector(selectWinner);
  const isDraw = useSelector(selectIsDraw);
  const { playerOne, playerTwo } = useSelector(selectPlayers);

  const getWinningPlayer = () => {
    if (winner === playerOne.symbol) {
      return playerOne.name;
    }
    if (winner === playerTwo.symbol) {
      return playerTwo.name;
    }
    return null;
  };

  return (
    <>
      <Scoreboard />
      <div className="mt-[70px]">
        {winner || isDraw ? (
          <WinnerAnnouncement
            winner={getWinningPlayer()}
            isDraw={isDraw}
          />
        ) : (
          <Gameboard />
        )}
      </div>
    </>
  );
};
