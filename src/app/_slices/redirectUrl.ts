import { createSlice } from '@reduxjs/toolkit';

const initialState: string = '';

const redirectUrlSlice = createSlice({
  name: 'redirectUrl',
  initialState,
  reducers: {
    setRedirectUrl: (state, action) => {
      return action.payload;
    },
  },
});

export const { setRedirectUrl } = redirectUrlSlice.actions;

export default redirectUrlSlice.reducer;
