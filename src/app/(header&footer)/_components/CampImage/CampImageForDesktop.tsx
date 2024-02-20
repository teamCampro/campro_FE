'use client';
import AllPictureIcon from '@/public/svgs/pic.svg';
import Image from 'next/image';
import { useState } from 'react';
import ModalAboutCampImage from './Modal/ModalAboutCampImage';

function CampImageForDesktop({ imgUrls }: { imgUrls: string[] }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleRenderModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <>
      {imgUrls && (
        <div className='relative flex w-full max-w-1360pxr'>
          <div className='grid w-full grid-cols-2 gap-12pxr'>
            <div className='flex w-full'>
              {imgUrls[0] && imgUrls[0] !== '' && (
                <Image
                  className='flex w-full cursor-pointer object-cover transition-all  hover:brightness-[0.7]'
                  width={580}
                  height={380}
                  src={imgUrls[0]}
                  alt={`${imgUrls[0]}`}
                />
              )}
            </div>
            <div className='grid w-full grid-cols-2 gap-12pxr'>
              {imgUrls
                .slice(1, 5)
                .map(
                  (imgUrl, i) =>
                    imgUrl && (
                      <Image
                        width={256}
                        height={192}
                        className='flex w-full cursor-pointer object-cover hover:brightness-[0.7]'
                        src={imgUrl}
                        key={imgUrl + i}
                        alt={`${imgUrl}`}
                      />
                    ),
                )}
            </div>
          </div>
          <button
            type='button'
            className='flex-center absolute bottom-20pxr right-20pxr  gap-4pxr rounded-[999px] border-gray300 bg-white py-12pxr  pl-20pxr pr-14pxr'
            onClick={handleRenderModal}
          >
            <p className='whitespace-nowrap text-[#555] font-body2-semibold'>
              모든 사진
            </p>

            <AllPictureIcon className='flex w-full' />
          </button>
        </div>
      )}

      {isOpenModal && (
        <ModalAboutCampImage imgUrls={imgUrls} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default CampImageForDesktop;
