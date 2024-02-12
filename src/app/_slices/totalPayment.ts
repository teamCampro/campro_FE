import { createSlice } from '@reduxjs/toolkit';
interface TotalPaymentState {
  total: number;
}
const initialState: TotalPaymentState = {
  total: 0,
};
const totalPaymentSlice = createSlice({
  name: 'totalPayment',
  initialState,
  reducers: {
    setTotalPayment: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setTotalPayment } = totalPaymentSlice.actions;

export default totalPaymentSlice.reducer;
