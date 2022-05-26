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

export const getAllTasks = createAsyncThunk('tasks/getAllTasks', () => {
  return loadAllTasks();
});
export const createTasks = createAsyncThunk('tasks/createTasks', (title: string) => {
  return createNewTask({ title });
});
export const getTaskById = createAsyncThunk('tasks/getTaskById', (idColumn: string) => {
  return getInfoTaskById(idColumn);
});
export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  ({ columnId, taskId }: { columnId: string; taskId: string }) => {
    return deleteTaskById(columnId, taskId);
  }
);
export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  (columnData: {
    id: string;
    title: string;
    order: string;
    description: string;
    userId: string;
    boardId: string;
    columnId: string;
  }) => {
    return updateTaskData(columnData);
  }
);

export const tasksSlice = createSlice({
  name: 'tasks',
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
    builder.addCase(getAllTasks.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      getAllTasks.fulfilled.type,
      (state: IState, action: { type: string; payload: [] }) => {
        state.status = 'success';
        state.tasks.concat(action.payload);
      }
    );
    builder.addCase(
      getAllTasks.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
    builder.addCase(getTaskById.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getTaskById.fulfilled.type, (state: IState) => {
      state.status = 'success';
    });
    builder.addCase(
      getTaskById.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
    builder.addCase(deleteTask.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      deleteTask.fulfilled.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'loading';
        state.error = null;
        state.tasks.filter((el) => el.id !== action.payload);
      }
    );
    builder.addCase(
      deleteTask.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
    builder.addCase(updateTask.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(updateTask.fulfilled.type, (state: IState) => {
      state.status = 'success';
      getAllTasks();
    });
    builder.addCase(
      updateTask.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
  }
});
export default tasksSlice.reducer;
