import useMediaQueries from '@/hooks/useMediaQueries';
import { ReactNode } from 'react';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalLayout from './ModalLayout';
import ModalMainContent from './ModalMainContent';
import ModalOutside from './ModalOutside';
import ModalPortal from './ModalPortal';
function ModalForMobile({
  children,
  headerContent,
  footerContent,
  onClose,
}: {
  children: ReactNode;
  headerContent?: string;
  footerContent: ReactNode;
  onClose: () => void;
}) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;
  return isMobile ? (
    <ModalPortal>
      <ModalOutside onClose={onClose}>
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
