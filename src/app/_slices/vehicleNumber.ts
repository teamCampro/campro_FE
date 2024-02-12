import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

export const vehicleNumberSlice = createSlice({
  name: 'vehicleNumber',
  initialState,
  reducers: {
    addVehicle: (state, action) => {
      state.push(action.payload);
    },
    deleteVehicle: (state, action) => {
      return state.filter((vehicle) => vehicle !== action.payload);
    },
  },
});

export const { addVehicle, deleteVehicle } = vehicleNumberSlice.actions;
export default vehicleNumberSlice.reducer;
