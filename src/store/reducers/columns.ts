import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IColumns, IState } from '../../types/columns';
import {
  createNewColumns,
  deleteColumnById,
  getInfoColumnById,
  loadAllColumns,
  updateColumnData
} from '../../api/columns';

const initialState: IState = {
  error: null,
  status: '',
  columns: []
};

export const getAllColumns = createAsyncThunk('columns/getAllColumns', (boardId: string) => {
  return loadAllColumns(boardId);
});
export const createColumns = createAsyncThunk(
  'columns/createColumns',
  ({ boardId, title }: { boardId: string; title: string }) => {
    return createNewColumns(boardId, title);
  }
);
export const getColumnById = createAsyncThunk(
  'columns/getColumnById',
  ({ boardId, columnId }: { boardId: string; columnId: string }) => {
    return getInfoColumnById(boardId, columnId);
  }
);
export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  ({ boardId, columnId }: { boardId: string; columnId: string }) => {
    return deleteColumnById(boardId, columnId);
  }
);
export const updateColumn = createAsyncThunk(
  'columns/updateColumn',
  (columnData: { boardId: string; id: string; title: string; order: string }) => {
    return updateColumnData(columnData);
  }
);

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    columnDeleteById: (state: IState, action: { type: string; payload: string }) => {
      state.columns = state.columns.filter((el) => {
        return el.id !== action.payload;
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createColumns.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      createColumns.fulfilled.type,
      (state: IState, action: { type: string; payload: IColumns }) => {
        state.status = 'success';
        state.columns.push(action.payload);
      }
    );
    builder.addCase(
      createColumns.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
    builder.addCase(getAllColumns.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      getAllColumns.fulfilled.type,
      (state: IState, action: { type: string; payload: IColumns[] }) => {
        state.status = 'success';
        state.columns = action.payload.sort((a: IColumns, b: IColumns) => a.order - b.order);
      }
    );
    builder.addCase(
      getAllColumns.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
    builder.addCase(deleteColumn.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(deleteColumn.fulfilled.type, (state: IState) => {
      state.status = 'success';
    });
    builder.addCase(
      deleteColumn.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
    builder.addCase(getColumnById.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getColumnById.fulfilled.type, (state: IState) => {
      state.status = 'success';
    });
    builder.addCase(
      getColumnById.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
    builder.addCase(updateColumn.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      updateColumn.fulfilled.type,
      (state: IState, action: { type: string; payload: IColumns }) => {
        state.status = 'success';
        state.columns = state.columns.filter((el) => el.id !== action.payload.id);
        state.columns.splice(action.payload.order - 1, 0, action.payload);
      }
    );
    builder.addCase(
      updateColumn.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
  }
});
export const { columnDeleteById } = columnsSlice.actions;
export default columnsSlice.reducer;
