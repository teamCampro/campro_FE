import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  theme: string[];
  information: {
    campPlaceName: string;
    phoneNumber: string;
    homepageUrl: string;
    lineIntroduction: string;
  };
  amenities: string[];
  operating_period: {
    operating_period: string[];
    operating_days: string[];
  };
  location: { lat: string; lng: string };
  upload_images: string[];
  introduction: string;
  terms: { informationUse: string; cancellerationRefundPolicy: string };
}

const initialState: InitialState = {
  theme: [],
  information: {
    campPlaceName: '',
    phoneNumber: '',
    homepageUrl: '',
    lineIntroduction: '',
  },
  amenities: [],
  operating_period: { operating_period: [], operating_days: [] },
  location: { lat: '', lng: '' },
  upload_images: [],
  introduction: '',
  terms: { informationUse: '', cancellerationRefundPolicy: '' },
};

const ownerRegistrationSlice = createSlice({
  name: 'ownerRegistration',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme.push(action.payload);
    },
    setDeleteTheme: (state, action) => {
      state.theme = state.theme.filter((item) => action.payload !== item);
    },
  },
});

export const { setTheme, setDeleteTheme } = ownerRegistrationSlice.actions;
export default ownerRegistrationSlice.reducer;
