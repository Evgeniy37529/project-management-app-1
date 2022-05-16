import { createSlice } from '@reduxjs/toolkit';
import { boardType } from '../../types/boardsType';

export interface IState {
  boards: boardType[];
}
const initialState = {
  boards: []
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    loadBoards: (state: IState, action) => {
      state.boards = [...action.payload];
    }
  }
});
export const { loadBoards } = boardsSlice.actions;
export default boardsSlice.reducer;
