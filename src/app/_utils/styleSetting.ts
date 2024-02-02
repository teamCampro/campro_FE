import { createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
  id: number;
  type: string;
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

export const styleSettingSlice = createSlice({
  name: 'styleSetting',
  initialState,
  reducers: {
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
