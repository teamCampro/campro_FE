import { axiosInstance } from '../../_utils/axiosInstance';

export const getOwnerInfo = async (ownerId: number) => {
  try {
    const response = await axiosInstance.get(`owner/${ownerId}`);
    if (response.status === 200) {
      const { data } = response;
      return data.result;
    }
  } catch (error) {
    console.error(error);
  }
};
