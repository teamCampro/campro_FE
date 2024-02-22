import { axiosInstance } from '../../_utils/axiosInstance';

const getReserveList = async (id: string, status: string = 'all') => {
  try {
    const response = await axiosInstance.get(
      status === 'all'
        ? `user/${id}/reservation/list`
        : `user/${id}/reservation/list?status=${status}`,
    );
    return response.data.result.reservationList;
  } catch (error) {
    console.error(error);
  }
};

export default getReserveList;
