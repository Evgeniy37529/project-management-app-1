import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createNewBoard,
  deleteBoardById,
  getAllBoards,
  getInfoBoardById,
  updateBoardData
} from '../../api/boards';
import { IBoard } from '../../types/boards';

export interface IState {
  status?: string;
  error?: null | boolean;
  boards?: IBoard[];
}

const initialState = {
  status: '',
  currentId: '',
  boards: [],
  currentBoard: {}
};

export const loadBoards = createAsyncThunk('boards/loadBoards', () => getAllBoards());

export const createBoard = createAsyncThunk(
  'board/createBoard',
  ({ title, description }: { title: string; description: string }) =>
    createNewBoard({ title, description })
);
export const getBoardById = createAsyncThunk('board/getBoard', (id: string) => {
  return getInfoBoardById(id);
});
export const deleteBoard = createAsyncThunk('board/deleteBoard', (id: string) => {
  deleteBoardById(id);
  return id;
});
export const updateBoard = createAsyncThunk(
  'board/updateBoard',
  ({ id, title }: { id: string; title: string }) => {
    return updateBoardData({ id, title });
  }
);

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    boardsChangeDelete: (state: IState, action) => {
      state.boards = state.boards?.filter((el) => el.id !== action.payload);
    }
  },
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
    builder.addCase(createBoard.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      createBoard.fulfilled.type,
      (state: IState, action: { type: string; payload: IBoard }) => {
        state.status = 'success';
        state.error = null;
        state.boards?.push(action.payload);
      }
    );
    builder.addCase(createBoard.rejected.type, (state: IState) => {
      state.status = 'error';
      state.error = true;
    });
    builder.addCase(deleteBoard.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      deleteBoard.fulfilled.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'success';
        state.error = null;
        state.boards = state.boards?.filter((el) => el.id !== action.payload);
      }
    );
    builder.addCase(deleteBoard.rejected.type, (state: IState) => {
      state.status = 'error';
      state.error = true;
    });
    builder.addCase(getBoardById.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      getBoardById.fulfilled.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'success';
        state.error = null;
      }
    );
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
export const { boardsChangeDelete } = boardsSlice.actions;

export default boardsSlice.reducer;
