function CampSiteBookingInfo() {
  const booking = {
    mannerTime: '22:00 - 08:00',
    openCycle: '매원 2일 6시 (2개원 단위',
    newBookingOpen: '2024.03.02일 오전 10시',
  };

  return (
    <>
      <h2 className='text-black font-body1-bold'>예약 안내</h2>
      <ul className='flex flex-col gap-4pxr rounded-xl bg-white px-24pxr py-20pxr font-medium text-gray600 shadow-overView font-body2'>
        <li>
          · 매너 타임 : <span>{booking.mannerTime}</span>
        </li>
        <li>
          · 오픈 주기 : <span>{booking.openCycle}</span>
        </li>
        <li>
          · 다음 예약 오픈일 : <span>{booking.newBookingOpen}</span>
        </li>
      </ul>
    </>
  );
}

export default CampSiteBookingInfo;