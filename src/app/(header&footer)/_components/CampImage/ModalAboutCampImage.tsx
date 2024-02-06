'use client';

import { ModalOutside, ModalPortal } from '@/components/index';
import CampImageForModal from './CampImageForModal';
import { CampImageData } from '.';

interface Props {
  onClose: () => void;
  campImages: CampImageData[] | null;
}

function ModalAboutCampImage({ onClose, campImages }: Props) {
  return (
    campImages && (
      <ModalPortal>
        <ModalOutside
          onClose={onClose}
          custom='fixed left-0pxr top-0pxr z-[1000] flex h-screen w-full items-center justify-center overflow-hidden bg-black-50 px-40pxr  mobile: justify-center mobile:items-center'
        >
          <CampImageForModal campImages={campImages} />
        </ModalOutside>
      </ModalPortal>
    )
  );
}

export default ModalAboutCampImage;
