import { Button } from '@/app/_components';
import Image from 'next/image';
import Tent from '@/../public/png/tent.gif';

function Question() {
  const isSubmmiting = false;

  return (
    <div className='flex-center flex-col pt-108pxr'>
      {isSubmmiting ? (
        <div className='flex-center flex-col gap-40pxr'>
          <h4 className='text-gray900 font-title1-bold'>
            어느 환경을 더 좋아하시나요?
          </h4>
          <Button type='round'>지구</Button>
        </div>
      ) : (
        <div className='flex-center flex-col '>
          <div className='flex-center flex-col gap-64pxr tablet:gap-12pxr'>
            <h3 className='text-gray900 font-title1-semibold tablet:font-h3'>
              캠핑 스타일을 분석 중이에요
            </h3>
            <p className='text-gray600 font-body2'>
              취향에 맞는 캠핑장을 보여드릴게요!
            </p>

            <Image src={Tent.src} width={338} height={187} alt='로딩 이미지' />
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
