import { IconMapMinus, IconMapPlus } from '@/public/svgs';
import { useEffect, useRef } from 'react';
import { MapSizeType } from '../page';
import { CampPlaceType } from '@/src/app/_utils/kakaoMarkerGenerator';

interface Props {
  map: kakao.maps.Map | null;
  setMap: (map: kakao.maps.Map) => void;
  mapSize: MapSizeType;
  campPlaceData: CampPlaceType[];
}

function KakaoMap({ map, setMap, mapSize, campPlaceData }: Props) {
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
    kakao.maps.load(() => {
      if (!mapRef.current || campPlaceData.length === 0) return;
      console.log(campPlaceData[0]);
      const options = {
        center: new kakao.maps.LatLng(
          campPlaceData[0].location.lat,
          campPlaceData[0].location.lng,
        ),
        level: 8,
      };
      const map = new kakao.maps.Map(mapRef.current, options);
      setMap(map);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campPlaceData]);

  useEffect(() => {
    if (!map) return;
    map.relayout();
    console.count('re');
  }, [mapSize, map]);

  return (
    <div ref={mapRef} className='h-full w-full'>
      {map && (
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
      )}
    </div>
  );
}

export default KakaoMap;
