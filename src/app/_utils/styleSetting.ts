import { createSlice } from '@reduxjs/toolkit';

export interface InitialStateType {
  id: number;
  type: string;
}

interface StyleSettingType {
  select: {
    [key: string]: InitialStateType[];
    stay: InitialStateType[];
    facilities: InitialStateType[];
    prices: InitialStateType[];
    theme: InitialStateType[];
    trip: InitialStateType[];
  };
}

const initialState: StyleSettingType = {
  select: { stay: [], facilities: [], theme: [], trip: [], prices: [] },
};

export const styleSettingSlice = createSlice({
  name: 'styleSetting',
  initialState,
  reducers: {
    setSelect: (state, action) => {
      state.select[action.payload.types].push(action.payload.list);
    },
    setResetAll: (state) => {
      state.select.facilities = [];
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
