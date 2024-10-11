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
    startGameSetup: (state) => {
      state.isStarted = true;
    },
    exitGameSetup: (state) => {
      state.isStarted = false;
    },
  },
});

export const { startGameSetup, exitGameSetup } =
  gameSlice.actions;

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
