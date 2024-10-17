import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface GameState {
  isStarted: boolean;
  isPlaying: boolean;
}

const initialState: GameState = {
  isStarted: false,
  isPlaying: true,
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
    stopGame: (state) => {
      state.isPlaying = false;
    },
  },
});

export const {
  startGameSetup,
  exitGameSetup,
  playGame,
  stopGame,
} = gameSlice.actions;

export const selectGameState = (state: RootState) => state.game;

export default gameSlice.reducer;
