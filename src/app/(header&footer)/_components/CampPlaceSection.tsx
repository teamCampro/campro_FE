'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CampPlaceList from './CampPlaceList';

export interface CampPlaceMockData {
  id: number;
  placeName: string;
  price: number;
  address: string;
  imgUrl: string;
}

type CampZone = {
  id: number;
  name: string;
  address: string;
  campImage: string;
  minimumAmount: number;
  keyword: string;
};

interface CampZoneData {
  result: {
    recommendList: CampZone[];
    popularList: CampZone[];
    recentList: CampZone[];
  };
}

export interface CampPlaceRawData {
  id: number;
  type: string;
  result: CampPlaceMockData[];
  data: CampZone[];
}

function CampPlaceSection({ data }: { data: CampZoneData }) {
  const popularList = data.result.popularList;
  const recommendList = data.result.recommendList;
  const recentList = data.result.recentList;
  const campPlaces = [recommendList, popularList, recentList];
  return (
    <div className='flex max-w-1440pxr flex-col gap-28pxr '>
      {campPlaces.map((item, index) => (
        <div key={index} className='flex flex-col gap-28pxr'>
          <CampPlaceList campPlaces={item} type={index} />
        </div>
      ))}
    </div>
  );
}

export default CampPlaceSection;
