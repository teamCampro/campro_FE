import Image from 'next/image';
import Lottie from 'react-lottie-player';
import animationData from '@/public/lodingImage.json';

function Loading() {
  /* lodingImage */
  return (
    <div className='custom-height flex-center'>
      <Image
        width={600}
        height={600}
        src='/gifs/loading.gif'
        alt='로딩중입니다'
      />
      {/* <Lottie
        loop
        animationData={animationData}
        play
        style={{ backgroundColor: 'white' }}
      /> */}
    </div>
  );
}

export default Loading;
