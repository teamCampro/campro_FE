import { createSlice } from '@reduxjs/toolkit';

export const profileStateSlice = createSlice({
  name: 'profileState',
  initialState: [
    { id: 1, list: '예약 내역', link: '/profile/reserveList', isDone: false },
    { id: 2, list: '계정 관리', link: '/profile', isDone: false },
    { id: 3, list: '사장님 전환', link: '/owner', isDone: false },
    { id: 4, list: '설정', link: '/profile/setting', isDone: false },
    { id: 5, list: '로그아웃', isDone: false },
  ],
  reducers: {
    setProfileState: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: true };
        } else if (item.isDone) {
          return { ...item, isDone: false };
        }
        return item;
      });
    },
  },
});

export const { setProfileState } = profileStateSlice.actions;
export default profileStateSlice.reducer;
