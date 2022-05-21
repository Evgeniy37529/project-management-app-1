import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../api/axiosInstance';

const initialState: IState = { status: '', error: null };

interface IState {
  status: string | null;
  error: null | boolean;
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
});

export default boardSlice.reducer;
