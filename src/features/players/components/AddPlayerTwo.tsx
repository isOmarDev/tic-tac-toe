import { useCallback } from 'react';
import { AddPlayerForm } from './AddPlayerForm';
import { useDispatch, useSelector } from '@/store';
import { playGame } from '@/store/globalSlices';
import {
  selectPlayersNames,
  setPlayerTwoName,
} from '../slices/playersSlice';

export const AddPlayerTwo = () => {
  const { playerTwoName } = useSelector(selectPlayersNames);
  const dispatch = useDispatch();

  const handleOnSuccess = useCallback(
    (name: string) => {
      dispatch(setPlayerTwoName(name));
      dispatch(playGame());
    },
    [dispatch],
  );

  return (
    <AddPlayerForm
      label="Player 2"
      initialName={playerTwoName}
      onSuccess={handleOnSuccess}
    />
  );
};
