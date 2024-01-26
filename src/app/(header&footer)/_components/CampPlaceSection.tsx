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

export interface CampPlaceRawData {
  id: number;
  type: string;
  result: CampPlaceMockData[];
}

function CampPlaceSection() {
  const [campPlaces, setCampPlaces] = useState<CampPlaceRawData[]>([]);

  useEffect(() => {
    const getCampPlace = async () => {
      try {
        const response = await axios.get<CampPlaceRawData[]>(
          `/data/campPlaceMockData.json`,
        );
        console.log(response.data);
        setCampPlaces(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCampPlace();
  }, []);
  return (
    <div className='flex flex-col gap-28pxr'>
      {campPlaces.map((item) => (
        <div className='flex flex-col gap-28pxr'>
          <div key={item.id} className='flex flex-col gap-28pxr'>
            <CampPlaceList campPlaces={item.result} type={item.type} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CampPlaceSection;
