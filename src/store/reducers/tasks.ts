import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IState } from '../../types/tasks';

import {
  createNewTask,
  deleteTaskById,
  getInfoTaskById,
  loadAllTasks,
  updateTaskData
} from '../../api/tasks';

const initialState: IState = {
  error: null,
  status: '',
  tasks: []
};

export const getAllTasks = createAsyncThunk('columns/getAllColumns', () => {
  return loadAllTasks();
});
export const createTasks = createAsyncThunk('columns/createColumns', (title: string) => {
  return createNewTask({ title });
});
export const getTaskById = createAsyncThunk('columns/getColumnById', (idColumn: string) => {
  return getInfoTaskById(idColumn);
});
export const deleteTask = createAsyncThunk('columns/deleteColumn', (idColumn: string) => {
  return deleteTaskById(idColumn);
});
export const updateTask = createAsyncThunk(
  'columns/updateColumn',
  (columnData: { id: string; title: string; order: string }) => {
    return updateTaskData(columnData);
  }
);

export const tasksSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTasks.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(createTasks.fulfilled.type, (state: IState) => {
      state.status = 'success';
    });
    builder.addCase(
      createTasks.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
  }
});
export default tasksSlice.reducer;
