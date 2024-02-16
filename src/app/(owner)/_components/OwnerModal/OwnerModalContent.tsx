import React from 'react';
import OwnerModalWrapper from './OwnerModalWrapper';
import OwnerReservationSection from './OwnerReservationSection';
import OwnerReservationSectionContent from './OwnerReservationSectionContent';
import OwnerReservationAdditionalOptionCard from './OwnerReservationAdditionalOptionCard';
import OwnerReservationPayment from './OwnerReservationPayment';

function OwnerModalContent() {
  return (
    <div className='flex'>
      <div className='flex w-296pxr flex-col gap-44pxr'>
        <OwnerReservationSection sectionName='예약 정보'>
          <OwnerReservationSectionContent
            label='인원'
            content='성인 99명, 아이 99명'
          />
          <OwnerReservationSectionContent
            label='일정'
            content='12.29(토) - 12.29(토)'
          />
          <OwnerReservationSectionContent label='반려동물' content='1마리' />
          <OwnerReservationSectionContent
            label='사이트'
            content='A 사이트 | A1-08'
          />
        </OwnerReservationSection>
        <OwnerReservationSection sectionName='예약자 정보'>
          <OwnerReservationSectionContent label='예약자명' content='홍길동' />
          <OwnerReservationSectionContent
            label='휴대폰 번호'
            content='010-1234-5678'
          />
        </OwnerReservationSection>
        <OwnerReservationSection sectionName='차량'>
          <OwnerReservationSectionContent label='차량' content='가나1234567' />
        </OwnerReservationSection>

        <OwnerReservationSection sectionName='결제 정보'>
          <OwnerReservationSectionContent
            label='결제 일시'
            content='2024.02.12(월) 12:45'
          />
          <OwnerReservationSectionContent
            label='결제 수단'
            content='현대 ****-****-**21'
          />
        </OwnerReservationSection>
      </div>
      <div className='flex flex-col gap-16pxr'>
        <OwnerReservationSection sectionName='추가 옵션'>
          <div className='flex-center h-232pxr overflow-y-scroll'>
            <div className='grid h-232pxr w-232pxr grid-cols-2 place-items-center gap-x-15pxr gap-y-22pxr'>
              <OwnerReservationAdditionalOptionCard
                optionName='숯불세트'
                quantity={2}
              />
              <OwnerReservationAdditionalOptionCard
                optionName='이불세트'
                quantity={3}
              />
              <OwnerReservationAdditionalOptionCard
                optionName='욕실세트'
                quantity={1}
              />
              <OwnerReservationAdditionalOptionCard
                optionName='장작세트'
                quantity={5}
              />
              <OwnerReservationAdditionalOptionCard
                optionName='장작세트'
                quantity={5}
              />
              <OwnerReservationAdditionalOptionCard
                optionName='장작세트'
                quantity={5}
              />
            </div>
          </div>
        </OwnerReservationSection>
        <OwnerReservationPayment />
      </div>
    </div>
  );
}

export default OwnerModalContent;
