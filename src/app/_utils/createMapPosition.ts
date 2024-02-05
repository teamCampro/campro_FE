import { CampPlaceType } from './kakaoMarkerGenerator';

function createMapPosition(campPlaceData: CampPlaceType[]) {
  return campPlaceData?.map((data) => {
    const { location } = data;

    return {
      title: data.placeName,
      latlng: new window.kakao.maps.LatLng(location.lat, location.lng),
      imgUrl: data.imgUrl,
      price: data.price,
      address: data.address,
    };
  });
}

export default createMapPosition;
