import { createSlice } from '@reduxjs/toolkit';

export interface InitialStateType {
  id: number;
  type: string;
}

interface StyleSettingType {
  select: {
    [key: string]: InitialStateType[];
    stay: InitialStateType[];
    home: InitialStateType[];
    prices: InitialStateType[];
    theme: InitialStateType[];
    trip: InitialStateType[];
  };
}

const initialState: StyleSettingType = {
  select: { stay: [], home: [], theme: [], trip: [], prices: [] },
};

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
    setResetAll: (state) => {
      state.select.home = [];
      state.select.stay = [];
      state.select.theme = [];
      state.select.prices = [];
      state.select.trip = [];
    },
    setReset: (state, action) => {
      state.select[action.payload] = [];
    },
  },
});

export const { setSelect, setResetAll, setReset } = styleSettingSlice.actions;
export default styleSettingSlice.reducer;

/* setSelect: (state, action) => {
      state.select[action.payload.types].push(action.payload.list);
    }, */
