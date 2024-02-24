'use client';

import { IconNavigationDown, IconStar } from '@/public/svgs';
import getTimeDiff from '@/src/app/_utils/getTimeDiff';
import Image from 'next/image';
import { useState } from 'react';
import { Review } from '../[id]/page';

interface ReviewItemProps {
  review: Review;
}
function ReviewItem({ review }: ReviewItemProps) {
  const [showAll, setShowAll] = useState(false);
  const getGroupInfo = (group: {
    adult: number;
    child: number;
    pet: number;
  }) => {
    const parts = [
      group.adult ? `성인 ${group.adult}명` : '',
      group.child ? `어린이 ${group.child}명` : '',
      group.pet ? `반려동물 ${group.pet}마리` : '',
    ].filter(Boolean);

    return parts.join(', ');
  };
  return (
    <li className='flex flex-col gap-12pxr'>
      <div className='flex flex-col gap-16pxr'>
        <div className='flex items-end gap-4pxr'>
          <h6 className='!leading-none text-gray700 font-caption1-semibold'>
            {review.userId}
          </h6>
          <span className='!leading-none text-gray500 font-caption2-medium'>
            {getTimeDiff(new Date(review.startTime))}
          </span>
        </div>
        <ul>
          <li className='max-h-120pxr w-full max-w-120pxr'>
            <Image
              width={120}
              height={120}
              style={{
                width: '100%',
                height: 'auto',
              }}
              className='aspect-square rounded-2xl'
              src='https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfDB8MHx8fDA%3D'
              alt={`${review.userId}님의 이용후기 사진`}
            />
          </li>
        </ul>
        <div className='flex flex-col gap-8pxr mobile:pr-20pxr mobile359:pr-16pxr'>
          <div>
            <h6 className='text-gray700 font-caption1-semibold'>
              객실명 : 임시
            </h6>
            <h6 className='text-gray700 font-caption1-semibold'>타입 : 임시</h6>
          </div>
          <p className='text-gray500 font-body2'>
            {showAll ? review.description : review.description.slice(0, 500)}
          </p>
        </div>
      </div>
      {!showAll && review.description.length > 500 && (
        <button
          type='button'
          className='flex h-auto w-auto items-center gap-2pxr text-gray600 font-caption2-semibold'
          onClick={() => setShowAll(true)}
        >
          더보기
          <span className='inline-block h-16pxr w-16pxr'>
            <IconNavigationDown
              width='100%'
              height='100%'
              viewBox='0 0 24 24'
            />
          </span>
        </button>
      )}
      <ul className='flex gap-4pxr'>
        <li className='flex-center w-auto gap-2pxr rounded-sm bg-gray100 px-6pxr py-4pxr !leading-none text-gray600 font-caption2-medium'>
          <span className='inline-block h-14pxr w-14pxr'>
            <IconStar width='100%' height='100%' viewBox='0 0 24 24' />
          </span>
          {review.star}
        </li>
        <div className='flex-center w-auto gap-2pxr rounded-sm bg-gray100 px-6pxr py-4pxr !leading-none text-gray600 font-caption2-medium'>
          {review.reviewKeyword.split(',')[0]}
        </div>
      </ul>
    </li>
  );
}

export default ReviewItem;
