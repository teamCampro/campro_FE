'use client';

import { useEffect, useRef, useState } from 'react';
import createMarkerImage from '../../_utils/createMarkerImage';

interface KakaoMap {
  maps: {
    Map: new (
      container: HTMLElement,
      options: {
        center: any;
        level: number;
      },
    ) => any;
    LatLng: new (lat: number, lng: number) => any;
    services: {
      Geocoder: new (
        result: number,
        status: number,
      ) => kakao.maps.services.Geocoder;
      Status: { [key: string]: any };
    };
  };
}

declare global {
  interface Window {
    kakao: KakaoMap;
  }
}

interface MinikakaoMapType {
  location: string;
  size: string;
  isClose?: boolean;
}

interface SIZE_LISTType {
  [key: string]: string;
}

const SIZE_LIST: SIZE_LISTType = {
  sm: 'h-135pxr w-full',
  modal: 'w-full h-884pxr tabletMiddleMin:h-602pxr tablet1079:h-540pxr',
};

function MinikakaoMap({ location, size, isClose }: MinikakaoMapType) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.kakao) return;
    const { kakao } = window;

    window.kakao.maps.load(() => {
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };

      if (!mapRef.current) return;
      const kakaomap = new kakao.maps.Map(mapRef.current, options); //지도 생성 및 객체 리턴
      setMap(kakaomap);

      if (!kakaomap) return;

      // 주소-좌표 변환 객체를 생성합니다
      const geocoder = new kakao.maps.services.Geocoder();
      /* if (!geocoder) return; */
      // 주소로 좌표를 검색합니다

      geocoder.addressSearch(location, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(
            parseFloat(result[0].y),
            parseFloat(result[0].x),
          );

          const clickedMarkerImage = createMarkerImage({
            src: '/svgs/markerGreen.svg',
            size: { width: 19, height: 25 },
          });

          // 결과값으로 받은 위치를 마커로 표시합니다
          const marker = new kakao.maps.Marker({
            map: kakaomap,
            position: coords,
            image: clickedMarkerImage,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          /* const infowindow = new kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">우리집</div>',
            });
            infowindow.open(kakaomap, marker); */

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          kakaomap.setCenter(coords);
        }
      });
    });
  }, [isClose, location]);

  useEffect(() => {
    if (!map) return;
    map.relayout();
  }, [map, isClose]);

  return (
    <div>
      <div
        ref={mapRef}
        id='map'
        className={`${size === 'modal' ? 'rounded-b-xl' : 'rounded-t-xl'} ${SIZE_LIST[size]}`}
      ></div>
    </div>
  );
}

export default MinikakaoMap;
