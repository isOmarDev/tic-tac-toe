import { useCallback } from 'react';
import { AddPlayerForm } from './AddPlayerForm';
import { ArrowLeft } from 'lucide-react';
import {
  selectPlayersName,
  setPlayer2Name,
} from '../slices/playersSlice';
import { useDispatch, useSelector } from '@/store';
import { cn } from '@/utils';

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
    <>
      <button
        className={cn(
          'group absolute -left-[calc(70px+10px)] bottom-0 flex h-[70px] w-[70px] items-center justify-center',
          'rounded-full bg-white font-semibold text-cyan-950',
        )}
      >
        <ArrowLeft className="transition-transform group-hover:-translate-x-1" />
      </button>

      <AddPlayerForm
        label="Player O"
        initialName={player2}
        onAddPlayer={onAddPlayer}
      />

      <button
        className={cn(
          'absolute left-0 top-[calc(100%+15px)] flex h-[70px] w-full items-center justify-center',
          'rounded-full bg-gray-700 font-semibold text-white',
          'hover:scale-x-105',
          'transition-all duration-200',
        )}
      >
        Play
      </button>
    </>
  );
};
