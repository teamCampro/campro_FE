interface CampSiteBookingInfoProps {
  openTime: string;
  mannerTimeStart: string;
  mannerTimeEnd: string;
  nextOpen: string;
}

function CampSiteBookingInfo({
  openTime,
  mannerTimeStart,
  mannerTimeEnd,
  nextOpen,
}: CampSiteBookingInfoProps) {
  return (
    <article className='flex flex-col gap-16pxr mobile:px-20pxr mobile359:px-16pxr'>
      <h2 className='text-black font-title2-semibold'>예약 안내</h2>
      <ul className='flex flex-col gap-4pxr rounded-xl bg-white px-24pxr py-20pxr text-gray600 shadow-overView font-body2-medium'>
        <li>
          · 매너 타임 :{' '}
          <span>
            {mannerTimeStart} - {mannerTimeEnd}
          </span>
        </li>
        <li>
          · 오픈 주기 : <span>{openTime}</span>
        </li>
        <li>
          · 다음 예약 오픈일 : <span>{nextOpen}</span>
        </li>
      </ul>
    </article>
  );
}

export default CampSiteBookingInfo;
