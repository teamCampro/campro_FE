import { FieldValues } from 'react-hook-form';
import { axiosInstance } from '../../_utils/axiosInstance';

export const signup = async (signupInfo: FieldValues) => {
  try {
    const response = await axiosInstance.post(`sign/sign-up`, signupInfo);
    if (response && response.status === 200) {
      window.location.href = '/signin';
    }
  } catch (error) {
    console.error(error);
  }
};
