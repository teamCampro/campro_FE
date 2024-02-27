import { axiosInstance } from '../../_utils/axiosInstance';

interface RequestParams {
  ownerId: number;
  reserveId: number;
}

export const getReservationDetail = async ({
  ownerId,
  reserveId,
}: RequestParams) => {
  try {
    const response = await axiosInstance.get(
      `owner/${ownerId}/reservation/${reserveId}`,
    );

    if (response.status === 200) {
      const { data } = response;

      return data.result;
    }
  } catch (error) {
    console.error(error);
  }
};
