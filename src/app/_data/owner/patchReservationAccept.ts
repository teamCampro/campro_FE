import { axiosInstance } from '../../_utils/axiosInstance';

const patchReservationAccept = async (reservId: number) => {
  try {
    const response = await axiosInstance.patch(
      `owner/reservation-confirm/accept/${reservId}`,
    );

    if (response.status === 200) {
      const { data } = response;

      return data.result;
    }
  } catch (error) {
    console.error(error);
  }
};

export default patchReservationAccept;
