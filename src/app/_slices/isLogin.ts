import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const isLoginSlice = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIsLogin } = isLoginSlice.actions;

export default isLoginSlice.reducer;
