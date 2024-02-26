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
    const { data } = response;
    if (response.status === 200) {
      return data.result;
    }
  } catch (error) {
    console.error(error);
  }
};
