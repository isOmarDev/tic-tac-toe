import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface ScoreboardState {
  score: {
    x: number;
    o: number;
  };
  drawScore: number;
  round: number;
}

const initialState: ScoreboardState = {
  score: {
    x: 0,
    o: 0,
  },
  drawScore: 0,
  round: 1,
};

export const scoreboardSlice = createSlice({
  name: 'scoreboard',
  initialState,
  reducers: {
    incrementScore: (
      state,
      action: PayloadAction<'x' | 'o'>,
    ) => {
      const player = action.payload;
      state.score[player] += 1;
    },
    incrementDrawScore: (state) => {
      state.drawScore += 1;
    },
    incrementRound: (state) => {
      state.round += 1;
    },
    resetScoreboard: () => initialState,
  },
});

export const {
  incrementScore,
  incrementDrawScore,
  incrementRound,
  resetScoreboard,
} = scoreboardSlice.actions;

// Memoized selector for player scores
export const selectPlayersScore = (state: RootState) =>
  state.scoreboard.score;

export const selectRound = (state: RootState) =>
  state.scoreboard.round;
export const selectDrawScore = (state: RootState) =>
  state.scoreboard.drawScore;

export default scoreboardSlice.reducer;
