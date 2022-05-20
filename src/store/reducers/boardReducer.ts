import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../api/axiosInstance';

const initialState: IState = { status: '', error: null };

interface IState {
  status: string | null;
  error: null | boolean;
}

export const createBoard = createAsyncThunk('board/createBoard', (title: string) => {
  return instance.post(`/boards`, { title: title });
});
export const getBoardById = createAsyncThunk('board/getBoard', (id: string) => {
  return instance(`/boards/${id}`).then((data) => data);
});
export const deleteBoard = createAsyncThunk('board/deleteBoard', (id: string) => {
  return instance.delete(`/boards/${id}`);
});
export const updateBoard = createAsyncThunk(
  'board/updateBoard',
  ({ id, title }: { id: string; title: string }) => {
    return instance.put(`/boards/${id}`, title).then((data) => data);
  }
);

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createBoard.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(createBoard.fulfilled.type, (state: IState) => {
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(createBoard.rejected.type, (state: IState) => {
      state.status = 'error';
      state.error = true;
    });
    builder.addCase(deleteBoard.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(deleteBoard.fulfilled.type, (state: IState) => {
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(deleteBoard.rejected.type, (state: IState) => {
      state.status = 'error';
      state.error = true;
    });
    builder.addCase(getBoardById.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getBoardById.fulfilled.type, (state: IState) => {
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(getBoardById.rejected.type, (state: IState) => {
      state.status = 'error';
      state.error = true;
    });
    builder.addCase(updateBoard.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(updateBoard.fulfilled.type, (state: IState) => {
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(updateBoard.rejected.type, (state: IState) => {
      state.status = 'error';
      state.error = true;
    });
  }
});

export default boardSlice.reducer;
