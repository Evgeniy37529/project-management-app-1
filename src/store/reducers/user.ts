import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IState } from '../../types/user';
import { deleteUser, signInUser, signUpUser, updateInfo, getUser } from '../../api/users';

const initialState: IState = {
  id: '',
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
export const getUserById = createAsyncThunk('user/getUser', (id: string) => {
  return getUser(id);
});
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    tokenChange: (state: IState, action: { payload: string }) => {
      state.token = action.payload;
    },
    getUserId: (state: IState, action: { payload: string }) => {
      state.id = action.payload;
    },
    defaultStatus: (state: IState) => {
      state.status = '';
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
        localStorage.setItem('token', action.payload.token);
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
      //localStorage.removeItem('token');
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
    builder.addCase(
      updateInfoUser.fulfilled.type,
      (
        state: IState,
        action: { type: string; payload: { id: string; name: string; login: string } }
      ) => {
        state.status = 'success';
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.login = action.payload.login;
      }
    );
    builder.addCase(
      updateInfoUser.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
    builder.addCase(getUserById.pending.type, (state: IState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      getUserById.fulfilled.type,
      (
        state: IState,
        action: { type: string; payload: { id: string; login: string; name: string } }
      ) => {
        state.status = 'success';
        state.name = action.payload.name;
        state.login = action.payload.login;
        state.id = action.payload.id;
      }
    );
    builder.addCase(
      getUserById.rejected.type,
      (state: IState, action: { type: string; payload: string }) => {
        state.status = 'error';
        state.error = action.payload;
      }
    );
  }
});
export const { tokenChange } = userSlice.actions;
export default userSlice.reducer;
