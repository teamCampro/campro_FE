'use client';

import HeaderDropdown from '@/components/Header/_components/HeaderDropdown';
import { IconArrowLeftNon, IconPeople } from '@/public/svgs';

function ProfileHeader() {
  return (
    <div className='flex-center justify-between gap-10pxr border-b border-gray200 p-16pxr tabletMin:hidden'>
      <IconArrowLeftNon fill='#949494' className='text-gray500' />
      <h2 className='font-title1-bold'>예약내역</h2>
      <HeaderDropdown />
    </div>
  );
}

export default ProfileHeader;
