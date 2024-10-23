import { useCallback } from 'react';
import { AddPlayerForm } from './AddPlayerForm';
import { useDispatch, useSelector } from '@/store';
import { playGame } from '@/store/globalSlices';
import {
  selectPlayersName,
  setPlayer2Name,
} from '../slices/playersSlice';

export const AddPlayerTwo = () => {
  const { player2 } = useSelector(selectPlayersName);
  const dispatch = useDispatch();

  const handleOnSuccess = useCallback(
    (name: string) => {
      dispatch(setPlayer2Name(name));
      dispatch(playGame());
    },
    [dispatch],
  );

  return (
    <AddPlayerForm
      label="Player 2"
      initialName={player2}
      onSuccess={handleOnSuccess}
    />
  );
};
