'use client';

import SearchBarForSearch from '@/components/SearchBar/SearchBarForSearch';
import {
  CampSearchList,
  MapSizeButtons,
  SearchFilter,
  SearchPagination,
  SortDropdown,
} from '@/components/index';
import usePagination from '@/hooks/usePagination';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import kakaoMarkerGenerator, {
  CampPlaceType,
} from '../../_utils/kakaoMarkerGenerator';
import KakaoMap from './_components/KakaoMap';

interface DataType {
  result: CampPlaceType[];
}

export type MapSizeType = 'half' | 'map' | 'list';

function Page() {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [campPlaceData, setCampPlaceData] = useState<CampPlaceType[]>();
  const [mapSize, setMapSize] = useState<MapSizeType>('half');
  const { currentPage, totalItems, updateCurrentPage, updateTotalItems } =
    usePagination({});

  const mapBasis = {
    half: {
      map: 'basis-424pxr desktop1440:flex-grow-3 mobile767:basis-314pxr mobile:hidden mobile767:block',
      list: 'desktop:grid-cols-2-col-340 desktop1440:grid-cols-auto-fill-min-340 desktop1920:grid-cols-3-col-340 ',
    },
    map: { map: 'flex-1 w-full', list: 'hidden' },
    list: {
      map: 'hidden',
      list: 'w-full tablet1002:grid-cols-3-col-184 tablet1002:max-w-1002pxr tablet1199:grid-cols-3-col-184 max-w-1132pxr desktop1920:grid-cols-5-col-340 desktop1440:max-w-1132pxr desktop:grid-cols-3-col-340 desktop1440:grid-cols-3-col-340 desktop1920:max-w-1845pxr mobile:basis-0',
    },
  };

  const setKakaoMap = (map: kakao.maps.Map) => {
    setMap(map);
  };

  const handleMapSize = (size: MapSizeType) => {
    setMapSize(size);
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get<DataType>(
        `data/mapPositionsMockData.json`,
      );

      const { result } = response.data;
      setCampPlaceData(result);
      updateTotalItems(response.data.result.length);
    };

    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (map && campPlaceData) {
      kakaoMarkerGenerator({ map, campPlaceData });
    }
  }, [map, campPlaceData]);

  return (
    <>
      <MapSizeButtons
        handleMapSize={(mapSize: MapSizeType) => handleMapSize(mapSize)}
      />
      <div className='border-bg-gray200 relative z-[99] border-b bg-white px-40pxr pb-28pxr pt-20pxr mobile:flex mobile:p-16pxr'>
        <div className='m-auto w-full max-w-1360pxr'>
          <Suspense>
            <SearchBarForSearch />
          </Suspense>
        </div>
        <div className='mobile:flex-center z-[99] flex gap-12pxr tabletMin:w-full'>
          <SearchFilter />
        </div>
      </div>
      <div className='flex-center searchPageOverFlow h-full w-full'>
        {mapSize !== 'map' && (
          <div
            className={`scrollbar-hide flex h-full pb-40pxr ${mapSize === 'half' ? 'grow-0' : ' grow-0 basis-auto'}  basis-776pxr flex-col gap-24pxr overflow-y-scroll px-40pxr pb-40pxr pt-16pxr mobile:px-16pxr tablet:grow-1 tablet:px-40pxr mobile767:grow-1 mobile767:basis-412pxr tablet1002:basis-420pxr tablet1199:basis-622pxr ${mapSize === 'half' ? 'desktop1440:max-w-1132pxr desktop1440:flex-grow-7 desktop1440:basis-776pxr' : ''}`}
          >
            <div className='flex items-center justify-around'>
              <h3 className='text-black font-title1-semibold mobile:font-body1-semibold'>
                전체 {campPlaceData?.length || 0}
              </h3>
              <SortDropdown />
            </div>
            <div className='flex w-full flex-col gap-48pxr mobile:gap-64pxr tablet:gap-64pxr'>
              {campPlaceData && (
                <CampSearchList
                  currentPage={currentPage}
                  campPlaces={campPlaceData}
                  gridColumns={mapBasis[mapSize].list}
                />
              )}
              <SearchPagination
                currentPage={currentPage}
                totalItems={totalItems}
                onUpdatePage={updateCurrentPage}
              />
            </div>
          </div>
        )}
        <div
          className={`relative h-full shrink-0 grow-1 tablet1002:basis-348pxr tablet1199:basis-381pxr desktop1440:basis-664pxr ${mapBasis[mapSize].map}`}
        >
          <KakaoMap map={map} setMap={setKakaoMap} mapSize={mapSize} />
        </div>
      </div>
    </>
  );
}

export default Page;
