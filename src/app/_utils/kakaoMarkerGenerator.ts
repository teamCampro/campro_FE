import createCustomOverlay from './createCustomOverlay';
import createMapPosition from './createMapPosition';
import createMarkerImage from './createMarkerImage';
import createOverlayElement from './createOverlayElement';
import './kakaoMarkerGenerator.css';
import { CampZoneForSearch } from '../(header)/search/page';

interface LocationType {
  lat: number;
  lng: number;
}

export interface CampPlaceType {
  id: number;
  placeName: string;
  price: number;
  address: string;
  imgUrl: string;
  location: LocationType;
}

interface Props {
  map: kakao.maps.Map;
  campPlaceData: CampZoneForSearch[];
  prevMarkers: kakao.maps.Marker[];
  handlePrevMarker: (marker: kakao.maps.Marker[]) => void;
}

function kakaoMarkerGenerator({
  map,
  campPlaceData,
  prevMarkers,
  handlePrevMarker,
}: Props) {
  prevMarkers.forEach((marker) => {
    marker.setMap(null);
  });

  handlePrevMarker([]);

  if (map && campPlaceData && campPlaceData.length > 0) {
    const positions = createMapPosition(campPlaceData);

    let selectedMarker: kakao.maps.Marker | null = null;

    if (positions) {
      let selectedOverlay: kakao.maps.CustomOverlay | null = null;
      for (let i = 0; i < positions.length; i++) {
        const markerImage = createMarkerImage({
          src: '/svgs/markerGray.svg',
          size: { width: 19, height: 25 },
        });

        const clickedMarkerImage = createMarkerImage({
          src: '/svgs/markerGreen.svg',
          size: { width: 19, height: 25 },
        });

        const marker = new kakao.maps.Marker({
          map: map,
          position: positions[i].latlng,
          title: positions[i].title,
          image: markerImage,
          clickable: true,
        });

        handlePrevMarker([marker]);

        const overlayElement = createOverlayElement(positions[i]);

        const overlay = createCustomOverlay({
          marker,
          map,
          content: overlayElement,
        });

        overlay.setMap(null);

        const closeOverlay = () => {
          overlay.setMap(null);
        };

        kakao.maps.event.addListener(marker, 'click', () => {
          const isSelectedOverlay = selectedOverlay !== overlay;
          const isSelectedMarkerChanged =
            !selectedMarker || selectedMarker !== marker;

          if (isSelectedOverlay) selectedOverlay?.setMap(null);

          overlay.setMap(map);

          if (isSelectedMarkerChanged) {
            !!selectedMarker && selectedMarker.setImage(markerImage);
            !!selectedMarker && selectedMarker.setZIndex(0);
            marker.setImage(clickedMarkerImage);
          }
          selectedMarker = marker;
          selectedOverlay = overlay;
          if (selectedMarker) {
            selectedMarker.setZIndex(1);
          }
        });

        kakao.maps.event.addListener(map, 'click', () => {
          if (selectedMarker) {
            !!selectedMarker && selectedMarker.setImage(markerImage);
          }

          selectedMarker = null;
          closeOverlay();
        });
      }
    }
  }
}

export default kakaoMarkerGenerator;
