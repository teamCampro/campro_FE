import useMediaQueries from '@/hooks/useMediaQueries';
import { ReactNode } from 'react';

import { ModalPortal, ModalOutside, ModalMainContent } from '..';

function ModalForSearch({
  children,
  onClose,
  page,
}: {
  children: ReactNode;
  onClose: () => void;
  page: string;
}) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;
  return isMobile ? (
    <ModalPortal>
      <ModalOutside onClose={onClose} page={page}>
        <ModalMainContent>{children}</ModalMainContent>
      </ModalOutside>
    </ModalPortal>
  ) : (
    <>{children}</>
  );
}

export default ModalForSearch;
