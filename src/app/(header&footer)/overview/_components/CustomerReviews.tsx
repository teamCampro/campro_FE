import { IconNavigationRight, IconStar } from '@/public/svgs';
import { useState } from 'react';
import { CampSite } from '../[id]/page';
import ReviewItem from './ReviewItem';

function CustomerReviews({ reviews }: CampSite) {
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
    <section className='flex flex-col gap-20pxr border-b border-gray200 pb-40pxr pt-20pxr mobile:pl-20pxr mobile359:pl-16pxr'>
      <div className='flex items-center justify-between border-t border-t-gray200 pt-20pxr mobile:mr-24pxr mobile359:mr-16pxr'>
        <div className='flex items-center gap-4pxr'>
          <IconStar />
          <h2 className='flex-center text-black font-title3-bold'>
            이용 후기<span>9.8</span>
          </h2>
          <span className='!leading-none text-gray400 font-caption1-medium'>
            ・{reviews.totalCount}명 평가
          </span>
        </div>
        <div className='flex items-center !leading-none text-gray500 font-caption1-medium'>
          전체보기
          <span className='inline-block h-16pxr w-16pxr'>
            <IconNavigationRight width='100%' height='100%' />
          </span>
        </div>
      </div>
      <ul className='flex flex-col gap-24pxr mobile:gap-20pxr'>
        {reviews.contents.map((content, i) => (
          <ReviewItem content={content} key={i} />
        ))}
      </ul>
    </section>
  );
}

export default CustomerReviews;
