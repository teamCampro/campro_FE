import { SigninInfo } from '@/components/Form/LoginForm';
import { axiosInstance } from '../../_utils/axiosInstance';

export const signin = async (signinInfo: SigninInfo) => {
  const { email, password } = signinInfo;
  try {
    const response = await axiosInstance.post(`sign/sign-in`, {
      email,
      password,
    });
    if (response && response.status === 200) {
      window.location.href = '/';
    }
  } catch (error) {
    console.error(error);
  }
};
