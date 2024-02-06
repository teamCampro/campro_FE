'use client';

import { useEffect, useRef, useState } from 'react';
import createMarkerImage from '../../_utils/createMarkerImage';

interface KakaoMap {
  // 여기에 kakao 맵 관련 타입들을 정의하세요.
}

declare global {
  interface Window {
    kakao: KakaoMap;
  }
}

function MinikakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.kakao) return;
    const { kakao } = window;

    const container = document.getElementById('map') as HTMLDivElement; //지도를 담을 영역의 DOM 레퍼런스

    window.kakao.maps.load(() => {
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };

      if (!mapRef.current) return;
      const kakaomap = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      setMap(kakaomap);
      console.log(kakaomap);
      console.log(kakao);
      if (!kakaomap) return;

      // 주소-좌표 변환 객체를 생성합니다
      const geocoder = new kakao.maps.services.Geocoder();
      /* if (!geocoder) return; */
      // 주소로 좌표를 검색합니다

      geocoder.addressSearch(
        '달천도담길 3-40',
        function (result: any, status: any) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            const imageSrc =
              'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'; // 마커이미지의 주소입니다
            const imageSize = new kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
            const imageOption = { offset: new kakao.maps.Point(27, 69) };

            const markerImage = new kakao.maps.MarkerImage(
              imageSrc,
              imageSize,
              imageOption,
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
            const infowindow = new kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">우리집</div>',
            });
            infowindow.open(kakaomap, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            kakaomap.setCenter(coords);
          }
        },
      );
    });
    console.log(map);
  }, []);

  useEffect(() => {
    if (!map) return;
    map.relayout();
  }, [map]);

  return (
    <div className='flex-center w-full'>
      <div ref={mapRef} id='map' className='h-400pxr w-500pxr'></div>
    </div>
  );
}

export default MinikakaoMap;
