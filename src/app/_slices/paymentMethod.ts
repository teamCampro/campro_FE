import { createSlice } from '@reduxjs/toolkit';

interface PaymentMethodState {
  method: string;
}

const initialState: PaymentMethodState = { method: '' };

const paymentMethodSlice = createSlice({
  name: 'paymentMethod',
  initialState,
  reducers: {
    setPaymentMethod: (state, action) => {
      state.method = action.payload;
    },
  },
});

export const { setPaymentMethod } = paymentMethodSlice.actions;
export default paymentMethodSlice.reducer;
