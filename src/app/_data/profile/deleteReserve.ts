import { axiosInstance } from '../../_utils/axiosInstance';

const deleteReserve = async (userId: number, reservationId: number) => {
  try {
    await axiosInstance.patch(
      `user/${userId}/reservation/${reservationId}/cancel`,
    );
  } catch (error) {
    console.error(error);
  }
};

export default deleteReserve;
