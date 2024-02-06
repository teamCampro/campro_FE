'use client';
import { CampImageData } from '.';
import Image from 'next/image';
import AllPictureIcon from '@/public/svgs/pic.svg';
function CampImageForDesktop({
  campImages,
}: {
  campImages: CampImageData[] | null;
}) {
  return (
    campImages && (
      <div className='relative flex w-full max-w-1360pxr'>
        <div className='grid w-full grid-cols-2 gap-12pxr'>
          <div className='flex w-full'>
            {campImages[0].imgUrl && campImages[0].imgUrl !== '' && (
              <Image
                className='flex w-full object-cover'
                width={580}
                height={380}
                src={campImages[0]?.imgUrl}
                alt={`${campImages[0]?.id}`}
              />
            )}
          </div>
          <div className='grid w-full grid-cols-2 gap-12pxr'>
            {campImages
              .slice(1, 5)
              .map(
                (item, i) =>
                  item.imgUrl && (
                    <Image
                      width={256}
                      height={192}
                      className='flex w-full object-cover'
                      src={item.imgUrl}
                      key={item?.id}
                      alt={`${campImages[i].id}`}
                    />
                  ),
              )}
          </div>
        </div>
        <button className='flex-center absolute bottom-20pxr right-20pxr  gap-4pxr rounded-[999px] border-gray300 bg-white py-12pxr  pl-20pxr pr-14pxr'>
          <p className='whitespace-nowrap text-[#555] font-body2'>모든 사진</p>

          <AllPictureIcon className='flex w-full' />
        </button>
      </div>
    )
  );
}

export default CampImageForDesktop;
