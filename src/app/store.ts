import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import location from './locationSlice/locationSlice';
export const store = configureStore({
  reducer: {
    location,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
