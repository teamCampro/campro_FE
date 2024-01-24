import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../counterSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
