import axios from 'axios';
import { axiosInstance } from '../../_utils/axiosInstance';

export const getMainCampList = async () => {
  try {
    const response = await axiosInstance.get(`camping-zone/main-list`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
