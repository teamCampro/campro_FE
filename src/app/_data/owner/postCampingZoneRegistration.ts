'use client';
import { axiosInstance } from '../../_utils/axiosInstance';

export const postCampingZoneRegistration = async () => {
  try {
    const getLocalStorageMainImage = () => {
      const uploadImages = localStorage.getItem('uploadImages');

      if (uploadImages === null) return '';

      const mainImage = uploadImages ? JSON.parse(uploadImages)[0] : '';

      return mainImage;
    };
    const getLocalStorageSubImages = () => {
      const uploadImages = localStorage.getItem('uploadImages');

      if (uploadImages === null) return [];

      const subImages = JSON.parse(uploadImages).slice(1);

      return subImages;
    };

    const getOnboardingKeywords = () => {
      const environment = localStorage.getItem('environment');
      const amenities = localStorage.getItem('amenities');
      const categories = localStorage.getItem('categories');
      const stayTerm = localStorage.getItem('stayTerm');

      if (
        environment === null ||
        amenities === null ||
        categories === null ||
        stayTerm === null
      )
        return [];

      const parsedEnvironment = JSON.parse(environment);
      const parsedAmenities = JSON.parse(amenities);
      const parsedCategories = JSON.parse(categories);
      const parsedStayTerm = JSON.parse(stayTerm);

      return [
        ...parsedEnvironment,
        ...parsedAmenities,
        ...parsedCategories,
        ...parsedStayTerm,
      ];
    };

    const body = {
      name: localStorage.getItem('campPlaceName'),
      tel: localStorage.getItem('phoneNumber'),
      bossId: localStorage.getItem('userId'),
      bossEmail: localStorage.getItem('email'),
      businessNumber: localStorage.getItem('BusinessRegistrationNumber'),
      tourNumber: localStorage.getItem('TourismBusinessRegistrationNumber'),
      facilities: localStorage.getItem('amenities'),
      address: localStorage.getItem('location'),
      campImage: getLocalStorageMainImage(),
      campSubImages: getLocalStorageSubImages(),
      planImage: localStorage.getItem('uploadSiteImage'),
      intro: localStorage.getItem('introduction'),
      mannerTimeStart: localStorage.getItem('mannerTimeStart'),
      mannerTimeEnd: localStorage.getItem('mannerTimeEnd'),
      openTime: '2개월',
      onboardingKeyword: getOnboardingKeywords(),
      guide: localStorage.getItem('informationUse'),
      refundGuide: localStorage.getItem('cancellationRefundPolicy'),
    };
    const {
      name,
      tel,
      bossId,
      bossEmail,
      businessNumber,
      tourNumber,
      facilities,
      address,
      campImage,
      campSubImages,
      planImage,
      intro,
      mannerTimeEnd,
      mannerTimeStart,
      openTime,
      onboardingKeyword,
      guide,
      refundGuide,
    } = body;
    await axiosInstance.post(`owner/camping-zone/register`, {
      name,
      tel,
      bossId,
      bossEmail,
      businessNumber,
      tourNumber,
      facilities,
      address,
      campImage,
      campSubImages,
      planImage,
      intro,
      mannerTimeEnd,
      mannerTimeStart,
      openTime,
      onboardingKeyword,
      guide,
      refundGuide,
    });
  } catch (error) {
    console.error(error);
  }
};
