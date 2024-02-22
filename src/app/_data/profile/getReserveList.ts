import { axiosInstance } from '../../_utils/axiosInstance';

const getReserveList = async (userId: string, status: string = 'all') => {
  try {
    const response = await axiosInstance.get(
      status === 'all'
        ? `user/${userId}/reservation/list`
        : `user/${userId}/reservation/list?status=${status}`,
    );
    return response.data.result.reservationList;
  } catch (error) {
    console.error(error);
  }
};

export default getReserveList;
