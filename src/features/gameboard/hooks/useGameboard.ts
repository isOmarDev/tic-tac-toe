import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from '@/store';
import {
  selectBoard,
  selectPlayerTurn,
  setWinner,
  setMove,
  switchTurn,
  setIsDraw,
} from '@/features/gameboard/slices';
import {
  incrementDrawScore,
  incrementScore,
} from '@/features/scoreboard/slices';
import {
  checkWinningPath,
  isDraw,
} from '../utils/gameboard-utils';

export const useGameboard = () => {
  const [winningPath, setWinningPath] = useState<
    null | number[]
  >(null);

  const board = useSelector(selectBoard);
  const player = useSelector(selectPlayerTurn);
  const dispatch = useDispatch();

  const isGameWon = !!winningPath;

  const isWinningCell = useCallback(
    (cell: number) => !!winningPath?.includes(cell),
    [winningPath],
  );

  const onWin = useCallback(
    (winPath: number[]) => {
      setWinningPath(winPath);
      setTimeout(() => {
        dispatch(setWinner(player));
        dispatch(incrementScore(player));
      }, 2000);
    },
    [dispatch, player],
  );

  const onDraw = useCallback(() => {
    dispatch(setIsDraw());
    dispatch(incrementDrawScore());
  }, [dispatch]);

  const evaluateMove = useCallback(
    (cell: number) => {
      const updatedBoard = board.map((value, index) =>
        index === cell ? player : value,
      );
      const winPath = checkWinningPath(updatedBoard);
      if (winPath) {
        onWin(winPath);
      } else if (isDraw(updatedBoard)) {
        onDraw();
      } else {
        dispatch(switchTurn());
      }
    },
    [board, dispatch, onDraw, onWin, player],
  );

  const handleMove = useCallback(
    (cell: number) => {
      if (isGameWon) return;
      dispatch(setMove({ symbol: player, cell }));
      evaluateMove(cell);
    },
    [dispatch, evaluateMove, isGameWon, player],
  );

  return { board, isGameWon, isWinningCell, handleMove };
};
