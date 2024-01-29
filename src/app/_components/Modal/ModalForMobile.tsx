import ModalHeader from './ModalHeader';
import ModalMainContent from './ModalMainContent';
import ModalOutside from './ModalOutside';
import ModalPortal from './ModalPortal';
import ModalFooter from './ModalFooter';
import { ReactNode } from 'react';
import useMediaQueries from '@/hooks/useMediaQueries';
import ModalLayout from './ModalLayout';
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
  const isMobile =
    typeof window !== 'undefined'
      ? useMediaQueries({ breakpoint: 767 })?.mediaQuery.matches
      : false;
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
