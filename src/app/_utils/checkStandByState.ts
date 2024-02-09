import { createSlice } from '@reduxjs/toolkit';

export interface InitialStateType {
  id: number;
  type: string;
}

interface CheckStandByType {
  [key: string]: InitialStateType[];
  stay: InitialStateType[];
  home: InitialStateType[];
  prices: InitialStateType[];
  theme: InitialStateType[];
  trip: InitialStateType[];
}

const initialState: CheckStandByType = {
  stay: [],
  home: [],
  prices: [],
  theme: [],
  trip: [],
};

export const checkStandBySlice = createSlice({
  name: 'checkStandBy',
  initialState,
  reducers: {
    setCheckStandBy: (state, action) => {
      state[action.payload.types].push(action.payload.list);
    },
    setDeleteStandBy: (state, action) => {
      state[action.payload.types] = state[action.payload.types].filter(
        (item) => item.id !== action.payload.list.id,
      );
    },
    setResetAllStandBy: (state) => {
      state.home = [];
      state.stay = [];
      state.prices = [];
      state.theme = [];
      state.trip = [];
    },
    setResetStandBy: (state, action) => {
      state[action.payload] = [];
    },
  },
});

export const {
  setCheckStandBy,
  setDeleteStandBy,
  setResetAllStandBy,
  setResetStandBy,
} = checkStandBySlice.actions;
export default checkStandBySlice.reducer;
