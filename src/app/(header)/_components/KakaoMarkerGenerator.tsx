import React, { useEffect } from 'react';

interface LocationType {
  lat: number;
  lng: number;
}

interface CampPlaceType {
  id: number;
  placeName: string;
  price: number;
  address: string;
  imgUrl: string;
  location: LocationType;
}

interface DataType {
  result: CampPlaceType[];
}

interface Props {
  map: kakao.maps.Map;
  campPlaceData: CampPlaceType[];
}

function KakaoMarkerGenerator({ map, campPlaceData }: Props) {
  useEffect(() => {
    if (map) {
      const positions = campPlaceData?.map((data) => {
        const { location } = data;

        return {
          title: data.placeName,
          latlng: new window.kakao.maps.LatLng(location.lat, location.lng),
        };
      });

      if (positions) {
        const imageSrc =
          'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

        for (let i = 0; i < positions.length; i++) {
          const imageSize = new window.kakao.maps.Size(24, 35);

          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
          );

          const marker = new window.kakao.maps.Marker({
            map: map,
            position: positions[i].latlng,
            title: positions[i].title,
            image: markerImage,
          });

          marker.setMap(map);
        }
      }
    }
  }, [campPlaceData, map]);

  return <div>KakaoMarkerGenerator</div>;
}

export default KakaoMarkerGenerator;
