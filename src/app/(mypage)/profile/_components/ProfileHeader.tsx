'use client';

import HeaderDropdown from '@/components/Header/_components/HeaderDropdown';
import { IconArrowLeftNon, IconPeople } from '@/public/svgs';
import { useRouter } from 'next/navigation';

function ProfileHeader() {
  const router = useRouter();
  return (
    <div className='flex-center justify-between gap-10pxr border-b border-gray200 p-16pxr tabletMin:hidden'>
      <button type='button' onClick={() => router.back()}>
        <IconArrowLeftNon fill='#949494' className=' text-gray500' />
      </button>
      <h2 className='font-title1-bold'>예약내역</h2>
      <HeaderDropdown />
    </div>
  );
}

export default ProfileHeader;
