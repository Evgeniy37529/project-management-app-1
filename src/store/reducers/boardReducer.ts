import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { boardType } from '../../types/boardsType';
import axios from 'axios';

const initialState = [{}];
interface IState {
  status: string | null;
  error: null;
}

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.token}`
  }
};
const url = 'https://fierce-reef-60064.herokuapp.com/';

export const createBoard = createAsyncThunk('board/createBoard', (title: string) => {
  return axios.post(`${url}/boards`, title, config).then((data) => data);
});
export const getBoardById = createAsyncThunk('board/getBoard', (id: string) => {
  return axios(`${url}/boards/${id}`, config).then((data) => data);
});
export const deleteBoard = createAsyncThunk('board/deleteBoard', (id: string) => {
  return axios.delete(`${url}/boards/${id}`, config).then((data) => data);
});
export const updateBoard = createAsyncThunk(
  'board/updateBoard',
  ({ id, title }: { id: string; title: string }) => {
    return axios.put(`${url}/boards/${id}`, title, config).then((data) => data);
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
    [createBoard.fulfilled.type]: (state: IState, action: { type; payload }) => {
      state.status = 'success';
      state.error = null;
    },
    [getBoardById.fulfilled.type]: (state: IState, action: { type; payload }) => {
      state.status = 'success';
      state.error = null;
    },
    [deleteBoard.fulfilled.type]: (state: IState, action: { type; payload }) => {
      state.status = 'success';
      state.error = null;
    },
    [updateBoard.fulfilled.type]: (state: IState, action: { type; payload }) => {
      state.status = 'success';
      state.error = null;
    }
  }
});

export default boardSlice.reducer;
