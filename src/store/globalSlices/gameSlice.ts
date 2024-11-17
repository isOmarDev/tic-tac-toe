import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface GameState {
  isStarted: boolean;
  isPlaying: boolean;
}

const initialState: GameState = {
  isStarted: false,
  isPlaying: false,
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
    playGame: (state) => {
      state.isPlaying = true;
    },
    resetGame: () => initialState,
  },
});

export const {
  startGameSetup,
  exitGameSetup,
  playGame,
  resetGame,
} = gameSlice.actions;

export const selectGameState = (state: RootState) => state.game;

export default gameSlice.reducer;
