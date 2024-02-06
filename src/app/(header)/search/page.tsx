'use client';

import { Suspense, useEffect, useState } from 'react';
import usePagination from '@/hooks/usePagination';
import axios from 'axios';
import KakaoMap from './_components/KakaoMap';
import kakaoMarkerGenerator, {
  CampPlaceType,
} from '../../_utils/kakaoMarkerGenerator';
import {
  Button,
  CampSearchList,
  MapSizeButtons,
  SearchBar,
  SearchFilter,
  SearchPagination,
  SortDropdown,
} from '@/components/index';
import { usePathname } from 'next/navigation';

interface DataType {
  result: CampPlaceType[];
}

export type MapSizeType = 'half' | 'map' | 'list';

function Page() {
  const pathName = usePathname();
  const isSearch = pathName.includes('search');
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [campPlaceData, setCampPlaceData] = useState<CampPlaceType[]>();
  const [mapSize, setMapSize] = useState<MapSizeType>('half');
  const { currentPage, totalItems, updateCurrentPage, updateTotalItems } =
    usePagination({});

  const mapBasis = {
    half: {
      map: 'basis-424pxr desktop1440:flex-grow-3 mobile:hidden',
      list: 'basis-696pxr max-w-696pxr desktop1920:max-w-1132pxr desktop:grid-cols-2-col-340 desktop1440:grid-cols-auto-fill-min-340 desktop1440:flex-grow-7 desktop1920:grid-cols-3-col-340 desktop1440:max-w-1052pxr',
    },
    map: { map: 'flex-1 w-full', list: 'hidden' },
    list: {
      map: 'hidden',
      list: 'tablet1002:grid-cols-3-col-184 tablet1002:max-w-1002pxr tablet1199:grid-cols-3-col-184 max-w-1132pxr desktop1920:grid-cols-5-col-340 desktop1440:max-w-1132pxr desktop:grid-cols-3-col-340 desktop1440:grid-cols-3-col-340 desktop1920:max-w-1845pxr',
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
            <SearchBar page='search' />
          </Suspense>
        </div>
        <div className='mobile:flex-center z-[99] flex gap-12pxr tabletMin:w-full'>
          <SearchFilter />
        </div>
      </div>
      <div className=' flex-center searchPageOverFlow h-full w-full'>
        {mapSize !== 'map' && (
          <div className='scrollbar-hide pt-16px pb-40px relative flex h-full w-full flex-col gap-24pxr overflow-y-scroll px-40pxr mobile:p-16pxr desktop:w-auto wide:w-auto'>
            <div className='flex items-center justify-around'>
              <h3 className='text-black font-title1-semibold mobile:font-body1-medium'>
                전체 {campPlaceData?.length || 0}
              </h3>
              <SortDropdown />
            </div>
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
        )}
        <div
          className={`relative h-full shrink-0 grow-1 desktop1440:basis-649pxr desktop1920:basis-793pxr ${mapBasis[mapSize].map}`}
        >
          <KakaoMap map={map} setMap={setKakaoMap} mapSize={mapSize} />
        </div>
      </div>
      <Button.MapFloating onMapResize={handleMapSize} />
    </>
  );
}

export default Page;
