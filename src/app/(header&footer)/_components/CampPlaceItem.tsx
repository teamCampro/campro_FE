import Chip from '@/components/Chip';
import { IconColoredHeart, IconHeart } from '@/public/svgs';
import Image from 'next/image';
import Link from 'next/link';
import { CampPlaceMockData } from './CampPlaceSection';

interface Props {
  campPlace: CampPlaceMockData;
  isResponsive?: boolean;
}

function CampPlaceItem({ campPlace, isResponsive = false }: Props) {
  const responsiveClasses = isResponsive
    ? ''
    : 'max-h-220pxr max-w-340pxr mobile:max-w-184pxr';
  const aspectClasses = isResponsive
    ? 'aspect-340/220 tablet:aspect-square mobile:aspect-square mobile411:aspect-288/184 mobile767:aspect-square'
    : '';
  return (
    <li key={campPlace.id} className='w-full'>
      <Link
        href={`overview/${campPlace.id}`}
        className='flex w-full flex-col gap-16pxr'
      >
        <div className={`relative ${responsiveClasses}`}>
          <Image
            width={262}
            height={262}
            style={{
              width: '100%',
              height: 'auto',
            }}
            className={`rounded-3xl ${aspectClasses}`}
            src={campPlace.imgUrl}
            alt='캠핑장 이미지'
          />
          <button
            type='button'
            className='group absolute bottom-16pxr right-16pxr h-34pxr w-34pxr rounded-full bg-gray800 bg-opacity-50 p-7pxr'
          >
            <IconHeart className='absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 transform group-hover:hidden' />
            <IconColoredHeart className='absolute bottom-1/2 right-1/2 hidden translate-x-1/2 translate-y-1/2 transform group-hover:block' />
          </button>
        </div>
        <div className='flex flex-col gap-2pxr'>
          <div className='flex gap-4pxr'>
            <span className='overflow-hidden text-ellipsis whitespace-nowrap font-body2-semibold'>
              {campPlace.placeName}
            </span>
            <span className='overflow-hidden text-ellipsis whitespace-nowrap font-medium text-gray500 font-caption1-medium'>
              {campPlace.address}
            </span>
          </div>
          <div className='flex flex-col gap-8pxr'>
            <div>
              <span className='text-gray800 font-title1-bold'>
                ₩{campPlace.price.toLocaleString()}
              </span>
              <span className='text-20pxr text-gray800 font-title1'>
                원 부터
              </span>
            </div>
            <div className='flex gap-10pxr'>
              <Chip>힐링/휴식</Chip>
              <Chip>자연</Chip>
              <Chip>숲</Chip>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default CampPlaceItem;
