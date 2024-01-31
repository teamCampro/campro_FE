import { useEffect, useRef,ReactNode } from 'react';


export default function ModalOutside({
  children,
  onClose,
}: {
  children?: ReactNode;
  onClose: () => void;
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
        className=' fixed mobile:fixed  mobile:bottom-0pxr mobile:left-0pxr mobile:z-[99] mobile:flex mobile:h-screen mobile:w-full mobile:items-end mobile:overflow-hidden mobile:bg-black-50'
      >
        {children}
      </div>
    </div>
  );
}
