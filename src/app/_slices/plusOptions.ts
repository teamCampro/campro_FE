import { createSlice } from '@reduxjs/toolkit';

interface PlusOptionCount {
  [key: string]: number;
}

const initialState: PlusOptionCount = {};

const plusOptionCountSlice = createSlice({
  name: 'plusOption',
  initialState,
  reducers: {
    plus: (state, action) => {
      if (!state[action.payload]) {
        state[action.payload] = 1;
      } else {
        state[action.payload]++;
      }
    },
    minus: (state, action) => {
      if (state[action.payload] > 0) {
        state[action.payload]--;
      }
    },
  },
});

export const { plus, minus } = plusOptionCountSlice.actions;
export default plusOptionCountSlice.reducer;
