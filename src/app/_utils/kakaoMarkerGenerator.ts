import './kakaoMarkerGenerator.css';

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
        address: data.address,
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

        const overlayTitle = document.createElement('h1');
        overlayTitle.className = 'overlayTitle';
        overlayTitle.innerHTML = positions[i].title;
        overlayContent.appendChild(overlayTitle);

        const address = document.createElement('span');
        address.className = 'overlayAddress';
        address.innerHTML = positions[i].address;
        overlayContent.appendChild(address);

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
          overlay.setMap(map);
        });
        kakao.maps.event.addListener(map, 'click', (event) => {
          closeOverlay();
        });
      }
    }
  }
}

export default kakaoMarkerGenerator;
