'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import { IconArrowLeftNon, IconPeople } from '@/public/svgs';

function ProfileHeader() {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;
  return (
    <div className='flex-center justify-between gap-10pxr border-b border-gray200 p-16pxr tabletMin:hidden'>
      <IconArrowLeftNon fill='#949494' className='text-gray500' />
      <h2 className='font-title1-bold'>예약내역</h2>
      <IconPeople fill='black' />
    </div>
  );
}

export default ProfileHeader;
