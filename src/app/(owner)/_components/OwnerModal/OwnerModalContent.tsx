import React from 'react';
import OwnerReservationSection from './OwnerReservationSection';
import OwnerReservationSectionContent from './OwnerReservationSectionContent';
import OwnerReservationAdditionalOptionCard from './OwnerReservationAdditionalOptionCard';
import OwnerReservationPayment from './OwnerReservationPayment';
import formattedDate from '../../_utils/formattedDate';

interface AdditionalOptionType {
  name: string;
  price: number;
}

interface ReservationDetailInfo {
  campingZoneName: string;
  address: string;
  campingZoneTel: string;
  campingZoneSiteName: string;
  maxPeople: number;
  campingZoneSitePrice: number;
  adult: number;
  child: number;
  pet: number;
  stayStartAt: string;
  stayEndAt: string;
  carInfo: string;
  reservedAt: string;
  payMethod: string;
  status: string;
  userName: string;
  userPhone: string;
  planImage: string;
  siteImage: string;
  additionalOptions: AdditionalOptionType[];
}

interface Props {
  reservationDetailInfo: {
    adult: number;
    carInfo: string;
    child: number;
    czSiteName: string;
    pet: number;
    reservedAt: string;
    selectedAdditionalOptionResult: AdditionalOptionType[];
    userName: string;
    userPhone: string;
    payMethod: string;
  };
}

function OwnerModalContent({ reservationDetailInfo }: Props) {
  const {
    adult,
    carInfo,
    child,
    czSiteName,
    pet,
    reservedAt,
    selectedAdditionalOptionResult,
    userName,
    userPhone,
    payMethod,
  } = reservationDetailInfo;
  console.log(carInfo, JSON.parse(carInfo));

  const date = String(new Date(reservedAt));
  const paymentDate = formattedDate(date);
  return (
    <div className='flex'>
      <div className='flex w-296pxr flex-col gap-44pxr'>
        <OwnerReservationSection sectionName='예약 정보'>
          <OwnerReservationSectionContent
            label='인원'
            content={`성인 ${adult}명, 아이 ${child}명`}
          />
          <OwnerReservationSectionContent
            label='일정'
            content='12.29(토) - 12.29(토)'
          />
          <OwnerReservationSectionContent
            label='반려동물'
            content={`${pet}마리`}
          />
          <OwnerReservationSectionContent
            label='사이트'
            content={`${czSiteName}`}
          />
        </OwnerReservationSection>
        <OwnerReservationSection sectionName='예약자 정보'>
          <OwnerReservationSectionContent label='예약자명' content='홍길동' />
          <OwnerReservationSectionContent
            label='휴대폰 번호'
            content={`${userPhone}`}
          />
        </OwnerReservationSection>
        <OwnerReservationSection sectionName='차량'>
          {JSON.parse(carInfo).map((carNumber: string, index: number) => (
            <OwnerReservationSectionContent
              key={index}
              label='차량'
              content={carNumber}
            />
          ))}
        </OwnerReservationSection>

        <OwnerReservationSection sectionName='결제 정보'>
          <OwnerReservationSectionContent
            label='결제 일시'
            content={`${paymentDate}`}
          />
          <OwnerReservationSectionContent
            label='결제 수단'
            content={`${payMethod}`}
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
