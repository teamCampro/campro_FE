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
    setReset: (state, action) => {},
  },
});

export const { setSelect, setDelete, setReset } = styleSettingSlice.actions;
export default styleSettingSlice.reducer;
