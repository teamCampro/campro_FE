import './kakaoMarkerGenerator.css';
import { IconMarkerGray, IconMarkerGreen } from '@/public/svgs';

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
  campPlaceData: CampPlaceType[];
}

function kakaoMarkerGenerator({ map, campPlaceData }: Props) {
  if (map) {
    const positions = campPlaceData?.map((data) => {
      const { location } = data;

      return {
        title: data.placeName,
        latlng: new window.kakao.maps.LatLng(location.lat, location.lng),
        imgUrl: data.imgUrl,
        price: data.price,
        address: data.address,
      };
    });
    let selectedMarker: kakao.maps.Marker | null = null;

    if (positions) {
      const imageSrc = '/svgs/markerGray.svg';
      let selectedOverlay: kakao.maps.CustomOverlay | null = null;
      for (let i = 0; i < positions.length; i++) {
        const imageSize = new window.kakao.maps.Size(19, 25);

        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
        );

        const clickedMarkerImage = new window.kakao.maps.MarkerImage(
          '/svgs/markerGreen.svg',
          imageSize,
        );

        const marker = new window.kakao.maps.Marker({
          map: map,
          position: positions[i].latlng,
          title: positions[i].title,
          image: markerImage,
          clickable: true,
        });

        const overlayWrapper = document.createElement('div');
        overlayWrapper.className = 'overlayWrapper';

        const image = document.createElement('img');
        image.className = 'overlayImage';
        image.src = positions[i].imgUrl;
        overlayWrapper.appendChild(image);

        const overlayContent = document.createElement('div');
        overlayContent.className = 'overlayContent';
        overlayWrapper.appendChild(overlayContent);

        const overlayInfoContainer = document.createElement('div');
        overlayInfoContainer.className = 'overlayInfoContainer';
        overlayContent.appendChild(overlayInfoContainer);

        const overlayTitle = document.createElement('h1');
        overlayTitle.className = 'overlayTitle';
        overlayTitle.innerHTML = positions[i].title;
        overlayInfoContainer.appendChild(overlayTitle);

        const overlayScoreContainer = document.createElement('div');
        overlayScoreContainer.className = 'overlayScoreContainer';
        overlayInfoContainer.appendChild(overlayScoreContainer);

        const overlayScoreImage = document.createElement('img');
        overlayScoreImage.className = 'overlayScoreImage';
        overlayScoreImage.src = '/svgs/score.svg';
        overlayScoreContainer.appendChild(overlayScoreImage);

        const overlayScore = document.createElement('span');
        overlayScore.className = 'overlayScore';
        overlayScore.innerHTML = '4.8점';
        overlayScoreContainer.appendChild(overlayScore);

        const overlayPriceContainer = document.createElement('div');
        overlayPriceContainer.className = 'overlayPriceContainer';
        overlayContent.appendChild(overlayPriceContainer);

        const overlayPrice = document.createElement('p');
        overlayPrice.className = 'overlayPrice';
        overlayPrice.innerHTML = `￦${String(positions[i].price.toLocaleString())}`;
        overlayPriceContainer.appendChild(overlayPrice);

        const overlayPriceDescription = document.createElement('p');
        overlayPriceDescription.className = 'overlayPriceDescription';
        overlayPriceDescription.innerHTML = '원 부터';
        overlayPriceContainer.appendChild(overlayPriceDescription);

        const overlay = new kakao.maps.CustomOverlay({
          content: overlayWrapper,
          map: map,
          position: marker.getPosition(),
          clickable: true,
        });

        overlay.setMap(null);

        const closeOverlay = () => {
          overlay.setMap(null);
        };

        kakao.maps.event.addListener(marker, 'click', () => {
          if (selectedOverlay !== overlay) selectedOverlay?.setMap(null);

          overlay.setMap(map);
          if (!selectedMarker || selectedMarker !== marker) {
            !!selectedMarker && selectedMarker.setImage(markerImage);
            marker.setImage(clickedMarkerImage);
          }
          selectedMarker = marker;
          selectedOverlay = overlay;
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
