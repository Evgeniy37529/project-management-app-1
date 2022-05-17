import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import boardsReducer from './reducers/boardsReducer';
import userReducer from './reducers/userReducer';
import boardReducer from './reducers/boardReducer';

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    user: userReducer,
    board: boardReducer
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
