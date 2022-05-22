import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import boardsReducer from './reducers/boards';
import userReducer from './reducers/user';

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    user: userReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
