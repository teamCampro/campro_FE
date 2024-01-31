'use client';

import { IconFilter } from '@/public/svgs';
import DetailPanel from './_components/DetailPanel';
import useMediaQueries from '@/hooks/useMediaQueries';

function Page() {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : false;
  return (
    <div className='h-screen w-full bg-gray-500'>
      {isMobile ? (
        <div className='flex-center h-48pxr w-56pxr cursor-pointer  gap-4pxr rounded-full border bg-white  font-medium'>
          <IconFilter />
        </div>
      ) : (
        <DetailPanel />
      )}
    </div>
  );
}

export default Page;
