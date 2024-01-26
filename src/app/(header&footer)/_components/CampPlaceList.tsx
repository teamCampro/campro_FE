'use client';
import { ArrowRight } from '@/public/svgs';
import CampPlaceItem from './CampPlaceItem';
import { CampPlaceMockData } from './CampPlaceSection';

interface Props {
  campPlaces: CampPlaceMockData[];
  type: string;
}

function CampPlaceList({ campPlaces, type }: Props) {
  let listName;
  switch (type) {
    case 'matching':
      listName = '홍길동님을 위한 캠핑장';
      break;
    case 'secondMatching':
      listName = '⛰️ 산 캠핑장 모음';
      break;
    case 'random':
      listName = '⛰️ 산 캠핑장 모음';
      break;
    case 'hot':
      listName = '인기 캠핑장';
      break;
    case 'new':
      listName = '새로 입점한 캠핑장';
      break;
  }

  return (
    <div className='flex max-w-1440pxr flex-col gap-12pxr'>
      <div className='flex justify-between'>
        <h1 className='font-title1-semibold'>{listName}</h1>
        <button
          type='button'
          className='flex items-center font-medium text-gray500 font-body2'
        >
          전체보기 <ArrowRight />
        </button>
      </div>
      <div className='flex min-w-1440pxr gap-16pxr'>
        {campPlaces?.map((campPlace) => (
          <ul key={campPlace.id} className='flex'>
            <CampPlaceItem campPlace={campPlace} />
          </ul>
        ))}
      </div>
    </div>
  );
}

export default CampPlaceList;
