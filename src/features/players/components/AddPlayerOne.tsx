import { useCallback } from 'react';
import { AddPlayerForm } from './AddPlayerForm';
import { useDispatch, useSelector } from '@/store';
import {
  selectPlayersNames,
  setPlayerOneName,
} from '../slices/playersSlice';

type AddPlayerOneProps = { onNextStep: () => void };

export const AddPlayerOne = ({
  onNextStep,
}: AddPlayerOneProps) => {
  const { playerOneName } = useSelector(selectPlayersNames);
  const dispatch = useDispatch();

  const handleOnSuccess = useCallback(
    (playerName: string) => {
      dispatch(setPlayerOneName(playerName));
      onNextStep();
    },
    [dispatch, onNextStep],
  );

  return (
    <AddPlayerForm
      label="Player 1"
      initialName={playerOneName}
      onSuccess={handleOnSuccess}
    />
  );
};
