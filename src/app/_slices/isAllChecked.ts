import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const isAllCheckedSlice = createSlice({
  name: 'isAllChecked',
  initialState,
  reducers: {
    setIsAllChecked: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setIsAllChecked } = isAllCheckedSlice.actions;
export default isAllCheckedSlice.reducer;
