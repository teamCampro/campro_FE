'use client';
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerLocationInput from '../../../_components/OwnerLocationInput';
import createMarkerImage from '@/src/app/_utils/createMarkerImage';
import useDebounce from '@/hooks/useDebounce';
import KakaoMap from '@/src/app/(header)/search/_components/KakaoMap';
import { handleOwnerInputDefaultValue } from '../../../_utils/inputValueStorageHandler';
import OwnerAddTour from '../../../_components/OwnerAddTour';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [tourPlace, setTourPlace] = useState<string>('');
  const [tourPlaces, setTourPlaces] = useState<string[]>([]);
  const prevMarkerRef = useRef<kakao.maps.Marker | null>(null);

  const debouncedAddress = useDebounce(address, 500);

  const setKakaoMap = (map: kakao.maps.Map) => {
    setMap(map);
    map.setDraggable(false);
    map.setZoomable(false);
  };

  const handleAddressChange = useCallback((address: string) => {
    setAddress(address);
    localStorage.setItem('location', address);
  }, []);

  const callback = useCallback(
    (result: Result[], status: kakao.maps.services.Status) => {
      const isReadyMap = status === kakao.maps.services.Status.OK && map;

      if (isReadyMap) {
        const { x, y, address } = result[0];
        const { region_1depth_name, region_2depth_name } = address;
        localStorage.setItem(
          'displayAddress',
          `${region_1depth_name} ${region_2depth_name}`,
        );
        const coords = new kakao.maps.LatLng(Number(y), Number(x));
        localStorage.setItem('lat', y);
        localStorage.setItem('lng', x);
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

  const handleClickAddTourPlaceButton = () => {
    if (typeof window === 'undefined') return;

    const MAX_TOUR_PLACE_LENGTH = 15;

    if (tourPlace.length >= MAX_TOUR_PLACE_LENGTH)
      return toast.error('15자 이하로 작성해 주세요.');

    if (!tourPlace || tourPlaces.some((tour) => tourPlace === tour)) {
      return toast.error(
        !tourPlace
          ? '추가 옵션 항목을 모두 채워주세요!'
          : '중복된 옵션입니다. 제거 후 추가해 주세요.',
      );
    }
    setTourPlaces((prevTourPlaces) => [...prevTourPlaces, tourPlace]);
  };

  const handleChangeTourPlaceInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setTourPlace(inputValue);
  };

  const handleClickRemoveTourPlaceButton = (tourPlaceName: string) => {
    setTourPlaces(tourPlaces.filter((tour) => tour !== tourPlaceName));
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (tourPlaces.length !== 0) {
      localStorage.setItem('tourPlaces', JSON.stringify(tourPlaces));
    }
  }, [tourPlaces]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const getTourPlaces = localStorage.getItem('tourPlaces');

    if (getTourPlaces) {
      setTourPlaces(JSON.parse(getTourPlaces));
    }
  }, []);

  useEffect(() => {
    kakao.maps.load(() => {
      const geo = new kakao.maps.services.Geocoder();
      setGeocoder(geo);
    });
  }, []);

  useEffect(() => {
    map?.setLevel(4);
    if (geocoder !== null) {
      const localLocation = localStorage.getItem('location');

      if (localLocation) {
        setAddress(localLocation);
        geocoder.addressSearch(debouncedAddress, callback);
      }
    }
  }, [geocoder, callback, debouncedAddress]);

  return (
    <div className='flex flex-col items-center gap-60pxr'>
      <OwnerTitle>캠핑장 위치는 어디인가요?</OwnerTitle>
      <div className='relative flex h-650pxr w-800pxr flex-col gap-30pxr'>
        <KakaoMap map={map} setMap={setKakaoMap} isZoomButtonShadow={true} />
        {map && (
          <div className='pl-82pxr'>
            <OwnerLocationInput
              setAddress={handleAddressChange}
              defaultValue={handleOwnerInputDefaultValue}
            />
          </div>
        )}
      </div>
      <div className='h-[140%]'>
        <OwnerAddTour
          onChange={handleChangeTourPlaceInput}
          onClickAddButton={handleClickAddTourPlaceButton}
          onClickRemoveButton={handleClickRemoveTourPlaceButton}
          tourPlaces={tourPlaces}
        />
      </div>
      <ToastContainer
        className='!w-400pxr'
        toastClassName='w-400pxr text-center'
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
}

export default LocationPage;
