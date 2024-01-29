import { useEffect } from 'react';

import { ReactNode } from 'react';
import { useRef } from 'react';
export default function ModalOutside({
  children,
  onClose,
}: {
  children?: ReactNode;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  const modalOutSideClick = (e: React.MouseEvent<HTMLElement>) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
    };

    if (modalRef.current) {
      document.body.style.overflow = 'hidden';
      modalRef.current.addEventListener('scroll', handleScroll, {
        capture: false,
        passive: false,
      });
    }

    return () => {
      if (modalRef.current) {
        document.body.style.overflow = '';
        modalRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div onClick={modalOutSideClick}>
      <div
        ref={modalRef}
        className=' fixed mobile:fixed  mobile:bottom-0pxr mobile:left-0pxr mobile:z-[99] mobile:flex mobile:h-screen mobile:w-full mobile:items-end mobile:overflow-hidden mobile:bg-black-50'
      >
        {children}
      </div>
    </div>
  );
}
