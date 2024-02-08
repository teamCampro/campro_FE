'use client';

import { ModalOutside, ModalPortal } from '@/components/index';
import CampImageForModal from './CampImageForModal';
import { CampImageData } from '../index';
import useMediaQueries from '@/hooks/useMediaQueries';
import ModalForMobileCampImg from './ModalForMobileCampImg';

interface Props {
  onClose: () => void;
  campImages: CampImageData[] | null;
}

function ModalAboutCampImage({ onClose, campImages }: Props) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : false;
  return campImages && !isMobile ? (
    <ModalPortal>
      <ModalOutside
        onClose={onClose}
        custom='fixed left-0pxr top-0pxr z-[1000] flex h-screen w-full items-center justify-center overflow-hidden bg-black-50 px-40pxr  mobile: justify-center mobile:items-center'
      >
        <CampImageForModal campImages={campImages} onClose={onClose} />
      </ModalOutside>
    </ModalPortal>
  ) : (
    <ModalPortal>
      <ModalForMobileCampImg onClose={onClose} campImages={campImages} />
    </ModalPortal>
  );
}

export default ModalAboutCampImage;