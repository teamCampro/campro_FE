import Button from '@/components/Button';
import { IconMapMinus, IconMapPlus } from '@/public/svgs';
import React, { useEffect, useRef, useState } from 'react';
import { MapSizeType } from '../search/page';

interface Props {
  map: kakao.maps.Map | null;
  setMap: (map: kakao.maps.Map) => void;
  toggleHalfScreen: (mapSize: MapSizeType) => void;
  mapSize: MapSizeType;
}

function KakaoMap({ map, setMap, toggleHalfScreen, mapSize }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);

  const handleClickZoomIn = () => {
    if (map) {
      const level = map.getLevel();
      map.setLevel(level - 1);
    }
  };

  const handleClickZoomOut = () => {
    if (map) {
      const level = map.getLevel();
      map.setLevel(level + 1);
    }
  };

  useEffect(() => {
    if (!map) {
      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(
            37.561110808242056,
            126.9831268386891,
          ),
          level: 3,
        };
        if (!mapRef.current) return;
        const map = new window.kakao.maps.Map(mapRef.current, options);
        setMap(map);
      });
    }
  }, [map, setMap]);

  useEffect(() => {
    if (!map) return;
    map.relayout();
  }, [mapSize, map]);

  return (
    <div ref={mapRef} className='h-full w-full'>
      {map && (
        <>
          {mapSize === 'half' ? (
            <div className='flex flex-col'>
              <Button.RoundArrow
                onClick={() => toggleHalfScreen('map')}
                custom='top-64pxr'
              >
                펼치기
              </Button.RoundArrow>
              <Button.RoundArrow onClick={() => toggleHalfScreen('list')}>
                접기
              </Button.RoundArrow>
            </div>
          ) : (
            <div className='flex flex-col'>
              <Button.RoundArrow
                onClick={() => toggleHalfScreen('half')}
                custom='top-64pxr'
              >
                반반
              </Button.RoundArrow>
              <Button.RoundArrow onClick={() => toggleHalfScreen('list')}>
                접기
              </Button.RoundArrow>
            </div>
          )}

          <div className='absolute right-26pxr top-16pxr flex flex-col'>
            <button
              className='flex-center z-50 rounded-tl-xl rounded-tr-xl border-l border-r border-t border-gray-300 bg-white px-16pxr py-12pxr'
              onClick={handleClickZoomIn}
            >
              <IconMapPlus />
            </button>
            <button
              className='flex-center z-50 rounded-bl-xl rounded-br-xl border border-gray-300 bg-white px-16pxr py-12pxr'
              onClick={handleClickZoomOut}
            >
              <IconMapMinus />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default KakaoMap;
