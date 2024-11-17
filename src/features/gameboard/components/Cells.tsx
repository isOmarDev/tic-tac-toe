import { Cell } from './Cell';
import { useGameboard } from '../hooks/useGameboard';

export const Cells = () => {
  const { board, isWinningCell, handleMove } = useGameboard();

  return (
    <div className="grid h-full grid-cols-3 grid-rows-3">
      {board.map((cell, index) => {
        return (
          <Cell
            key={index}
            value={cell}
            isWinningCell={isWinningCell(index)}
            onMove={() => handleMove(index)}
          />
        );
      })}
    </div>
  );
};
