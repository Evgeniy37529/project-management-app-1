import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../api/axiosInstance';

export interface IState {
  status: string;
  error: null | boolean;
  boards: IBoard[];
}
export interface IBoard {
  id: string;
  title: string;
}
const initialState = {
  boards: []
};

export const loadBoard = createAsyncThunk('board/createBoard', () => {
  return instance.post(`$/boards`).then((data) => data);
});

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: void {
    [loadBoard.pending.type]: (state: IState) => {
      state.status = 'loading';
      state.error = null;
    },
    [loadBoard.fulfilled.type]: (state: IState, action: { type: string; payload: IBoard[] }) => {
      state.status = 'success';
      state.error = null;
      state.boards = action.payload;
    },
    [loadBoard.rejected.type]: (state: IState) => {
      state.status = 'error';
      state.error = true;
    }
  }
});

export default boardsSlice.reducer;
