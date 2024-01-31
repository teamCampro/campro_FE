import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../counterSlice';
import detailSlice from '../_utils/detailState';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    detail: detailSlice,
  },
});
export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
