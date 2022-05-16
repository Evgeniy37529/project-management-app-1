import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IState } from '../../types/userType';
import instance from '../../api/axiosInstance';

const initialState = {
  name: '',
  login: '',
  password: '',
  token: '',
  status: ''
};

export const createUser = createAsyncThunk(
  'user/createUser',
  ({ name, login, password }: { name: string; login: string; password: string }) => {
    return instance.post('/signup', { name, login, password }).then((data) => data);
  }
);
export const loginUser = createAsyncThunk(
  'user/loginUser',
  ({ login, password }: { login: string; password: string }, { rejectWithValue, dispatch }) => {
    return instance
      .post(`/signin`, { login, password })
      .then((data) => {
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
    nameChange: (state: IState, action: { payload: string }) => {
      state.name = action.payload;
    },
    loginChange: (state: IState, action: { payload: string }) => {
      state.login = action.payload;
    },
    passwordChange: (state: IState, action: { payload: string }) => {
      state.password = action.payload;
    },
    tokenChange: (state: IState, action: { payload: string }) => {
      state.token = action.payload;
    }
  },
  extraReducers: {
    [createUser.pending.type]: (state: IState) => {
      state.status = 'loading';
      state.error = null;
    },
    [createUser.fulfilled.type]: (state: IState) => {
      state.status = 'success';
      //тут непонятно куда девается пароль, так как в документации говорится о том, что пароль должен прийти, но по факту нет
    },
    [createUser.rejected.type]: (state: IState, action: { type: string; payload: string }) => {
      state.status = 'error';
      state.error = action.payload;
    },
    [loginUser.pending.type]: (state: IState) => {
      state.status = 'loading';
      state.error = null;
    },
    [loginUser.fulfilled.type]: (
      state: IState,
      action: { type: string; payload: { token: string } }
    ) => {
      state.status = 'success';
      state.token = action.payload.token;
    },
    [loginUser.rejected.type]: (state: IState, action: { type: string; payload: string }) => {
      state.status = 'error';
      state.error = action.payload;
    }
  }
});
export const { nameChange, loginChange, passwordChange } = userSlice.actions;
export default userSlice.reducer;
