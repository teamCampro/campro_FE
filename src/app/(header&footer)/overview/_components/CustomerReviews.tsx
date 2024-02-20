import { IconStar } from '@/public/svgs';
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
              <h2 className='flex-center text-black font-title3-bold'>
                이용 후기<span>9.8</span>
              </h2>
              <span className='!leading-none text-gray400 font-caption1-medium'>
                ・{reviews.length}명 평가
              </span>
            </div>
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
