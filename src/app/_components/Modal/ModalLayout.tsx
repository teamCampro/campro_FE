import { useAppSelector } from '@/hooks/redux';
import useMediaQueries from '@/hooks/useMediaQueries';
import { ReactNode } from 'react';

function ModalLayout({ children }: { children: ReactNode }) {
  const isModal = useAppSelector((state) => state.isModal);
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  return (
    <div
      className={`bottom-0pxr flex w-full ${isModal && isMobile ? 'modal-up' : 'modal-down'} flex-col  mobile:z-[99]`}
    >
      {children}
    </div>
  );
}
/* mobile:relative */
export default ModalLayout;
