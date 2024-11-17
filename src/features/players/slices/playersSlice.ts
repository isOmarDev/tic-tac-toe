import {
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface PlayersState {
  playerOne: {
    name: string;
    symbol: 'x';
  };
  playerTwo: {
    name: string;
    symbol: 'o';
  };
}

const initialState: PlayersState = {
  playerOne: {
    name: '',
    symbol: 'x',
  },
  playerTwo: {
    name: '',
    symbol: 'o',
  },
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayerOneName: (state, action: PayloadAction<string>) => {
      state.playerOne.name = action.payload;
    },
    setPlayerTwoName: (state, action: PayloadAction<string>) => {
      state.playerTwo.name = action.payload;
    },
    resetPlayersNames: (state) => {
      state.playerOne.name = '';
      state.playerTwo.name = '';
    },
    resetPlayers: () => initialState,
  },
});

export const {
  setPlayerOneName,
  setPlayerTwoName,
  resetPlayersNames,
  resetPlayers,
} = playersSlice.actions;

// Base selector
export const selectPlayers = (state: RootState) => state.players;

export const selectPlayersNames = createSelector(
  [selectPlayers],
  ({ playerOne, playerTwo }) => ({
    playerOneName: playerOne.name,
    playerTwoName: playerTwo.name,
  }),
);

export const selectPlayersSides = createSelector(
  [selectPlayers],
  ({ playerOne, playerTwo }) => ({
    playerOneSide: playerOne.symbol,
    playerTwoSide: playerTwo.symbol,
  }),
);

export default playersSlice.reducer;
