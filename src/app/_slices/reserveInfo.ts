import { createSlice } from '@reduxjs/toolkit';

interface ReserveInfoState {
  dates: string;
  adult: string;
  child: string;
  pet: string;
}

const initialState: ReserveInfoState = {
  dates: '',
  adult: '',
  child: '',
  pet: '',
};

const reserveInfoSlice = createSlice({
  name: 'reserveInfo',
  initialState,
  reducers: {
    setReserveInfo: (state, action) => {
      state.dates = action.payload.dates;
      state.adult = action.payload.adult;
      state.child = action.payload.child;
      state.pet = action.payload.pet;
    },
  },
});

export const { setReserveInfo } = reserveInfoSlice.actions;
export default reserveInfoSlice.reducer;
