import React from 'react';
import OwnerReservationSection from './OwnerReservationSection';
import OwnerReservationSectionContent from './OwnerReservationSectionContent';
import OwnerReservationAdditionalOptionCard from './OwnerReservationAdditionalOptionCard';
import OwnerReservationPayment from './OwnerReservationPayment';
import formattedDate from '../../_utils/formattedDate';

export interface AdditionalOptionType {
  name: string;
  price: number;
  amount: number;
}

interface Props {
  reservationDetailInfo: {
    adult: number;
    child: number;
    stayStartAt: string;
    stayEndAt: string;
    pet: number;
    czSiteName: string;
    userName: string;
    userPhone: string;
    carInfo: string;
    reservedAt: string;
    payMethod: string;
    campingZoneSitePrice: number;
    stayNights: number;
    selectedAdditionalOptionResult: AdditionalOptionType[];
  };
}

function OwnerModalContent({ reservationDetailInfo }: Props) {
  const {
    adult,
    carInfo,
    stayStartAt,
    stayEndAt,
    child,
    czSiteName,
    pet,
    reservedAt,
    userName,
    userPhone,
    campingZoneSitePrice,
    payMethod,
    stayNights,
    selectedAdditionalOptionResult,
  } = reservationDetailInfo;

  console.log(reservationDetailInfo);
  const date = String(new Date(reservedAt));
  const formattedReservedAt = formattedDate(date);
  const newDate = new Date();
  const paymentDate = String(newDate.getFullYear()) + '.' + formattedReservedAt;
  const carNumber = JSON.parse(JSON.parse(carInfo));

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
            content={`${formattedDate(stayStartAt)} - ${formattedDate(stayEndAt)}`}
          />
          <OwnerReservationSectionContent
            label='반려동물'
            content={`${pet}마리`}
          />
          <OwnerReservationSectionContent label='사이트' content={czSiteName} />
        </OwnerReservationSection>
        <OwnerReservationSection sectionName='예약자 정보'>
          <OwnerReservationSectionContent label='예약자명' content={userName} />
          <OwnerReservationSectionContent
            label='휴대폰 번호'
            content={userPhone}
          />
        </OwnerReservationSection>
        <OwnerReservationSection sectionName='차량'>
          {carNumber.map((carNumber: string, index: number) => (
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
              {selectedAdditionalOptionResult.map((option, index) => (
                <OwnerReservationAdditionalOptionCard
                  optionName={option.name}
                  quantity={option.amount}
                  key={index}
                />
              ))}
            </div>
          </div>
        </OwnerReservationSection>
        <OwnerReservationPayment
          stayNights={stayNights}
          czSitePrice={campingZoneSitePrice}
          additionalOptions={selectedAdditionalOptionResult}
        />
      </div>
    </div>
  );
}

export default OwnerModalContent;
