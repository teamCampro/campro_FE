import useMediaQueries from '@/hooks/useMediaQueries';
import { IconCall, IconLocation, IconStar } from '@/public/svgs';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface SiteInfoType {
  [key: string]: string;
  size: 'mobile' | 'pc' | 'profile';
}

interface SizeOptionType {
  mobile: string;
  pc: string;
  profile: string;
}

const SIZE_OPTION: SizeOptionType = {
  mobile: 'tabletMin:hidden flex',
  pc: 'tabletMin:flex hidden',
  profile: 'flex',
};

function SiteInfo({ size }: SiteInfoType) {
  const pathName = usePathname();
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;
  const isProfile = pathName.includes('reserveList');
  return (
    <div
      className={`border-bg-gray300 flex-col gap-24pxr border-b ${SIZE_OPTION[size]}`}
    >
      <figure className='flex-center justify-start gap-16pxr tabletMin:gap-24pxr'>
        {/* <div className='relative h-140pxr w-140pxr rounded-xl border'> */}
        <Image
          src='https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbXBpbmd8ZW58MHwwfDB8fHww'
          width={140}
          height={140}
          alt='캠핑장 사이트 이미지'
          className='rounded-xl'
        />
        {/*    </div> */}
        <div className='flex flex-col'>
          <h3 className='text-gray800 font-title2-semibold'>자연숲 캠핑장</h3>
          <small className='flex text-gray500 font-caption2-medium'>
            <div className='h-16pxr w-16pxr'>
              <IconStar width='100%' height='100%' viewBox='0 0 24 24' />
            </div>
            <span>9.8 (257)</span>
          </small>
          <ul className='mt-20pxr flex flex-col gap-8pxr'>
            <li className='flex  gap-4pxr '>
              <h3 className='flex-center  h-22pxr justify-start !leading-none text-gray600 font-body2-medium'>
                <span className='inline-block h-20pxr w-20pxr'>
                  <IconLocation
                    width='100%'
                    height='100%'
                    viewBox='0 0 24 24'
                    fill='#949494'
                  />
                </span>
                <div className='reserve-lineOver'>
                  충남 아산시 배방읍 솔치로 17-32
                </div>
              </h3>
            </li>
            <li className='flex gap-4pxr'>
              <h3 className='flex-center justify-start !leading-none text-gray600 font-body2-medium '>
                <span className='inline-block h-20pxr w-20pxr'>
                  <IconCall
                    width='100%'
                    height='100%'
                    viewBox='0 0 24 24'
                    fill='#949494'
                  />
                </span>
                042-123-4567
              </h3>
            </li>
          </ul>
        </div>
      </figure>
      <ul className='flex flex-col gap-12pxr pb-24pxr'>
        <li className='flex-center justify-start gap-16pxr text-gray500 font-body2-semibold'>
          예약 사이트
          <span className='flex-center gap-4pxr text-gray700 font-body1'>
            A사이트 | <h4 className='font-body1-bold'>A1-08</h4>
            <div className='text-second100 underline font-body2-semibold'>
              배치도
            </div>
          </span>
        </li>
        <li className='flex-center justify-start gap-28pxr text-gray500 font-body2-semibold'>
          기준 인원
          <span className='text-gray700 font-body1'>최대 2인</span>
        </li>
      </ul>
    </div>
  );
}

export default SiteInfo;
