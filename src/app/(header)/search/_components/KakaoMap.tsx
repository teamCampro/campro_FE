import { IconMapMinus, IconMapPlus } from '@/public/svgs';
import { useEffect, useRef } from 'react';
import { MapSizeType } from '../page';
import { CampPlaceType } from '@/src/app/_utils/kakaoMarkerGenerator';

interface Props {
  map: kakao.maps.Map | null;
  setMap: (map: kakao.maps.Map) => void;
  mapSize?: MapSizeType;
  isZoomButtonShadow?: boolean;
  campPlaceData?: CampPlaceType[];
}

function KakaoMap({
  map,
  setMap,
  mapSize,
  isZoomButtonShadow = false,
  campPlaceData,
}: Props) {
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

  const dropShadow = isZoomButtonShadow
    ? 'drop-shadow-[0px_10px_10px_rgba(0,0,0,0.25)]'
    : '';

  useEffect(() => {
    kakao.maps.load(() => {
      if (!mapRef.current) return;
      const options = {
        center: new kakao.maps.LatLng(
          campPlaceData ? campPlaceData[0].location.lat : 37.561110808242056,
          campPlaceData ? campPlaceData[0].location.lng : 126.9831268386891,
        ),
        level: campPlaceData ? 8 : 3,
      };
      const map = new kakao.maps.Map(mapRef.current, options);
      setMap(map);
      return;
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campPlaceData]);

  useEffect(() => {
    if (!map) return;
    map.relayout();
  }, [mapSize, map]);

  return (
    <div ref={mapRef} className='h-full w-full'>
      {map && (
        <div className='absolute right-26pxr top-16pxr flex flex-col'>
          <button
            className={`flex-center z-50 rounded-tl-xl rounded-tr-xl border-l border-r border-t border-gray-300 bg-white px-16pxr py-12pxr ${dropShadow}`}
            onClick={handleClickZoomIn}
          >
            <IconMapPlus />
          </button>
          <button
            className={`flex-center z-50 rounded-bl-xl rounded-br-xl border border-gray-300 bg-white px-16pxr py-12pxr ${dropShadow}`}
            onClick={handleClickZoomOut}
          >
            <IconMapMinus />
          </button>
        </div>
      )}
    </div>
  );
}

export default KakaoMap;
