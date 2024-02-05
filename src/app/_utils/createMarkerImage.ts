interface SizeProps {
  width: number;
  height: number;
}

interface Props {
  src: string;
  size: SizeProps;
}

function createMarkerImage({ src, size }: Props): kakao.maps.MarkerImage {
  const imageSize = new kakao.maps.Size(size.width, size.height);

  return new kakao.maps.MarkerImage(src, imageSize);
}

export default createMarkerImage;
