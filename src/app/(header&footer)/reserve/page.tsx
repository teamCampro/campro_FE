'use client';

import Button from '@/components/Button';
import { CommonForm, CommonInput } from '@/components/index';
import {
  IconArrowDown,
  IconArrowLeftNon,
  IconArrowRightNon,
  IconMinus,
  IconPlus,
  IconPlusNon,
} from '@/public/svgs';
import SiteInfo from './_components/SiteInfo';

function Page() {
  const ss = () => {
    console.log(111);
  };
  return (
    <>
      <h2 className='text-block flex-center tabletMin:font-h1 relative p-16pxr font-title3-semibold tabletMin:hidden'>
        <IconArrowLeftNon
          fill='#949494'
          className='absolute left-16pxr top-1/2 block -translate-y-1/2 tabletMin:hidden'
        />
        예약 요청
      </h2>
      <div className='m-auto mb-125pxr mt-24pxr max-w-1400pxr px-20pxr tabletMin:mt-40pxr tabletMin:px-40pxr'>
        <div className='mb-16pxr flex flex-col gap-32pxr'>
          <h2 className='text-block tabletMin:flex-center tabletMin:font-h1 hidden justify-start gap-12pxr font-title3-semibold'>
            <Button.Circle
              size='sm'
              custom='bg-white !w-56pxr !h-48pxr border border-gray300 gap-4pxr'
            >
              <IconArrowLeftNon />
            </Button.Circle>
            예약 요청
          </h2>
          <span className='text-second100 font-body1-bold'>
            예약 전, 운영 정책을 반드시 확인해 주세요!
          </span>
        </div>
        <main className='reserve flex flex-col gap-24pxr tabletMin:grid'>
          <section className='flex flex-col gap-24pxr'>
            <Button.Round custom='w-full bg-white border border-gray200 font-body2-semibold !h-46pxr rounded-lg'>
              이용 안내 보기
            </Button.Round>
            <SiteInfo size='mobile' />
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
              <div className='flex gap-12pxr'>
                <CommonForm className='w-full max-w-334pxr' onSubmit={ss}>
                  <CommonInput
                    name='carNumber'
                    placeholder='차량 번호를 입력해주세요'
                    className='h-56pxr w-full rounded-lg border-none bg-gray100'
                  />
                </CommonForm>
                <Button.Circle
                  size='sm'
                  custom='bg-white !w-108pxr !h-56pxr border border-gray300 flex-center gap-4pxr font-body2-medium !leading-none'
                >
                  <div className='h-20pxr w-20pxr'>
                    <IconPlusNon
                      width='100%'
                      height='100%'
                      viewBox='0 0 24 24'
                    />
                  </div>
                  등록
                </Button.Circle>
              </div>
            </div>
            <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
              <h3 className=' text-black font-title3-semibold tabletMin:font-title1-semibold'>
                추가 옵션
              </h3>
              <ul className='flex flex-col gap-16pxr'>
                <li className='flex-center flex-wrap justify-between'>
                  <h3 className='reserve-options font-body2-medium tabletMin:font-body1-medium'>
                    장작 세트
                  </h3>
                  <div className='flex-center w-73pxr justify-between gap-16pxr tabletMin:w-97pxr'>
                    <div className='h-20pxr w-20pxr'>
                      <IconMinus
                        width='100%'
                        height='100%'
                        viewBox='0 0 24 24'
                      />
                    </div>
                    <span className='font-medium font-body2-medium tabletMin:font-body1-medium'>
                      1
                    </span>
                    <div className='h-20pxr w-20pxr'>
                      <IconPlus
                        width='100%'
                        height='100%'
                        viewBox='0 0 24 24'
                      />
                    </div>
                  </div>
                  <h3 className='font-body2-bold basis-78pxr tabletMin:font-body1-bold'>
                    20,000원
                  </h3>
                </li>
                <li className='flex-center flex-wrap justify-between'>
                  <h3 className='reserve-options font-medium font-body2-medium tabletMin:font-body1-medium'>
                    전기 장판
                  </h3>
                  <div className='flex-center w-73pxr justify-between gap-16pxr tabletMin:w-97pxr'>
                    <div className='h-20pxr w-20pxr'>
                      <IconMinus
                        width='100%'
                        height='100%'
                        viewBox='0 0 24 24'
                      />
                    </div>
                    <span className='font-medium font-body2-medium tabletMin:font-body1-medium'>
                      1
                    </span>
                    <div className='h-20pxr w-20pxr'>
                      <IconPlus
                        width='100%'
                        height='100%'
                        viewBox='0 0 24 24'
                      />
                    </div>
                  </div>
                  <h3 className='font-body2-bold basis-78pxr tabletMin:font-body1-bold'>
                    20,000원
                  </h3>
                </li>
                <li className='flex-center flex-wrap justify-between'>
                  <h3 className='reserve-options font-body2-medium tabletMin:font-body1-medium'>
                    이불세트(덮는 이불 2장)
                  </h3>
                  <div className='flex-center w-73pxr justify-between gap-16pxr tabletMin:w-97pxr'>
                    <div className='h-20pxr w-20pxr'>
                      <IconMinus
                        width='100%'
                        height='100%'
                        viewBox='0 0 24 24'
                      />
                    </div>
                    <span className='font-body2-medium tabletMin:font-body1-medium'>
                      1
                    </span>
                    <div className='h-20pxr w-20pxr'>
                      <IconPlus
                        width='100%'
                        height='100%'
                        viewBox='0 0 24 24'
                      />
                    </div>
                  </div>
                  <h3 className='font-body2-bold basis-78pxr tabletMin:font-body1-bold'>
                    20,000원
                  </h3>
                </li>
                <li className='flex-center flex-wrap justify-between'>
                  <h3 className='reserve-options whitespace-pre-line  font-body2-medium tabletMin:font-body1-medium'>
                    욕실세트(치약+일회용 칫솔)
                  </h3>
                  <div className='flex-center w-73pxr justify-between gap-16pxr tabletMin:w-97pxr'>
                    <div className='h-20pxr w-20pxr'>
                      <IconMinus
                        width='100%'
                        height='100%'
                        viewBox='0 0 24 24'
                      />
                    </div>
                    <span className='font-body2-medium tabletMin:font-body1-medium'>
                      1
                    </span>
                    <div className='h-20pxr w-20pxr'>
                      <IconPlus
                        width='100%'
                        height='100%'
                        viewBox='0 0 24 24'
                      />
                    </div>
                  </div>
                  <h3 className='font-body2-bold basis-78pxr tabletMin:font-body1-bold'>
                    20,000원
                  </h3>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-16pxr'>
              <h3 className='text-black font-title3-semibold tabletMin:font-title1-semibold'>
                결제 수단
              </h3>
              <ul className='flex-center justify-start gap-16pxr'>
                <li>
                  <Button.Round custom='reserve-button !h-46pxr px-40pxr py-12pxr bg-white border hover:border-primary100 font-body2-semibold text-gray700'>
                    무통장 입금
                  </Button.Round>
                </li>
                <li>
                  <Button.Round custom='reserve-button !h-46pxr px-40pxr py-12pxr bg-white border hover:border-primary100 font-body2-semibold text-gray700'>
                    신용카드
                    <span className='hidden tabletMin:inline-block'>결제</span>
                  </Button.Round>
                </li>
                <li>
                  <Button.Round custom='reserve-button !h-46pxr px-40pxr py-12pxr bg-white border hover:border-primary100 font-body2-semibold text-gray700'>
                    간편 결제
                  </Button.Round>
                </li>
              </ul>
              <label
                htmlFor='card'
                className='flex-center justify-start gap-4pxr'
              >
                <input type='radio' id='card' name='card' />
                <span className='text-gray600 font-caption1-medium'>
                  이 결제수단으로 다음에도 사용하기
                </span>
              </label>
            </div>
          </section>
          <section>
            <div className='flex flex-col gap-24pxr border-t pt-24pxr tabletMin:rounded-2xl tabletMin:border tabletMin:border-gray300 tabletMin:p-24pxr'>
              <SiteInfo size='pc' />
              <div className='flex flex-col gap-12pxr border-b-2 border-dashed pb-24pxr'>
                <h3 className='text-black font-title3-semibold'>결제 금액</h3>
                <ul className='flex flex-col gap-12pxr'>
                  <li className='flex-center justify-between text-gray600 font-body2-medium'>
                    객실 1개 x 2박
                    <span className='text-gray600 font-body2-semibold'>
                      90,000원
                    </span>
                  </li>
                </ul>
                <ul className='flex flex-col gap-8pxr'>
                  <li className='flex-center justify-betweentext-gray600 font-body2-medium '>
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
              </div>
              <div className='flex flex-col gap-24pxr'>
                <div className='flex justify-between text-gray800 font-title1-bold'>
                  <h2>총 결제금액</h2>
                  <h2 className='text-primary100'>130,000원</h2>
                </div>
                {/* https://developer.mozilla.org/ko/docs/Web/HTML/Element/input/checkbox#%EC%98%88%EC%A0%9C  참고 */}
                <div className='flex flex-col rounded-lg  bg-gray100 px-20pxr py-16pxr'>
                  <div className='border-gary300 mb-12pxr flex justify-between gap-4pxr border-b pb-12pxr'>
                    <input
                      type='checkbox'
                      name='checkAll'
                      id='checkTable'
                      value='checkTable'
                    />
                    <label
                      htmlFor='checkAll'
                      className='grow-2 font-caption1-semibold'
                    >
                      약관 전체 동의
                      <span className='ml-2pxr text-error'>(필수)</span>
                    </label>
                    <IconArrowDown />
                  </div>
                  <ul className='flex flex-col gap-12pxr '>
                    <li className='flex justify-between gap-4pxr'>
                      <input type='checkbox' name='manage' id='checkTable' />
                      <label
                        htmlFor='manage'
                        className='grow-2 font-caption1-semibold'
                      >
                        캠핑장 운영정책 동의
                        <span className='ml-2pxr text-error'>(필수)</span>
                      </label>
                      <IconArrowRightNon />
                    </li>
                    <li className='flex justify-between gap-4pxr'>
                      <input type='checkbox' name='refund' id='checkTable' />
                      <label
                        htmlFor='refund'
                        className='grow-2 font-caption1-semibold'
                      >
                        캠핑장 이용 취소/환불 규정 동의
                        <span className='ml-2pxr text-error'>(필수)</span>
                      </label>
                      <IconArrowRightNon />
                    </li>
                    <li className='flex justify-between gap-4pxr'>
                      <input type='checkbox' name='private' id='checkTable' />
                      <label
                        htmlFor='private'
                        className='grow-2 font-caption1-semibold'
                      >
                        개인정보 수집 및 이용 동의
                        <span className='ml-2pxr text-error'>(필수)</span>
                      </label>
                      <IconArrowRightNon />
                    </li>
                    <li className='flex justify-between gap-4pxr'>
                      <input
                        type='checkbox'
                        name='thirdPerson'
                        id='checkTable'
                      />
                      <label
                        htmlFor='thirdPerson'
                        className='grow-2 font-caption1-semibold'
                      >
                        개인정보 제 3자 제공 동의
                        <span className='ml-2pxr text-error'>(필수)</span>
                      </label>
                      <IconArrowRightNon />
                    </li>
                  </ul>
                </div>
                <Button.Round
                  size='sm'
                  custom='w-full hidden tabletMin:flex-center !h-56pxr'
                >
                  결제하기
                </Button.Round>
              </div>
            </div>
          </section>
        </main>
        <div className='fixed bottom-8pxr left-0pxr w-full bg-white px-20pxr py-16pxr shadow-reserve tabletMin:hidden'>
          <Button.Round size='sm' custom='w-full !h-56pxr'>
            결제하기
          </Button.Round>
        </div>
      </div>
    </>
  );
}

export default Page;
