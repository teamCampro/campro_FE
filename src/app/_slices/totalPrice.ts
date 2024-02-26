import { createSlice } from '@reduxjs/toolkit';
interface TotalPriceState {
  total: number;
}
const initialState: TotalPriceState = {
  total: 0,
};
const totalPaymentSlice = createSlice({
  name: 'TotalPrice',
  initialState,
  reducers: {
    setTotalPrice: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setTotalPrice } = totalPaymentSlice.actions;

export default totalPaymentSlice.reducer;
