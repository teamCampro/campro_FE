'use client';

import { useEffect, useRef, ReactNode } from 'react';

export default function ModalOutside({
  children,
  onClose,
  page,
  custom,
}: {
  children?: ReactNode;
  onClose: () => void;
  page?: string;
  custom?: string;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  const modalOutSideClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
    };

    const currentModalRef = modalRef.current;

    if (currentModalRef) {
      document.body.style.overflow = 'hidden';
      currentModalRef.addEventListener('scroll', handleScroll, {
        capture: false,
        passive: false,
      });
    }

    return () => {
      if (currentModalRef) {
        document.body.style.overflow = '';
        currentModalRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div onClick={modalOutSideClick}>
      <div
        ref={modalRef}
        className={`fixed ${page === 'search' ? 'mobile:left-0pxr mobile:top-0pxr' : 'mobile:bottom-0pxr mobile:left-0pxr'} h-screen w-full mobile:fixed   mobile:z-[99] mobile:flex mobile:h-screen mobile:w-full mobile:items-end mobile:overflow-hidden mobile:bg-black-50 ${custom && custom}`}
      >
        {children}
      </div>
    </div>
  );
}
