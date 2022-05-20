import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../api/axiosInstance';

export interface IState {
  status?: string;
  error?: null | boolean;
  boards?: IBoard[];
}
export interface IBoard {
  id: string;
  title: string;
}
const initialState = {
  state: '',
  boards: []
};

export const loadBoards = createAsyncThunk('boards/loadBoards', (_, { rejectWithValue }) => {
  return instance
    .get(`/boards`)
    .then((data) => data.data)
    .catch((error) => rejectWithValue(error.message));
});

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadBoards.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      loadBoards.fulfilled.type,
      (state: IState, action: { type: string; payload: IBoard[] }) => {
        state.status = 'success';
        state.error = null;
        state.boards = action.payload;
      }
    );
    builder.addCase(loadBoards.rejected.type, (state: IState) => {
      state.status = 'error';
      state.error = true;
    });
  }
});

export default boardsSlice.reducer;
