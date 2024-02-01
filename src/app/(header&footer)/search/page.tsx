'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

import {
  CampSearchList,
  SearchPagination,
  SortDropdown,
} from '@/components/index';
import { CampPlaceMockData } from '../_components/CampPlaceSection';
interface campMapMockData {
  result: CampPlaceMockData[];
}
function MapPage() {
  const [campPlaces, setCampPlaces] = useState<CampPlaceMockData[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const mapBasis = isExpanded
    ? 'hidden'
    : 'basis-424pxr desktop1440:flex-grow-3 mobile:hidden';

  useEffect(() => {
    const getCampPlace = async () => {
      try {
        const response = await axios.get<campMapMockData>(
          `/data/campPlaceForMapMockData.json`,
        );
        setCampPlaces(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };
    getCampPlace();
  }, []);

  return (
    <>
      <button
        className='absolute left-0pxr top-0pxr'
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        토글
      </button>
      <SortDropdown />
      <div className='flex-center'>
        <CampSearchList campPlaces={campPlaces} isExpanded={isExpanded} />
        <div
          className={`${mapBasis} desktop1440:basis-664pxr shrink-0 desktop:grow-1`}
        >
          지도
        </div>
      </div>
      <SearchPagination />
    </>
  );
}

export default MapPage;
