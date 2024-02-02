import Image from 'next/image';

interface Props {
  name: string;
  imageUrl: string;
  address: string;
}

function KakaoOverlay({ name, imageUrl, address }: Props) {
  return (
    <div>
      <span className='font-title3-simibold'>{name}</span>
      <Image src={imageUrl} alt='오버레이 이미지' width={120} height={120} />
      <span className='font-title3-simibold'>{address}</span>
    </div>
  );
}

export default KakaoOverlay;
