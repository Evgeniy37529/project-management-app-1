import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IState, ITask, IUpdateInfoTask } from '../../types/tasks';
import { AxiosPromise } from 'axios';

import {
  createNewTask,
  deleteTaskById,
  getInfoTaskById,
  loadAllTasks,
  updateTaskData
} from '../../api/tasks';
import { columnsSlice } from './columns';
import { IColumns } from '../../types/columns';

const initialState: IState = {
  error: null,
  status: '',
  tasks: []
};

export const getAllTasks = createAsyncThunk(
  'tasks/getAllTasks',
  ({ boardId, columnId }: { boardId: string; columnId: string }) => {
    return loadAllTasks(boardId, columnId);
  }
);
export const createTasks = createAsyncThunk(
  'tasks/createTasks',
  ({
    boardId,
    columnId,
    title,
    userId
  }: {
    boardId: string;
    columnId: string;
    title: string;
    userId: string;
  }) => {
    return createNewTask(boardId, columnId, title, userId);
  }
);
export const getTaskById = createAsyncThunk(
  'tasks/getTaskById',
  ({ boardId, columnId, taskId }: { boardId: string; columnId: string; taskId: string }) => {
    return getInfoTaskById(boardId, columnId, taskId);
  }
);
export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  ({ boardId, columnId, taskId }: { boardId: string; columnId: string; taskId: string }) => {
    return deleteTaskById(boardId, columnId, taskId);
  }
);
export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  ({
    taskId,
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  }: {
    taskId: string;
    title: string;
    order: string;
    description: string;
    userId: string;
    boardId: string;
    columnId: string;
  }): AxiosPromise<IUpdateInfoTask> => {
    return updateTaskData(taskId, title, order, description, userId, boardId, columnId);
  }
);

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskDeleteById: (state: IState, action: { type: string; payload: string }) => {
      state.tasks = state.tasks.filter((el) => {
        return el.id !== action.payload;
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createTasks.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      createTasks.fulfilled.type,
      (state: IState, action: { type: string; payload: ITask }) => {
        state.status = 'success';
        state.tasks.push(action.payload);
      }
    );
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
      (state: IState, action: { type: string; payload: ITask[] }) => {
        state.status = 'success';
        state.tasks.push(...action.payload.sort((a: IColumns, b: IColumns) => a.order - b.order));
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
        state.tasks = state.tasks.filter((el) => el.id !== action.payload);
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
    builder.addCase(
      updateTask.fulfilled.type,
      (state: IState, action: { type: string; payload: ITask }) => {
        state.status = 'success';
        state.tasks = state.tasks.filter((el) => el.id !== action.payload.id);
        state.tasks.splice(action.payload.order - 1, 0, action.payload);
      }
    );
    builder.addCase(
      updateTask.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
  }
});
export const { taskDeleteById } = tasksSlice.actions;
export default tasksSlice.reducer;
