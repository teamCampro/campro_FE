'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CampPlaceMockData } from '../_components/CampPlaceSection';
import CampSearchList from '../_components/CampSearchList';
import SortDropdown from '../_components/SortDropdown';
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
          className={`${mapBasis} shrink-0 desktop:grow-1 desktop1440:basis-664pxr`}
        >
          지도
        </div>
      </div>
    </>
  );
}

export default MapPage;
