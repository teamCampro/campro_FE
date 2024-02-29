'use client';
import AllPictureIcon from '@/public/svgs/pic.svg';
import Image from 'next/image';
import ModalAboutCampImage from './Modal/ModalAboutCampImage';

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  imgUrls: string[];
}

function CampImageForDesktop({ imgUrls, isOpen, onOpen, onClose }: Props) {
  return (
    <>
      {imgUrls && (
        <div className='relative flex w-full max-w-1360pxr'>
          <div className='grid h-auto w-full grid-cols-2  gap-12pxr'>
            <div className='relative flex h-full w-full'>
              {imgUrls[0] && imgUrls[0] !== '' && (
                <Image
                  priority
                  className='cursor-pointer rounded-l-2xl transition-all hover:brightness-[0.7]'
                  fill
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
                        priority
                        width={256}
                        height={192}
                        key={imgUrl + i}
                        className={`flex w-full cursor-pointer object-cover hover:brightness-[0.7] ${i === 1 ? 'rounded-tr-2xl' : ''} ${i === 3 ? 'rounded-br-2xl' : ''}`}
                        src={imgUrl}
                        alt={`${imgUrl}`}
                      />
                    ),
                )}
            </div>
          </div>
          <button
            type='button'
            className='flex-center absolute bottom-20pxr right-20pxr  gap-4pxr rounded-[999px] border-gray300 bg-white py-12pxr  pl-20pxr pr-14pxr'
            onClick={onOpen}
          >
            <p className='whitespace-nowrap text-[#555] font-body2-semibold'>
              모든 사진
            </p>

            <AllPictureIcon className='flex w-full' />
          </button>
        </div>
      )}

      {isOpen && <ModalAboutCampImage imgUrls={imgUrls} onClose={onClose} />}
    </>
  );
}

export default CampImageForDesktop;
