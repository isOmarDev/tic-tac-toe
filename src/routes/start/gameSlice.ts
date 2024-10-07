import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface gameState {
  isStarted: boolean;
}

const initialState: gameState = {
  isStarted: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.isStarted = true;
    },
  },
});

export const { startGame } = gameSlice.actions;

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
