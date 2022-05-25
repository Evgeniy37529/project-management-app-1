import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IState } from '../../types/user';
import { deleteUser, signInUser, signUpUser, updateInfo } from '../../api/users';

const initialState: IState = {
  name: '',
  login: '',
  password: '',
  token: '',
  status: ''
};

export const createUser = createAsyncThunk(
  'user/createUser',
  (userData: { name: string; login: string; password: string }) => {
    return signUpUser(userData);
  }
);
export const loginUser = createAsyncThunk(
  'user/loginUser',
  (userData: { login: string; password: string }) => {
    return signInUser(userData);
  }
);
export const eraseUser = createAsyncThunk('user/deleteUser', (id: string) => {
  return deleteUser(id);
});
export const updateInfoUser = createAsyncThunk(
  'user/updateUser',
  (userData: { id: string; name: string; login: string; password: string }) => {
    return updateInfo(userData);
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
    builder.addCase(createUser.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(createUser.fulfilled.type, (state: IState) => {
      state.status = 'success';
    });
    builder.addCase(
      createUser.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );

    builder.addCase(loginUser.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      loginUser.fulfilled.type,
      (state: IState, action: { type: string; payload: { token: string } }) => {
        state.status = 'success';
        state.token = action.payload.token;
        tokenChange(action.payload.token);
        localStorage.token = action.payload.token;
      }
    );
    builder.addCase(
      loginUser.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
    builder.addCase(eraseUser.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(eraseUser.fulfilled.type, (state: IState) => {
      state.status = 'success';
    });
    builder.addCase(
      eraseUser.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
    builder.addCase(updateInfoUser.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(updateInfoUser.fulfilled.type, (state: IState) => {
      state.status = 'success';
    });
    builder.addCase(
      updateInfoUser.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
  }
});
export const { tokenChange } = userSlice.actions;
export default userSlice.reducer;
