'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import KakaoMap from '../_components/KakaoMap';
import kakaoMarkerGenerator, {
  CampPlaceType,
} from '../../_utils/kakaoMarkerGenerator';
import {
  CampSearchList,
  SearchPagination,
  SortDropdown,
} from '@/components/index';

interface DataType {
  result: CampPlaceType[];
}

export type MapSizeType = 'half' | 'map' | 'list';

function SearchPage() {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [campPlaceData, setCampPlaceData] = useState<CampPlaceType[]>();
  const [mapSize, setMapSize] = useState<MapSizeType>('half');

  const mapBasis = {
    half: {
      map: 'basis-424pxr desktop1440:flex-grow-3 mobile:hidden',
      list: 'basis-776pxr max-w-776pxr desktop1920:max-w-1132pxr desktop:grid-cols-2-col-340 desktop1440:grid-cols-auto-fill-min-340 desktop1920:grid-cols-3-col-340',
    },
    map: { map: 'flex-1 w-full', list: 'hidden' },
    list: {
      map: 'hidden',
      list: 'tablet1002:grid-cols-2-col-340 tablet1002:max-w-777pxr tablet1199:grid-cols-3-col-184 max-w-1132pxr desktop1920:grid-cols-5-col-340 desktop1440:max-w-1132pxr desktop:grid-cols-3-col-340 desktop1440:grid-cols-3-col-340 desktop1920:max-w-1845pxr',
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
    };

    fetch();
  }, []);

  useEffect(() => {
    if (map && campPlaceData) {
      kakaoMarkerGenerator({ map, campPlaceData });
    }
  }, [map, campPlaceData]);
  return (
    <>
      <button
        className='absolute left-0pxr top-0pxr'
        onClick={() => handleMapSize('map')}
      >
        펼치기
      </button>
      <div className='flex-center h-full w-full'>
        {mapSize !== 'map' && (
          <div className='scrollbar-hide pt-16px pb-40px relative flex h-full flex-col gap-24pxr overflow-y-scroll px-40pxr mobile:p-16pxr'>
            <div className='flex items-center justify-around'>
              <h3 className='text-black font-title1-semibold mobile:font-body1-medium'>
                전체 {campPlaceData?.length || 0}
              </h3>
              <SortDropdown />
            </div>

            {campPlaceData && (
              <CampSearchList
                campPlaces={campPlaceData}
                gridColumns={mapBasis[mapSize].list}
              />
            )}
            <SearchPagination currentPage={1} totalItems={50} onUpdatePage={(pageNumber) => null}/>
          </div>
        )}
        <div
          className={`grow-1 desktop1440:basis-664pxr desktop1920:basis-793pxr relative h-full shrink-0 ${mapBasis[mapSize].map}`}
        >
          <KakaoMap
            map={map}
            setMap={setKakaoMap}
            toggleHalfScreen={handleMapSize}
            mapSize={mapSize}
          />
        </div>
      </div>
    </>
  );
}

export default SearchPage;