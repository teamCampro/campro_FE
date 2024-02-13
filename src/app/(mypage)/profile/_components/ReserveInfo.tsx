'use client';

import Button from '@/components/Button';
import SiteInfo from '@/src/app/(header&footer)/reserve/_components/SiteInfo';

function ReserveInfo() {
  return (
    <>
      <div className='flex-center justify-between'>
        <h2 className='hidden font-h1-semibold tabletMin:block'>예약 상세</h2>
        <Button.Round custom='!w-108pxr bg-white border border-gray200 font-caption1-semibold !h-36pxr !text-gray500 !rounded-md'>
          예약 취소
        </Button.Round>
      </div>
      <div className='flex flex-col gap-24pxr'>
        <SiteInfo size='pc' />
        <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
          <h3 className='text-black font-title3-semibold tabletMin:font-title1-semibold'>
            예약 정보
          </h3>
          <ul className='flex flex-col gap-16pxr'>
            <li className='flex items-center justify-start gap-53pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
              인원
              <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
                성인 99명, 아이 99명
              </span>
            </li>
            <li className='flex items-center justify-start gap-53pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
              일정
              <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
                12.29(토) - 12.29(토)
              </span>
            </li>
            <li className='flex items-center justify-start gap-53pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
              애견
              <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
                1마리
              </span>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
          <h3 className='text-black font-title3-semibold tabletMin:font-title1-semibold'>
            예약자 정보
          </h3>
          <ul className='flex flex-col gap-16pxr'>
            <li className='flex items-center justify-start gap-40pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
              예약자명
              <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
                홍길동
              </span>
            </li>
            <li className='flex items-center justify-start gap-24pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
              휴대폰 번호
              <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
                010-1234-5678
              </span>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
          <h3 className='text-black font-title3-semibold tabletMin:font-title1-semibold'>
            차량 추가
          </h3>
          <div className='flex items-center justify-start gap-24pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
            차량번호
            <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
              가나109231
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
          <h3 className=' text-black font-title3-semibold tabletMin:font-title1-semibold'>
            추가 옵션
          </h3>
          <ul>
            <li>숫불 세트(고기2인분+식기)</li>
            <li>장작 세트</li>
          </ul>
        </div>
        <div className='flex justify-between'>
          <div className='flex w-full flex-col gap-16pxr pb-24pxr'>
            <h3 className=' text-black font-title3-semibold tabletMin:font-title1-semibold'>
              결제 정보
            </h3>
            <ul className='flex flex-col gap-12pxr'>
              <li className='flex-center justify-start gap-35pxr text-gray600 font-body2-medium'>
                결제 일시
                <span className='text-gray600 font-body2-semibold'>
                  2024.12.28(토) 14:29
                </span>
              </li>
              <li className='flex-center justify-start gap-35pxr text-gray600 font-body2-medium'>
                결제 수단
                <span className='text-gray600 font-body2-semibold'>
                  현대 ****-****-**21
                </span>
              </li>
            </ul>
          </div>
          <div className='flex w-full flex-col gap-12pxr '>
            <h3 className='text-black font-title3-semibold'>결제 금액</h3>
            <ul className='flex flex-col gap-12pxr'>
              <li className='flex-center justify-between text-gray600 font-body2-medium'>
                객실 1개 x 2박
                <span className='text-gray600 font-body2-semibold'>
                  90,000원
                </span>
              </li>
            </ul>
            <ul className='flex flex-col gap-8pxr border-b-2 border-dashed pb-24pxr'>
              <li className='flex-center justify-between text-gray600 font-body2-medium '>
                추가 상품
                <span className='text-gray600 font-body2-semibold'>
                  합계 - 40,000원
                </span>
              </li>
              <li className='flex-center justify-between text-gray600 font-body2-medium '>
                바베큐 x 1
                <span className='text-gray500 font-body2-semibold'>
                  20,000원
                </span>
              </li>
              <li className='flex-center justify-between text-gray600 font-body2-medium '>
                장작 x 1
                <span className='text-gray500 font-body2-semibold'>
                  20,000원
                </span>
              </li>
            </ul>
            <div className='flex justify-between text-gray800 font-title1-bold'>
              <h2>총 결제금액</h2>
              <h2 className='text-primary100'>130,000원</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReserveInfo;
