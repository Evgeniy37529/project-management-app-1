import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import boardsReducer from './reducers/boards';
import userReducer from './reducers/user';
import columnsReducer from './reducers/columns';
import tasksReducer from './reducers/tasks';

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    user: userReducer,
    columns: columnsReducer,
    tasks: tasksReducer
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
