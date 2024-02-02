import { createSlice } from '@reduxjs/toolkit';

export const modalStateSlice = createSlice({
  name: 'modalAnimation',
  initialState: { value: false },

  reducers: {
    isModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { isModal } = modalStateSlice.actions;
export default modalStateSlice.reducer;
