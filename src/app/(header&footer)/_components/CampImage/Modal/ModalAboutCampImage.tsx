'use client';

import { ModalOutside, ModalPortal } from '@/components/index';
import useMediaQueries from '@/hooks/useMediaQueries';
import CampImageForModal from './CampImageForModal';
import ModalForMobileCampImg from './ModalForMobileCampImg';

interface Props {
  onClose: () => void;
  imgUrls: string[];
}

function ModalAboutCampImage({ onClose, imgUrls }: Props) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : false;
  return imgUrls && !isMobile ? (
    <ModalPortal>
      <ModalOutside
        onClose={onClose}
        custom='fixed left-0pxr top-0pxr z-[1000] flex h-screen w-full items-center justify-center overflow-hidden bg-black-50 px-40pxr  mobile: justify-center mobile:items-center cursor-pointer'
      >
        <CampImageForModal
          imgUrls={imgUrls}
          onClose={onClose}
          title='전체 사진'
        />
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
          imgUrls={imgUrls}
          title='전체 사진'
        />
      </ModalOutside>
    </ModalPortal>
  );
}

export default ModalAboutCampImage;
