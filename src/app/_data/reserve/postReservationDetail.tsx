import { axiosInstance } from '../../_utils/axiosInstance';

interface ReqType {
  campingZoneId: number;
  campingZoneSiteId: number;
  userId: number;
  stayStartAt: string;
  stayEndAt: string;
  adult: number;
  child: number;
  pet: number;
  payMethod: 'NO_BANK_BOOK' | 'CREDIT_CARD' | 'EASY_PAYMENT' | '';
  carInfo: string;
}

const postReservationDetail = async (req: ReqType) => {
  try {
    const response = await axiosInstance.post(
      `camping-zone/site/reservation`,
      req,
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export default postReservationDetail;
