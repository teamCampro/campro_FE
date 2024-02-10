import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../counterSlice';
import detailSlice from '../_utils/detailState';
import modalStateSlice from '../_utils/modalState';
import styleSettingSlice from '../_utils/styleSetting';
import checkStandBySlice from '../_utils/checkStandByState';
import vehicleNumberSlice from '../_slices/vehicleNumber';
import plusOptionCountSlice from '../_slices/plusOptions';
import totalPaymentSlice from '../_slices/totalPayment';
const store = configureStore({
  reducer: {
    counter: counterSlice,
    detail: detailSlice,
    isModal: modalStateSlice,
    styleSetting: styleSettingSlice,
    checkStandBy: checkStandBySlice,
    vehicleNumber: vehicleNumberSlice,
    plusOptionCount: plusOptionCountSlice,
    totalPayment: totalPaymentSlice,
  },
});
export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
