'use client';

import { IconExit } from '@/public/svgs';
import Image from 'next/image';
import { ModalOutside, ModalPortal } from '@/components/index';
import useMediaQueries from '@/hooks/useMediaQueries';
import ModalForMobileCampImg from '../../_components/CampImage/Modal/ModalForMobileCampImg';
import { CampImageData } from '../../_components/CampImage';
interface Props {
  onClose: () => void;
  planImage: CampImageData[] | null;
}

function ModalForPlanImage({ onClose, planImage }: Props) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;
  return planImage && !isMobile ? (
    <ModalPortal>
      <ModalOutside
        onClose={onClose}
        custom='fixed left-0pxr top-0pxr z-[1000] flex h-screen w-full flex-center overflow-hidden bg-black-50 mobile:items-center px-20pxr'
      >
        <div className='flex   max-w-767pxr flex-col items-start rounded-2xl bg-white'>
          <div className='flex-center pxr flex h-70pxr w-full px-20pxr py-16pxr'>
            <div className='flex-center h-26pxr w-26pxr'>
              <IconExit
                width='100%'
                height='100%'
                viewBox='0 0 24 24'
                fill='#949494'
                className='cursor-pointer'
                onClick={onClose}
              />
            </div>
            <span className='flex-center flex w-full text-black font-title1-bold'>
              배치도
            </span>
          </div>
          <div className='flex-center h-480pxr w-full max-w-767pxr bg-gray100'>
            <Image
              width={767}
              height={480}
              alt='배치도 이미지'
              src='https://camping.dpto.or.kr/images/sub/new_map1.jpg'
            />
          </div>
        </div>
      </ModalOutside>
    </ModalPortal>
  ) : (
    <ModalPortal>
      <ModalOutside
        onClose={onClose}
        custom='fixed left-0pxr top-0pxr z-[1000] flex h-screen w-full items-center justify-center overflow-hidden bg-black-50 px-40pxr  mobile: justify-center mobile:items-center cursor-pointer'
      >
        <ModalForMobileCampImg
          onClose={onClose}
          campImages={planImage}
          title='배치도'
        />
      </ModalOutside>
    </ModalPortal>
  );
}

export default ModalForPlanImage;
