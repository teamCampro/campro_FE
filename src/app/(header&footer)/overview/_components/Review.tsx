import {
  IconNavigationDown,
  IconNavigationRight,
  IconStar,
} from '@/public/svgs';
import Image from 'next/image';

interface ReviewProps {
  id: string;
  isRef: React.RefObject<HTMLDivElement>;
}

function Review({ id, isRef }: ReviewProps) {
  return (
    <section className='flex flex-col gap-20pxr border-b border-gray200 pb-40pxr pt-20pxr mobile:pl-20pxr mobile359:pl-16pxr'>
      <div ref={isRef} id={id} className='scroll-mt-168pxr '>
        <div className='flex items-center justify-between border-t border-t-gray200 pt-20pxr mobile:mr-24pxr mobile359:mr-16pxr'>
          <div className='mb-20pxr flex items-center gap-4pxr'>
            <IconStar />
            <h2 className='flex-center text-black font-title3-bold'>
              이용 후기<span>9.8</span>
            </h2>
            <span className='!leading-none text-gray400 font-caption1-medium'>
              ・257명 평가
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
          <li className='flex flex-col gap-12pxr'>
            <div className='flex flex-col gap-16pxr'>
              <div className='flex items-end gap-4pxr'>
                <h6 className='!leading-none text-gray700 font-caption1-semibold'>
                  보라돌이28
                </h6>
                <span className='!leading-none text-gray500 font-caption2-medium'>
                  2일전
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
                    alt='dd'
                  />
                </li>
              </ul>
              <div className='flex flex-col gap-8pxr mobile:pr-20pxr mobile359:pr-16pxr'>
                <div>
                  <h6 className='text-gray700 font-caption1-semibold'>
                    객실명 : A사이드 ㅣ A1-8구역
                  </h6>
                  <h6 className='text-gray700 font-caption1-semibold'>
                    타입 : 2인 / 여성
                  </h6>
                </div>
                <p className='text-gray500 font-body2'>
                  친구랑 둘이서 처음 가 본 캠핑이었는데 엄청 친절하시고 조용해서
                  쉬기에도 너무 좋았어요! 자연 향기 너무 힐링되고 좋았어요!
                  친구도 너무 마음에 든다구 하더라구요 ㅎㅎ ! 다음 캠핑갈 때도
                  이용하고 싶어요!
                </p>
              </div>
            </div>
            <button
              type='button'
              className='flex h-auto w-auto items-center gap-2pxr text-gray600 font-caption2-semibold'
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
            <ul className='flex gap-4pxr'>
              <li className='flex-center w-auto gap-2pxr rounded-sm bg-gray100 px-6pxr py-4pxr !leading-none font-caption2-medium'>
                <span className='inline-block h-14pxr w-14pxr'>
                  <IconStar width='100%' height='100%' viewBox='0 0 24 24' />
                </span>
                5.0
              </li>
              <div className='flex-center w-auto gap-2pxr rounded-sm bg-gray100 px-6pxr py-4pxr !leading-none font-caption2-medium'>
                조용해서 쉬기 좋아요
              </div>
            </ul>
          </li>
          <li className='flex flex-col gap-12pxr'>
            <div className='flex flex-col gap-16pxr'>
              <div className='flex items-end gap-4pxr'>
                <h6 className='!leading-none text-gray700 font-caption1-semibold'>
                  보라돌이28
                </h6>
                <span className='!leading-none text-gray500 font-caption2-medium'>
                  2일전
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
                    alt='dd'
                  />
                </li>
              </ul>
              <div className='flex flex-col gap-8pxr mobile:pr-20pxr mobile359:pr-16pxr'>
                <div>
                  <h6 className='text-gray700 font-caption1-semibold'>
                    객실명 : A사이드 ㅣ A1-8구역
                  </h6>
                  <h6 className='text-gray700 font-caption1-semibold'>
                    타입 : 2인 / 여성
                  </h6>
                </div>
                <p className='text-gray500 font-body2'>
                  친구랑 둘이서 처음 가 본 캠핑이었는데 엄청 친절하시고 조용해서
                  쉬기에도 너무 좋았어요! 자연 향기 너무 힐링되고 좋았어요!
                  친구도 너무 마음에 든다구 하더라구요 ㅎㅎ ! 다음 캠핑갈 때도
                  이용하고 싶어요!
                </p>
              </div>
            </div>
            <button
              type='button'
              className='flex h-auto w-auto items-center gap-2pxr text-gray600 font-caption2-semibold'
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
            <ul className='flex gap-4pxr'>
              <li className='flex-center w-auto gap-2pxr rounded-sm bg-gray100 px-6pxr py-4pxr !leading-none font-caption2-medium'>
                <span className='inline-block h-14pxr w-14pxr'>
                  <IconStar width='100%' height='100%' viewBox='0 0 24 24' />
                </span>
                5.0
              </li>
              <div className='flex-center w-auto gap-2pxr rounded-sm bg-gray100 px-6pxr py-4pxr !leading-none font-caption2-medium'>
                조용해서 쉬기 좋아요
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Review;
