'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import { IconArrowLeftNon, IconClose } from '@/public/svgs';
function ModalAboutHeader({
  onClose,
  title,
}: {
  onClose: () => void;
  title: string;
}) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;
  return (
    <div className=' relative mb-16pxr flex w-full items-center justify-center px-20pxr mobile:px-0pxr'>
      <button
        type='button'
        className='absolute left-24pxr  flex items-center justify-center mobile:left-16pxr'
        onClick={onClose}
      >
        {isMobile ? (
          <IconArrowLeftNon fill='#949494' />
        ) : (
          <IconClose fill='#949494' />
        )}
      </button>
      <p className='flex-center w-full text-black font-title1-bold'>{title}</p>
    </div>
  );
}

export default ModalAboutHeader;
