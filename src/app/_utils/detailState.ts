import { createSlice } from '@reduxjs/toolkit';

export const detailTableSlice = createSlice({
  name: 'detailTable',
  initialState: [
    { id: 1, type: '숙박 유형', isDone: false },
    { id: 2, type: '시설', isDone: false },
    { id: 3, type: '가격', isDone: false },
    { id: 4, type: '테마', isDone: false },
    { id: 5, type: '여행 타입', isDone: false },
  ],
  reducers: {
    setDetailState: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          // 선택된 항목의 isDone 상태를 토글
          return { ...item, isDone: !item.isDone };
        } else if (item.isDone) {
          // 다른 항목이 isDone 상태인 경우, 이를 false로 설정
          return { ...item, isDone: false };
        }
        return item;
      });
    },
  },
});

export const { setDetailState } = detailTableSlice.actions;
export default detailTableSlice.reducer;
