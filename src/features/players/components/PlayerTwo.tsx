import { useCallback } from 'react';
import { AddPlayerForm } from './AddPlayerForm';
import { useDispatch, useSelector } from '@/store';
import {
  selectPlayersName,
  setPlayer2Name,
} from '../slices/playersSlice';

export const PlayerTwo = () => {
  const { player2 } = useSelector(selectPlayersName);
  const dispatch = useDispatch();

  const onAddPlayer = useCallback(
    (name: string) => {
      dispatch(setPlayer2Name(name));
    },
    [dispatch],
  );

  return (
    <AddPlayerForm
      label="Player 2"
      initialName={player2}
      onAddPlayer={onAddPlayer}
    />
  );
};
