import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import gameSlice from './globalSlices/gameSlice';
import playersSlice from '@/features/players/slices/playersSlice';

export const store = configureStore({
  reducer: {
    game: gameSlice,
    players: playersSlice,
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch =
  useReduxDispatch.withTypes<AppDispatch>();
export const useSelector =
  useReduxSelector.withTypes<RootState>();
