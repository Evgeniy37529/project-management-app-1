import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { boardType } from '../../types/boardsType';
import instance from '../../api/axiosInstance';

const initialState = [{}];
interface IState {
  status: string | null;
  error: null;
}

export const createBoard = createAsyncThunk('board/createBoard', (title: string) => {
  return instance.post(`/boards`, title).then((data) => data);
});
export const getBoardById = createAsyncThunk('board/getBoard', (id: string) => {
  return instance(`/boards/${id}`).then((data) => data);
});
export const deleteBoard = createAsyncThunk('board/deleteBoard', (id: string) => {
  return instance.delete(`/boards/${id}`).then((data) => data);
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
  extraReducers: void {
    [createBoard.pending.type]: (state: IState) => {
      state.status = 'loading';
      state.error = null;
    },
    [getBoardById.pending.type]: (state: IState) => {
      state.status = 'loading';
      state.error = null;
    },
    [deleteBoard.pending.type]: (state: IState) => {
      state.status = 'loading';
      state.error = null;
    },
    [updateBoard.pending.type]: (state: IState) => {
      state.status = 'loading';
      state.error = null;
    },
    [createBoard.fulfilled.type]: (
      state: IState,
      action: { type: string; payload: { id: string; title: string } }
    ) => {
      state.status = 'success';
      state.error = null;
    },
    [getBoardById.fulfilled.type]: (
      state: IState,
      action: { type: string; payload: boardType }
    ) => {
      state.status = 'success';
      state.error = null;
    },
    [deleteBoard.fulfilled.type]: (state: IState) => {
      state.status = 'success';
      state.error = null;
    },
    [updateBoard.fulfilled.type]: (
      state: IState,
      action: { type: string; payload: { id: string; title: string } }
    ) => {
      state.status = 'success';
      state.error = null;
    }
  }
});

export default boardSlice.reducer;
