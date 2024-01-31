'use client';
import Button from '@/components/Button';
import { IconMapMinus, IconMapPlus } from '@/public/svgs';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

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

function SearchPage() {
  const [campPlaceData, setCampPlaceData] = useState<CampPlaceType[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | undefined>();
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
  }, []);

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

  return (
    <>
      <div ref={mapRef} className='h-screen w-screen'>
        <Button.RoundArrow>접기</Button.RoundArrow>
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
    </>
  );
}

export default SearchPage;
