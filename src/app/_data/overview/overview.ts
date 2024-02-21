import { axiosInstance } from '../../_utils/axiosInstance';

export const getOverview = async (campingZoneId: number) => {
  try {
    const response = await axiosInstance.get(`camping-zone/${campingZoneId}`);

    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};
