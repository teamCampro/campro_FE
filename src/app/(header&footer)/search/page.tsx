'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import usePagination from '@/hooks/usePagination';
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

  const { currentPage, totalItems, updateCurrentPage, updateTotalItems } =
    usePagination({});
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
        updateTotalItems(response.data.result.length);
      } catch (error) {
        console.error(error);
      }
    };
    getCampPlace();
  }, [updateTotalItems]);

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
        <CampSearchList
          campPlaces={campPlaces}
          isExpanded={isExpanded}
          currentPage={currentPage}
        />
        <div
          className={`${mapBasis} shrink-0 desktop:grow-1 desktop1440:basis-664pxr`}
        >
          지도
        </div>
      </div>
      <SearchPagination
        currentPage={currentPage}
        totalItems={totalItems}
        onUpdatePage={updateCurrentPage}
      />
    </>
  );
}

export default MapPage;
