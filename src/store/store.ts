import {
  configureStore,
  ThunkAction,
  Action,
  applyMiddleware,
  combineReducers,
  createStore
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import boardsReducer from './reducers/boardsReducer';

const rootReducer = combineReducers({
  boardsReducer
});
// export const store = configureStore({
//   middleware: { applyMiddleware(thunk); },
//   reducer: rootReducer
// });
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
