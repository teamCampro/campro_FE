import { axiosInstance } from '../../_utils/axiosInstance';

export const getMainCampList = async () => {
  const userId = window.localStorage.getItem('userId');
  const query = userId ? `?userId=${userId}` : '';
  try {
    const response = await axiosInstance.get(`camping-zone/main-list${query}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
