import { CampZoneForSearch } from '../(header)/search/page';

function createMapPosition(campPlaceData: CampZoneForSearch[]) {
  return campPlaceData?.map((data) => {
    const { lat, lng } = data;
   
    return {
      title: data.name,
      latlng: new window.kakao.maps.LatLng(Number(lng), Number(lat)),
      imgUrl: data.campImage,
      price: data.minimumAmount,
      address: data.address,
    };
  });
}

export default createMapPosition;
