'use client';

import CampPlaceList from './CampPlaceList';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../../_data/sign/getUserInfo';
export type CampZone = {
  id: number;
  name: string;
  displayAddress: string;
  campImage: string;
  minimumAmount: number;
  keyword: string;
};

export interface CampZoneData {
  result: {
    recommendList: CampZone[];
    popularList: CampZone[];
    recentList: CampZone[];
    recommendFirstList: CampZone[];
  };
}
interface UserInfo {
  name: string;
  email: string;
  tel: string;
  role: string;
  nickname: string;
  onboard: string;
}
function CampPlaceSection({ data }: { data: CampZoneData | null }) {
  const { data: userInfo } = useQuery<UserInfo, Error>({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
    refetchOnMount: 'always',
  });

  if (!data) return null;

  const popularList = { type: 'popular', campPlaces: data.result.popularList };
  const recommendList = {
    type: 'recommend',
    campPlaces: data.result.recommendList,
  };

  const recommendListForUser = {
    type: 'recommendForUser',
    campPlaces: data.result.recommendList,
  };
  const recommendListFirstForUser = {
    type: 'recommendFirstForUser',
    campPlaces: data.result.recommendFirstList,
  };
  const recentList = { type: 'recent', campPlaces: data.result.recentList };

  let campPlaces =
    userInfo && data.result.recommendFirstList.length > 0
      ? [
          recommendListForUser,
          recommendListFirstForUser,
          popularList,
          recentList,
        ]
      : [recommendList, popularList, recentList];

  return (
    <div className='flex max-w-1440pxr flex-col gap-28pxr '>
      {campPlaces.map((item, index) => (
        <div key={index} className='flex flex-col gap-28pxr '>
          <CampPlaceList
            campPlaces={item.campPlaces}
            type={item.type}
            userName={userInfo?.nickname}
            onboardName={userInfo?.onboard}
          />
        </div>
      ))}
    </div>
  );
}

export default CampPlaceSection;
