'use client';

import { Button, ModalOutside, ModalPortal } from '@/components/index';
import {
  IconArrowLeftNon,
  IconClose,
  IconPlusNon,
  IconReset,
  IconStarHalf,
  IconStarScore,
} from '@/public/svgs';
import Score from './Score';
import { useState } from 'react';
import Survey from './Survey';
import WriteReview from './WriteReview';

interface WriteReviewModalType {
  handleClick: () => void;
}

function WriteReviewModal({ handleClick }: WriteReviewModalType) {
  const [isNext, setisNext] = useState(false);

  const handleButton = () => {
    setisNext(true);
  };

  return (
    <ModalPortal>
      <ModalOutside
        onClose={handleClick}
        custom='fixed flex-center !left-0pxr mobile:items-center top-0pxr z-[1000] overflow-hidden bg-black-50'
      >
        <div
          className={`flex h-screen ${isNext ? 'tabletMin:h-708pxr' : 'tabletMin:h-816pxr'} w-full  flex-col  bg-white tabletMin:w-407pxr tabletMin:rounded-xl`}
        >
          <h2 className='flex-center relative p-16pxr text-black font-title3-semibold tabletMin:hidden tabletMin:font-h1-semibold'>
            <IconArrowLeftNon
              fill='#949494'
              className='absolute left-16pxr top-1/2 block -translate-y-1/2 tabletMin:hidden'
              onClick={handleClick}
            />
            후기 등록
          </h2>
          <div className='flex w-full flex-col'>
            <div className='flex flex-col px-16pxr pb-20pxr pt-16pxr tabletMin:px-28pxr tabletMin:pb-28pxr tabletMin:pt-24pxr'>
              <div
                className='hidden h-24pxr w-24pxr cursor-pointer tabletMin:block'
                onClick={handleClick}
              >
                <IconClose
                  width='100%'
                  height='100%'
                  viewBox='0 0 26 26'
                  fill='white'
                />
              </div>

              <h3 className='text-black font-title2-semibold tabletMin:mt-24pxr'>
                자연숲 캠핑장은 어떠셨나요?
              </h3>
              <h4 className='mb-20pxr mt-2pxr text-gray500 font-caption1-medium'>
                캠핑장 이용 경험을 공유해 주세요
              </h4>
              <ul
                className={`flex flex-col gap-4pxr ${isNext ? '' : 'rounded-lg bg-gray100 px-16pxr py-12pxr'} `}
              >
                <li className='text-gray500 font-caption1-medium'>
                  객실명: <span>A사이드 | A1-8구역</span>
                </li>
                <li className='text-gray500 font-caption1-medium'>
                  유형: <span>2인</span>
                </li>
                {isNext ? (
                  <li>
                    <ul className='flex-center justify-start gap-4pxr'>
                      <li className='bg-gray100 px-6pxr py-2pxr text-gray600 font-caption2-medium'>
                        4.0
                      </li>
                      <li className='bg-gray100 px-6pxr py-2pxr text-gray600 font-caption2-medium'>
                        깨끗해요
                      </li>
                      <li className='bg-gray100 px-6pxr py-2pxr text-gray600 font-caption2-medium'>
                        온수가 잘 나와요
                      </li>
                    </ul>
                  </li>
                ) : null}
              </ul>
              {isNext ? <WriteReview /> : <Survey />}
            </div>
            <div className='flex-center h-88pxr justify-between gap-14pxr border-t border-b-white px-20pxr py-16pxr'>
              <div className='flex-center gap-4pxr whitespace-nowrap pl-12pxr pr-6pxr text-gray500 font-title3-semibold'>
                초기화
                <div className='h-24pxr w-24pxr'>
                  <IconReset
                    width='100%'
                    height='100%'
                    viewBox='0 0 24 24'
                    fill='#C8C8C8'
                  />
                </div>
              </div>
              <Button.Round
                size='sm'
                custom='!w-full text-white !h-56pxr flex-shrink'
                onClick={handleButton}
              >
                다음
              </Button.Round>
            </div>
          </div>
        </div>
      </ModalOutside>
    </ModalPortal>
  );
}

export default WriteReviewModal;
