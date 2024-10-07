import { useCallback } from 'react';
import { AddPlayerForm } from './AddPlayerForm';
import { Home, ArrowRight } from 'lucide-react';
import {
  selectPlayersName,
  setPlayer1Name,
} from '../slices/playersSlice';
import { useDispatch, useSelector } from '@/store';
import { cn } from '@/utils';

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
    <>
      <button
        className={cn(
          'group absolute -left-[calc(70px+10px)] bottom-0 flex h-[70px] w-[70px] items-center justify-center',
          'overflow-hidden rounded-full bg-white font-semibold text-cyan-950',
          'hover:-left-[calc(150px+10px)] hover:w-[150px]',
          'transition-all',
        )}
      >
        <Home />
        <span
          className={cn(
            'absolute ml-2 translate-x-20 opacity-0',
            'group-hover:static group-hover:translate-x-0 group-hover:opacity-100',
            'transition-all',
          )}
        >
          Home
        </span>
      </button>

      <AddPlayerForm
        label="Player X"
        initialName={player1}
        onAddPlayer={onAddPlayer}
      />

      <button
        className={cn(
          'group absolute bottom-0 left-[calc(100%+10px)] flex h-[70px] w-[70px] items-center justify-center',
          'overflow-hidden rounded-full bg-white font-semibold text-cyan-950',
          'hover:w-[150px]',
          'transition-all',
        )}
      >
        <span
          className={cn(
            'absolute mr-2 -translate-x-20 opacity-0',
            'group-hover:static group-hover:translate-x-0 group-hover:opacity-100',
            'transition-all',
          )}
        >
          Player 2
        </span>
        <ArrowRight />
      </button>
    </>
  );
};
