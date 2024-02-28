import { axiosInstance } from '../../_utils/axiosInstance';

export const getMainCampList = async (userId: string | null = null) => {
  const loginState = {
    login: `camping-zone/main-list?userId=${userId}`,
    nonmember: `camping-zone/main-list`,
  };
  try {
    const response = await axiosInstance.get(
      userId ? loginState.login : loginState.nonmember,
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
