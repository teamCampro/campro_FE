import Chip from '@/components/Chip';
import { IconColoredHeart } from '@/public/svgs';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { formatDate } from '../../_utils/formatDate';
import { numberFormatter } from '../../_utils/numberFormatter';

type CampZone = {
  id: number;
  name: string;
  address: string;
  campImage: string;
  minimumAmount: number;
  keyword: string;
  lat?: string;
  lng?: string;
};
interface Props {
  campPlace: CampZone;
  isResponsive?: boolean;
}

function CampPlaceItem({ campPlace, isResponsive = false }: Props) {
  const searchParams = useSearchParams();
  const responsiveClasses = isResponsive
    ? ''
    : 'max-h-220pxr max-w-340pxr mobile:max-w-184pxr';
  const aspectClasses = isResponsive
    ? 'aspect-340/220 tablet:aspect-square mobile:aspect-square mobile411:aspect-288/184 mobile767:aspect-square'
    : '';

  const checkInValue = searchParams.get('checkIn');
  const checkInDate = checkInValue ? new Date(checkInValue) : new Date();

  const checkOutValue = searchParams.get('checkOut');
  const checkOutDate = checkOutValue
    ? new Date(checkOutValue)
    : new Date(Date.now() + 1000 * 60 * 60 * 24);

  const newSearchParams = new URLSearchParams({
    checkIn: formatDate(checkInDate),
    checkOut: formatDate(checkOutDate),
    adult: searchParams.get('adult') || '2',
    child: searchParams.get('child') || '0',
    pet: searchParams.get('pet') || '0',
  });
  return (
    <li key={campPlace.id} className='flex w-full flex-col gap-16pxr'>
      <div className='relative '>
        <Link
          href={`overview/${campPlace.id}?${newSearchParams.toString()}`}
          className={`relative ${responsiveClasses}`}
        >
          <Image
            width={262}
            height={262}
            style={{
              width: '100%',
              height: 'auto',
            }}
            className={`rounded-3xl ${aspectClasses} aspect-340/220 hover:brightness-[0.7]`}
            src={campPlace.campImage}
            alt='캠핑장 이미지'
          />
        </Link>
        <button
          type='button'
          className='absolute bottom-16pxr right-16pxr h-34pxr w-34pxr rounded-full bg-gray800 bg-opacity-50 fill-gray100 p-7pxr'
        >
          <IconColoredHeart className='absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 transform fill-none stroke-gray100 hover:fill-primary100 hover:stroke-primary100' />
        </button>
      </div>
      <div className='flex flex-col gap-2pxr'>
        <div className='flex gap-4pxr'>
          <span className='overflow-hidden text-ellipsis whitespace-nowrap font-body2-semibold mobile:font-caption1-semibold'>
            {campPlace.name}
          </span>
          <span className='overflow-hidden text-ellipsis whitespace-nowrap font-medium text-gray500 font-caption1-medium'>
            {campPlace.address}
          </span>
        </div>
        <div className='flex flex-col gap-8pxr'>
          <div>
            <span className='text-gray800 font-title1-bold mobile:font-title3-bold'>
              ₩{numberFormatter(String(campPlace.minimumAmount))}
            </span>
            <span className='text-20pxr text-gray800 font-title1 mobile:font-title3-medium'>
              원 부터
            </span>
          </div>
          <div className='flex gap-10pxr'>
            {campPlace.keyword
              ? [...campPlace.keyword.split(',')]
                  .slice(0, 2)
                  .map((item, index) => <Chip key={index}>{item}</Chip>)
              : null}
            {/* <Chip>힐링/휴식</Chip>
            <Chip>자연</Chip>
            <Chip>숲</Chip> */}
          </div>
        </div>
      </div>
    </li>
  );
}

export default CampPlaceItem;
