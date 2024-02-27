import { SiteInputType } from '../../(owner)/owner/site-registration/page';
import { axiosInstance } from '../../_utils/axiosInstance';

export const postSiteRegistration = async (siteInfo: SiteInputType) => {
  const {
    siteImages,
    siteName,
    minNights,
    minPeople,
    floorType,
    campingTheme,
    petYN,
    price,
    campingCategory,
    maxParking,
    siteSize,
    checkInTime,
    checkOutTime,
    options,
  } = siteInfo;

  try {
    const response = await axiosInstance.post(
      `owner/camping-zone-site/register`,
      {
        campingZoneId: 1,
        siteImages,
        name: siteName,
        minNights,
        minPeople,
        floorType,
        petYN,
        price,
        theme: campingTheme,
        campingType: campingCategory,
        maxParking,
        siteSize,
        checkInTime,
        checkOutTime,
        options,
      },
    );
    if (response.status === 200) {
      const { data } = response;
      window.location.href = '/owner';
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
