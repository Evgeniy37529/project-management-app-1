import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IState } from '../../types/userType';
import instance from '../../api/axiosInstance';
import { AppThunk } from '../store';

const initialState = {
  name: '',
  login: '',
  password: '',
  token: '',
  status: ''
};
export const createUser = createAsyncThunk(
  'createUser',
  async (userData: { name: string; login: string; password: string }, { rejectWithValue }) => {
    const { name, login, password } = userData;
    return instance
      .post('/signup', { name, login, password })
      .then((data) => data)
      .catch((error) => rejectWithValue(error.message));
  }
);
export const loginUser = createAsyncThunk(
  'loginUser',
  (userData: { login: string; password: string }, { rejectWithValue, dispatch }) => {
    const { login, password } = userData;
    return instance
      .post(`/signin`, { login, password })
      .then((data) => {
        dispatch(tokenChange(data.data.token));
        localStorage.token = data.data.token;
        return data.data;
      })
      .catch((error) => rejectWithValue(error.message));
  }
);
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    tokenChange: (state: IState, action: { payload: string }) => {
      state.token = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending.type, (state: IState) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createUser.fulfilled.type, (state: IState) => {
        state.status = 'success';
      })
      .addCase(
        createUser.rejected.type,
        (state: IState, action: { type: string; payload: string }) => {
          state.status = 'error';
          state.error = action.payload;
        }
      );

    builder
      .addCase(loginUser.pending.type, (state: IState) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled.type,
        (state: IState, action: { type: string; payload: { token: string } }) => {
          state.status = 'success';
          state.token = action.payload.token;
        }
      )
      .addCase(
        loginUser.rejected.type,
        (state: IState, action: { type: string; payload: string }) => {
          state.status = 'error';
          state.error = action.payload;
        }
      );
  }
});
export const { tokenChange } = userSlice.actions;
export default userSlice.reducer;
