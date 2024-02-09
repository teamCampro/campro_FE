import { createSlice } from '@reduxjs/toolkit';

export const detailTableSlice = createSlice({
  name: 'detailTable',
  initialState: [
    { id: 1, type: '숙박 유형', name: 'stay', isDone: false, isCheck: false },
    { id: 2, type: '시설', name: 'home', isDone: false, isCheck: false },
    { id: 3, type: '가격', name: 'prices', isDone: false, isCheck: false },
    { id: 4, type: '테마', name: 'theme', isDone: false, isCheck: false },
    { id: 5, type: '여행 타입', name: 'trip', isDone: false, isCheck: false },
  ],
  reducers: {
    setDetailState: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else if (item.isDone) {
          return { ...item, isDone: false };
        }
        return item;
      });
    },
    setIsCheck: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isCheck: true };
        }
        return item;
      });
    },
    setClose: (state, action) => {
      return state.map((item) => {
        return { ...item, isDone: action.payload };
      });
    },
  },
});

export const { setDetailState, setClose, setIsCheck } =
  detailTableSlice.actions;
export default detailTableSlice.reducer;
