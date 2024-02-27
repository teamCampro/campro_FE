import { axiosInstance } from '../../_utils/axiosInstance';

export interface OwnerReservation {
  id: number;
  campingZoneImage: string;
  status?:
    | 'RESERVE_WAITING'
    | 'RESERVE_COMPLETE'
    | 'RESERVE_CANCEL'
    | 'SERVICE_COMPLETE';
  siteName: string;
  userName: string;
  stayStartAt: string;
  stayEndAt: string;
}

interface OwnerReservationResponse {
  result: { ownerReservationList: OwnerReservation[] };
}

export const getReservationList = async (ownerId: string) => {
  try {
    const response = await axiosInstance.get<OwnerReservationResponse>(
      `owner/${ownerId}/reservation/list`,
    );

    if (response.status === 200) {
      const { data } = response;

      return data.result;
    }
  } catch (error) {
    console.error(error);
  }
};
