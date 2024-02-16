'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import { ReactNode } from 'react';

import { ModalPortal, ModalOutside } from '..';

function ModalForSearchBar({
  children,
  onClose,
  custom,
  isTotalClick,
  open,
}: {
  children: ReactNode;
  onClose: () => void;
  custom?: string;
  isTotalClick?: boolean;
  open?: boolean;
}) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  return open && mobileMediaQuery ? (
    <ModalPortal>
      <ModalOutside onClose={onClose} custom={custom} page='search'>
        {children}
      </ModalOutside>
    </ModalPortal>
  ) : (
    <>{children}</>
  );
}

export default ModalForSearchBar;
