import axios from 'axios';
import { FieldValues } from 'react-hook-form';
import { axiosInstance } from '../../_utils/axiosInstance';

export const signin = async (signinInfo: FieldValues) => {
  try {
    const response = await axiosInstance.post(`sign/sign-in`, signinInfo);
    if (response && response.status === 200) {
      window.localStorage.setItem('userId', response.data.result.userId);
      return null;
    }
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data.error;
    }
  }
};
