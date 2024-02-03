interface Props {
  marker: kakao.maps.Marker;
  map: kakao.maps.Map;
  content: string | HTMLElement | undefined;
}

function createCustomOverlay({
  marker,
  map,
  content,
}: Props): kakao.maps.CustomOverlay {
  return new kakao.maps.CustomOverlay({
    content,
    map: map,
    position: marker.getPosition(),
    clickable: true,
  });
}

export default createCustomOverlay;
