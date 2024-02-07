'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import KakaoMap from '@/src/app/(header)/_components/KakaoMap';
import OwnerLocationInput from '../../../_components/OwnerLocationInput';
import createMarkerImage from '@/src/app/_utils/createMarkerImage';
import useDebounce from '@/hooks/useDebounce';

interface Result {
  address_name: string;
  address_type: 'REGION' | 'ROAD' | 'REGION_ADDR' | 'ROAD_ADDR';
  x: string;
  y: string;
  address: kakao.maps.services.Address;
  road_address: kakao.maps.services.RoadAaddress;
}

function LocationPage() {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [geocoder, setGeocoder] = useState<kakao.maps.services.Geocoder | null>(
    null,
  );
  const [address, setAddress] = useState('');
  const prevMarkerRef = useRef<kakao.maps.Marker | null>(null);

  const debouncedAddress = useDebounce(address, 500);

  const setKakaoMap = (map: kakao.maps.Map) => {
    setMap(map);
  };

  const handleAddressChange = useCallback((address: string) => {
    setAddress(address);
  }, []);

  const callback = useCallback(
    (result: Result[], status: kakao.maps.services.Status) => {
      const isReadyMap = status === kakao.maps.services.Status.OK && map;

      if (isReadyMap) {
        const { x, y } = result[0];
        const coords = new kakao.maps.LatLng(Number(y), Number(x));

        const markerImage = createMarkerImage({
          src: '/svgs/markerGray.svg',
          size: { width: 19, height: 25 },
        });

        const marker = new kakao.maps.Marker({
          map,
          position: coords,
          image: markerImage,
        });

        if (prevMarkerRef && prevMarkerRef.current !== marker) {
          if (prevMarkerRef.current) {
            prevMarkerRef.current.setMap(null);
          }
        }

        prevMarkerRef.current = marker;
        map.setCenter(coords);
      }
    },
    [map, prevMarkerRef],
  );

  useEffect(() => {
    kakao.maps.load(() => {
      const geo = new kakao.maps.services.Geocoder();
      setGeocoder(geo);
    });
  }, []);

  useEffect(() => {
    if (geocoder !== null) {
      geocoder.addressSearch(debouncedAddress, callback);
    }
  }, [geocoder, callback, debouncedAddress]);

  return (
    <div className='flex flex-col items-center gap-60pxr'>
      <OwnerTitle>캠핑장 위치는 어디인가요?</OwnerTitle>
      <div className='relative h-650pxr w-800pxr'>
        <KakaoMap map={map} setMap={setKakaoMap} isZoomButtonShadow={true} />
        {map && (
          <div className='pl-82pxr'>
            <OwnerLocationInput setAddress={handleAddressChange} />
          </div>
        )}
      </div>
    </div>
  );
}

export default LocationPage;
