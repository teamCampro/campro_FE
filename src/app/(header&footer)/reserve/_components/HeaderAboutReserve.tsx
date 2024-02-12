import CircleButton from '@/components/Button/CircleButton';
import { IconNavigationLeft } from '@/public/svgs';

function HeaderAboutReserve() {
  return (
    <div className='mb-16pxr flex flex-col gap-32pxr '>
      <h2 className='text-block hidden justify-start gap-12pxr font-title3-semibold tabletMin:flex tabletMin:items-center tabletMin:justify-start tabletMin:font-h1-semibold'>
        <button className=' flex-center !h-48pxr !w-56pxr rounded-[999px] border  border-gray300 bg-white py-12pxr pl-12pxr pr-16pxr  hover:bg-primary50'>
          <IconNavigationLeft />
        </button>
        예약 요청
      </h2>
      <span className='text-second100 font-body1-bold'>
        예약 전, 운영 정책을 반드시 확인해 주세요!
      </span>
    </div>
  );
}

export default HeaderAboutReserve;
