import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface GameboardState {
  board: ('x' | 'o' | null)[];
  playerTurn: 'x' | 'o';
  winner: null | 'x' | 'o';
  isDraw: boolean;
}

const initialState: GameboardState = {
  board: Array(9).fill(null),
  playerTurn: 'x',
  winner: null,
  isDraw: false,
};

export const gameboardSlice = createSlice({
  name: 'gameboard',
  initialState,
  reducers: {
    setWinner: (state, action: PayloadAction<'x' | 'o'>) => {
      state.winner = action.payload;
    },
    clearWinner: (state) => {
      state.winner = null;
    },
    setIsDraw: (state) => {
      state.isDraw = true;
    },
    setMove: (
      state,
      action: PayloadAction<{ symbol: 'x' | 'o'; cell: number }>,
    ) => {
      const { cell, symbol } = action.payload;
      state.board[cell] = symbol;
    },
    switchTurn: (state) => {
      state.playerTurn = state.playerTurn === 'x' ? 'o' : 'x';
    },
    resetGameboard: () => initialState,
  },
});

export const {
  switchTurn,
  setMove,
  setWinner,
  setIsDraw,
  clearWinner,
  resetGameboard,
} = gameboardSlice.actions;

export const selectBoard = (state: RootState) =>
  state.gameboard.board;

export const selectPlayerTurn = (state: RootState) =>
  state.gameboard.playerTurn;

export const selectWinner = (state: RootState) =>
  state.gameboard.winner;

export const selectIsDraw = (state: RootState) =>
  state.gameboard.isDraw;

export default gameboardSlice.reducer;
