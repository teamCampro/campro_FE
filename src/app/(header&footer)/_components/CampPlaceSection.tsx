'use client';

import CampPlaceList from './CampPlaceList';

type CampZone = {
  id: number;
  name: string;
  displayAddress: string;
  campImage: string;
  minimumAmount: number;
  keyword: string;
};

interface CampZoneData {
  result: {
    recommendList: CampZone[];
    popularList: CampZone[];
    recentList: CampZone[];
    recommendFirstList: CampZone[];
  };
}

function CampPlaceSection({ data }: { data: CampZoneData }) {
  console.log(data);
  if (!data) return;
  const popularList = data.result.popularList;
  const recommendList = data.result.recommendList;
  const recentList = data.result.recentList;
  const recommendFirstList = data.result.recommendFirstList;
  const campPlaces = [
    recommendFirstList,
    recommendList,
    popularList,
    recentList,
  ];
  return (
    <div className='flex max-w-1440pxr flex-col gap-28pxr '>
      {campPlaces.map((item, index) => (
        <div key={index} className='flex flex-col gap-28pxr  '>
          <CampPlaceList campPlaces={item} type={index} />
        </div>
      ))}
    </div>
  );
}

export default CampPlaceSection;
