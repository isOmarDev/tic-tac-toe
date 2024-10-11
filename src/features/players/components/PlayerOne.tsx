import { useCallback } from 'react';
import { AddPlayerForm } from './AddPlayerForm';
import { useDispatch, useSelector } from '@/store';
import {
  selectPlayersName,
  setPlayer1Name,
} from '../slices/playersSlice';

export const PlayerOne = () => {
  const { player1 } = useSelector(selectPlayersName);
  const dispatch = useDispatch();

  const onAddPlayer = useCallback(
    (name: string) => {
      dispatch(setPlayer1Name(name));
    },
    [dispatch],
  );

  return (
    <AddPlayerForm
      label="Player 1"
      initialName={player1}
      onAddPlayer={onAddPlayer}
    />
  );
};
