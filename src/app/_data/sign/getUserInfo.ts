import { axiosInstance } from '../../_utils/axiosInstance';

export interface UserInfo {
  name: string;
  email: string;
  phone: string;
  nickname: string;
  role: string;
}

export const getUserInfo = async () => {
  const userId = window.localStorage.getItem('userId');
  try {
    const response = await axiosInstance.get(`user/${userId}`);
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};
