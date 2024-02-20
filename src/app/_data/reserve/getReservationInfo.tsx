import { axiosInstance } from '../../_utils/axiosInstance';

const getReservationInfo = async (id: string) => {
  try {
    const response = await axiosInstance.get(`camping-zone/site/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getReservationInfo;
