import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IState } from '../../types/columns';
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

export const getAllColumns = createAsyncThunk('columns/getAllColumns', () => {
  return loadAllColumns();
});
export const createColumns = createAsyncThunk('columns/createColumns', (title: string) => {
  return createNewColumns({ title });
});
export const getColumnById = createAsyncThunk('columns/getColumnById', (idColumn: string) => {
  return getInfoColumnById(idColumn);
});
export const deleteColumn = createAsyncThunk('columns/deleteColumn', (idColumn: string) => {
  return deleteColumnById(idColumn);
});
export const updateColumn = createAsyncThunk(
  'columns/updateColumn',
  (columnData: { id: string; title: string; order: string }) => {
    return updateColumnData(columnData);
  }
);

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createColumns.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(createColumns.fulfilled.type, (state: IState) => {
      state.status = 'success';
    });
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
      (
        state: IState,
        action: { type: string; payload: { id: string; title: string; order: number } }
      ) => {
        state.status = 'success';
        state.columns.concat(action.payload);
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
    builder.addCase(updateColumn.fulfilled.type, (state: IState) => {
      state.status = 'success';
    });
    builder.addCase(
      updateColumn.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
  }
});
export default columnsSlice.reducer;
