import useMediaQueries from '@/hooks/useMediaQueries';
import { ReactNode } from 'react';

import {
  ModalPortal,
  ModalOutside,
  ModalMainContent,
  ModalLayout,
  ModalHeader,
  ModalFooter,
} from '..';

function ModalForMobile({
  children,
  headerContent,
  footerContent,
  onClose,
  custom,
  type,
}: {
  children: ReactNode;
  headerContent?: string;
  footerContent?: ReactNode;
  onClose: () => void;
  custom?: string;
  type?: string;
}) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;
  return isMobile ? (
    <ModalPortal>
      <ModalOutside onClose={onClose} custom={custom}>
        <ModalLayout>
          <ModalHeader>{headerContent}</ModalHeader>
          <ModalMainContent>{children}</ModalMainContent>
          <ModalFooter>{footerContent}</ModalFooter>
        </ModalLayout>
      </ModalOutside>
    </ModalPortal>
  ) : (
    <>{children}</>
  );
}

export default ModalForMobile;
