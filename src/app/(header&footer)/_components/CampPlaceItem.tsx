import Image from 'next/image';
import { CampPlaceMockData } from './CampPlaceSection';
import { Heart } from '@/public/svgs';

interface Props {
  campPlace: CampPlaceMockData;
}

function CampPlaceItem({ campPlace }: Props) {
  return (
    <li key={campPlace.id} className='flex flex-col gap-16pxr'>
      <div className='relative h-220pxr w-340pxr mobile:h-184pxr mobile:w-184pxr'>
        <Image
          className='rounded-3xl object-cover'
          src={campPlace.imgUrl}
          alt='캠핑장 이미지'
          fill
          priority
          sizes='340px'
        />
        <button
          type='button'
          className='bg-gray800 absolute bottom-16pxr right-16pxr h-34pxr w-34pxr rounded-full bg-opacity-50 p-7pxr'
        >
          <Heart className='absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 transform' />
        </button>
      </div>
      <div className='flex flex-col gap-2pxr'>
        <div className='flex gap-4pxr'>
          <span className='font-caption1-semibold'>{campPlace.placeName}</span>
          <span className='font-medium text-gray500 font-caption1'>
            {campPlace.address}
          </span>
        </div>
        <div className='flex flex-col gap-8pxr'>
          <div>
            <span className='text-gray800 font-title3-bold'>
              ₩{campPlace.price.toLocaleString()}
            </span>
            <span className='text-gray800 font-title3-medium text-20pxr font-medium'>
              {' '}
              원 부터
            </span>
          </div>
          <div className='flex gap-10pxr '>
            <div className='flex-center rounded-full bg-primary50 px-10pxr py-3pxr text-14pxr font-semibold text-emred'>
              자연
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CampPlaceItem;
