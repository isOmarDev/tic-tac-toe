import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface playersState {
  player1: string;
  player2: string;
}

const initialState: playersState = {
  player1: '',
  player2: '',
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayer1Name: (state, action: PayloadAction<string>) => {
      state.player1 = action.payload;
    },
    setPlayer2Name: (state, action: PayloadAction<string>) => {
      state.player2 = action.payload;
    },
    resetPlayersNames: (state) => {
      state.player1 = '';
      state.player2 = '';
    },
  },
});

export const {
  setPlayer1Name,
  setPlayer2Name,
  resetPlayersNames,
} = playersSlice.actions;

export const selectPlayersName = (state: RootState) =>
  state.players;

export default playersSlice.reducer;
