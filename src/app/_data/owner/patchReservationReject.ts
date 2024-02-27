import { axiosInstance } from '../../_utils/axiosInstance';

export const patchReservationReject = async (reserveId: number) => {
  try {
    const response = await axiosInstance.patch(
      `owner/reservation-confirm/cancel/${reserveId}`,
    );
    if (response.status === 200) {
      const { data } = response;

      return data.result;
    }
  } catch (error) {
    console.error(error);
  }
};
