import { useCallback } from 'react';
import { AddPlayerForm } from './AddPlayerForm';
import { useDispatch, useSelector } from '@/store';
import {
  selectPlayersName,
  setPlayer1Name,
} from '../slices/playersSlice';

type PlayerOneProps = { onNextStep: () => void };

export const PlayerOne = ({ onNextStep }: PlayerOneProps) => {
  const { player1 } = useSelector(selectPlayersName);
  const dispatch = useDispatch();

  const handleOnSuccess = useCallback(
    (playerName: string) => {
      dispatch(setPlayer1Name(playerName));
      onNextStep();
    },
    [dispatch, onNextStep],
  );

  return (
    <AddPlayerForm
      label="Player 1"
      initialName={player1}
      onSuccess={handleOnSuccess}
    />
  );
};
