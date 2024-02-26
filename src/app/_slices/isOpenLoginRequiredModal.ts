import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const isOpenLoginRequiredModalSlice = createSlice({
  name: 'isOpenLoginRequiredModal',
  initialState,
  reducers: {
    isOpen: (state, action) => {
      return action.payload;
    },
  },
});

export const { isOpen } = isOpenLoginRequiredModalSlice.actions;

export default isOpenLoginRequiredModalSlice.reducer;
