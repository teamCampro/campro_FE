import Image from 'next/image';

function Loading() {
  return (
    <div className='custom-height flex-center'>
      <Image
        width={140}
        height={140}
        src='/gifs/campro_loading.gif'
        alt='로딩중입니다'
      />
    </div>
  );
}

export default Loading;
