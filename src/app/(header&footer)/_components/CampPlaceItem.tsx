import Chip from '@/components/Chip';
import { IconHeart } from '@/public/svgs';
import Image from 'next/image';
import { CampPlaceMockData } from './CampPlaceSection';

interface Props {
  campPlace: CampPlaceMockData;
}

function CampPlaceItem({ campPlace }: Props) {
  return (
    <li key={campPlace.id} className='flex flex-col gap-16pxr'>
      <div className='relative h-220pxr w-340pxr mobile:h-184pxr mobile:w-full tablet:w-full desktop1440:w-full'>
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
          className='absolute bottom-16pxr right-16pxr h-34pxr w-34pxr rounded-full bg-gray800 bg-opacity-50 p-7pxr'
        >
          <IconHeart className='absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 transform' />
        </button>
      </div>
      <div className='flex flex-col gap-2pxr'>
        <div className='flex gap-4pxr'>
          <span className='overflow-hidden text-ellipsis whitespace-nowrap font-caption1-semibold'>
            {campPlace.placeName}
          </span>
          <span className='overflow-hidden text-ellipsis whitespace-nowrap font-medium text-gray500 font-caption1'>
            {campPlace.address}
          </span>
        </div>
        <div className='flex flex-col gap-8pxr'>
          <div>
            <span className='text-gray800 font-title3-bold'>
              ₩{campPlace.price.toLocaleString()}
            </span>
            <span className='font-title3-medium text-20pxr font-medium text-gray800'>
              {' '}
              원 부터
            </span>
          </div>
          <div className='flex gap-10pxr '>
            <Chip>힐링/휴식</Chip>
            <Chip>자연</Chip>
            <Chip>숲</Chip>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CampPlaceItem;
