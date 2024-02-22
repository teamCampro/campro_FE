import { axiosInstance } from '../../_utils/axiosInstance';

const getOneReserve = async (userId: string, reservationId: number) => {
  try {
    const response = await axiosInstance.get(
      `user/${userId}/reservation/${reservationId}`,
    );
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};

export default getOneReserve;
