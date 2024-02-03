import { createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
  id: number;
  type: string;
  isDone: boolean;
}

interface StyleSettingType {
  select: {
    [key: string]: InitialStateType[];
    stay: InitialStateType[];
    home: InitialStateType[];
    theme: InitialStateType[];
    trip: InitialStateType[];
  };
}

const initialState: StyleSettingType = {
  select: { stay: [], home: [], theme: [], trip: [] },
};

/* const initialState: StyleSettingType = {
  select: {
    stay: [
      { id: 1, type: '텐트', isDone: false },
      { id: 2, type: '카라반', isDone: false },
      { id: 3, type: '글램핑', isDone: false },
      { id: 4, type: '오토캠핑', isDone: false },
      { id: 5, type: '캠프닉', isDone: false },
      { id: 6, type: '키즈 캠핑', isDone: false },
      { id: 7, type: '애견캠핑', isDone: false },
      { id: 8, type: '차박', isDone: false },
    ],
    home: [
      { id: 9, type: '바베큐', isDone: false },
      { id: 10, type: '모닥불', isDone: false },
      { id: 11, type: '매점', isDone: false },
      { id: 12, type: '와이파이', isDone: false },
      { id: 13, type: '에어컨', isDone: false },
      { id: 14, type: '전기장판', isDone: false },
      { id: 15, type: '개인화장실', isDone: false },
      { id: 16, type: '개인샤워실', isDone: false },
    ],
    theme: [
      { id: 17, type: '감성적', isDone: false },
      { id: 18, type: '아늑한', isDone: false },
      { id: 19, type: '활기찬', isDone: false },
      { id: 20, type: '자연적', isDone: false },
    ],
    trip: [
      { id: 21, type: '나홀로', isDone: false },
      { id: 22, type: '연인', isDone: false },
      { id: 23, type: '가족', isDone: false },
      { id: 24, type: '애견동반', isDone: false },
    ],
  },
}; */

export const styleSettingSlice = createSlice({
  name: 'styleSetting',
  initialState,
  reducers: {
    /* setSelect: (state, action) => {
      state.select[action.payload.types] = state.select[
        action.payload.types
      ].map((item) => {
        if (item.id === action.payload.list.id) {
          return { ...item, isDone: !item.isDone };
        } else if (item.isDone) {
          return { ...item, isDone: false };
        }
        return item;
      });
    }, */
    setSelect: (state, action) => {
      state.select[action.payload.types].push(action.payload.list);
    },
    setDelete: (state, action) => {
      state.select[action.payload.types] = state.select[
        action.payload.types
      ].filter((item) => item.id !== action.payload.list.id);
    },
    setResetAll: (state, action) => {
      state.select.home = [];
      state.select.stay = [];
      state.select.theme = [];
      state.select.trip = [];
    },
    setReset: (state, action) => {
      state.select[action.payload] = [];
    },
  },
});

export const { setSelect, setDelete, setResetAll, setReset } =
  styleSettingSlice.actions;
export default styleSettingSlice.reducer;

/* setSelect: (state, action) => {
      state.select[action.payload.types].push(action.payload.list);
    }, */
