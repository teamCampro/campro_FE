import { useAppSelector } from '@/hooks/redux';

function InfoAboutReserve() {
  const reserveInfo = useAppSelector((state) => state.reserveInfo);
  return (
    <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
      <h3 className='text-black font-title3-semibold tabletMin:font-title1-semibold'>
        예약 정보
      </h3>
      <ul className='flex flex-col gap-16pxr'>
        <li className='flex items-center justify-start gap-53pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
          인원
          <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
            {reserveInfo
              ? `성인${reserveInfo.adult}명, 아이 ${reserveInfo.child}명`
              : '성인 0명, 아이 0명'}
          </span>
        </li>
        <li className='flex items-center justify-start gap-53pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
          일정
          <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
            {reserveInfo.dates}
          </span>
        </li>
        <li className='flex items-center justify-start gap-53pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
          애견
          <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
            {reserveInfo ? `${reserveInfo.pet}마리` : '0마리'}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default InfoAboutReserve;
