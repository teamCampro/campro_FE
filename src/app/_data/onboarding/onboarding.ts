import { axiosInstance } from '../../_utils/axiosInstance';

interface OnboardingType {
  userId: number;
  onboardingKeyword: string[];
}

const postOnboardingResult = async (
  userId: number,
  onboardingKeyword: string[],
) => {
  try {
    const result = {
      userId,
      onboardingKeyword,
    };

    const response = await axiosInstance.patch(`user/onboarding`, {
      userId,
      onboardingKeyword,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export default postOnboardingResult;
