import { IconMapMinus, IconMapPlus } from '@/public/svgs';
import { useEffect, useRef } from 'react';
import { MapSizeType } from '../page';
import { CampPlaceType } from '@/src/app/_utils/kakaoMarkerGenerator';
import { useSearchParams } from 'next/navigation';

interface Props {
  map: kakao.maps.Map | null;
  setMap: (map: kakao.maps.Map) => void;
  mapSize: MapSizeType;
  campPlaceData: CampPlaceType[];
}

function KakaoMap({ map, setMap, mapSize, campPlaceData }: Props) {
  const params = useSearchParams();
  const mapRef = useRef<HTMLDivElement>(null);
  const isParamLocationAll = params.get('location') === '전체';

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
      if (!mapRef.current) return;
      const options = {
        center: new kakao.maps.LatLng(36.7140176374004, 128.10524294165157),
        level: 13,
      };
      const map = new kakao.maps.Map(mapRef.current, options);
      setMap(map);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!map) return;
    map.relayout();

    if (campPlaceData.length !== 0) {
      map.setCenter(
        new kakao.maps.LatLng(
          isParamLocationAll ? 36.7140176374004 : campPlaceData[0].location.lat,
          isParamLocationAll
            ? 128.10524294165157
            : campPlaceData[0].location.lng,
        ),
      );
      map.setLevel(isParamLocationAll ? 13 : 8);
    }
  }, [isParamLocationAll, campPlaceData, mapSize, map]);

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
