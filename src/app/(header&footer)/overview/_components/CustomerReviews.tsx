import { IconArrowRightNon, IconStar } from '@/public/svgs';
import { Review } from '../[id]/page';
import ReviewItem from './ReviewItem';

function CustomerReviews({ reviews }: { reviews: Review[] }) {
  return (
    <section className='flex flex-col gap-20pxr border-b border-gray200 pb-40pxr mobile:pl-20pxr mobile359:pl-16pxr'>
      {reviews.length > 0 ? (
        <>
          <div className='flex items-center justify-between border-t border-t-gray200 pt-24pxr mobile:mr-24pxr mobile359:mr-16pxr'>
            <div className='flex items-center gap-4pxr'>
              <IconStar />
              <h2 className='flex-center gap-2pxr text-black font-title3-bold'>
                이용 후기 <span> 4.8</span>
              </h2>
              <span className='flex gap-4pxr !leading-none text-gray400 font-caption1-medium'>
                <span>・</span> {reviews.length}명 평가
              </span>
            </div>
            <button className='flex items-center text-gray500 font-caption1-medium mobile:font-caption2-medium'>
              전체 보기
              <IconArrowRightNon
                width={16}
                height={16}
                viewBox='0 0 24 24'
                className='fill-gray500'
              />
            </button>
          </div>
          <ul className='flex flex-col gap-24pxr mobile:gap-20pxr'>
            {reviews.map((review, i) => (
              <ReviewItem review={review} key={i} />
            ))}
          </ul>
        </>
      ) : (
        <div>이용 후기 없을 때 디자인이 필요합니다 ⛺️</div>
      )}
    </section>
  );
}

export default CustomerReviews;
