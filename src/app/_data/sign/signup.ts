import { axiosInstance } from '../../_utils/axiosInstance';
import { SignupInfo } from '@/components/Form/SignUpForm';

export const signup = async (signupInfo: SignupInfo) => {
  try {
    const { email, phone, password, role, nickname } = signupInfo;
    const response = await axiosInstance.post(`sign/sign-up`, {
      email,
      phone,
      password,
      role,
      nickname,
    });
    if (response && response.status === 200) {
      window.location.href = '/signin';
    }
  } catch (error) {
    console.error(error);
  }
};
