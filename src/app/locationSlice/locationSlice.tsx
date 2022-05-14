import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  lang: string;
};
const initialState: initialStateType = {
  lang: 'en',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLang: (state, action) => void (state.lang = action.payload),
  },
});

export default locationSlice.reducer;
