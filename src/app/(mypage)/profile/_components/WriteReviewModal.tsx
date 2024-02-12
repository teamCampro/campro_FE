'use client';

import { Button, ModalOutside, ModalPortal } from '@/components/index';
import {
  IconClose,
  IconReset,
  IconStarHalf,
  IconStarScore,
} from '@/public/svgs';
import Score from './Score';

interface WriteReviewModalType {
  handleClick: () => void;
}

function WriteReviewModal({ handleClick }: WriteReviewModalType) {
  return (
    <ModalPortal>
      <ModalOutside
        onClose={handleClick}
        custom='fixed flex-center !left-0pxr mobile:items-center top-0pxr z-[1000] overflow-hidden bg-black-50'
      >
        <div className='flex h-775pxr w-407pxr flex-col items-start justify-start rounded-xl bg-white '>
          <div className='flex w-full flex-col'>
            <div className='flex flex-col px-28pxr py-24pxr'>
              <IconClose fill='white' />
              <h3>자연숲 캠핑장은 어떠셨나요?</h3>
              <h4>캠핑장 이용 경험을 공유해 주세요</h4>
              <ul className='flex flex-col gap-4pxr rounded-lg bg-gray100 px-16pxr py-12pxr'>
                <li>
                  객실명: <span>A사이드 | A1-8구역</span>
                </li>
                <li>
                  유형: <span>2인</span>
                </li>
              </ul>
              <div>
                <h3>전체 만족도는 어땠나요?</h3>
                <Score />
              </div>
              <div>
                <h3>어떤 점이 좋았나요?</h3>
                <h4>이 캠핑장에 어울리는 키워드를 최대 3개까지 골라주세요</h4>
                <ul></ul>
              </div>
            </div>
            <div className='flex-center justify-between gap-16pxr border-t border-b-white px-20pxr py-16pxr  mobile:border-0'>
              <div className='flex-center gap-4pxr whitespace-nowrap pl-12pxr pr-6pxr text-gray500 font-title3-semibold'>
                초기화
                <IconReset fill='#C8C8C8' />
              </div>
              <Button.Round
                size='sm'
                custom='mobileMin:!w-174pxr !h-56pxr mobileMiddle:!w-214pxr mobileMiddle:w-full'
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
