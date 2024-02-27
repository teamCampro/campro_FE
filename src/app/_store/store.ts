import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from '../counterSlice';
import detailSlice from '../_utils/detailState';
import modalStateSlice from '../_utils/modalState';
import styleSettingSlice from '../_utils/styleSetting';
import checkStandBySlice from '../_utils/checkStandByState';
import vehicleNumberSlice from '../_slices/vehicleNumber';
import plusOptionCountSlice from '../_slices/plusOptions';
import totalPaymentSlice from '../_slices/totalPayment';
import paymentMethodSlice from '../_slices/paymentMethod';
import reserveInfoSlice from '../_slices/reserveInfo';
import profileStateSlice from '../_utils/profileState';
import isAllCheckedSlice from '../_slices/isAllChecked';
import totalPriceSlice from '../_slices/totalPrice';
import isOpenLoginRequiredModalSlice from '../_slices/isOpenLoginRequiredModal';
import redirectUrlSlice from '../_slices/redirectUrl';
import isLoginSlice from '../_slices/isLogin';

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
    paymentMethod: paymentMethodSlice,
    reserveInfo: reserveInfoSlice,
    profile: profileStateSlice,
    isAllChecked: isAllCheckedSlice,
    totalPrice: totalPriceSlice,
    isOpenLoginRequiredModal: isOpenLoginRequiredModalSlice,
    redirectUrl: redirectUrlSlice,
    isLogin: isLoginSlice,
  },
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
