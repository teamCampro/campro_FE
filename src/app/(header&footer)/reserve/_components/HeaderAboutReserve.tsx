'use client';
import { IconArrowLeftNon, IconNavigationLeft } from '@/public/svgs';
import { useRouter } from 'next/navigation';
function HeaderAboutReserve() {
  const router = useRouter();
  return (
    <div className='mb-16pxr flex flex-col gap-32pxr '>
      <h2 className='text-block hidden justify-start gap-12pxr font-title3-semibold tabletMin:flex tabletMin:items-center tabletMin:justify-start tabletMin:font-h1-semibold'>
        <div className=' flex-center !h-48pxr !w-56pxr cursor-pointer  rounded-full border border-gray300 bg-white'>
          <div className='h-24pxr w-24pxr'>
            <IconArrowLeftNon
              width='100%'
              height='100%'
              viewBox='0 0 24 24'
              onClick={() => router.back()}
            />
          </div>
        </div>
        예약 요청
      </h2>
      <span className='text-second100 font-body1-bold'>
        예약 전, 운영 정책을 반드시 확인해 주세요!
      </span>
    </div>
  );
}

export default HeaderAboutReserve;
