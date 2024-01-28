// import { ReactNode } from 'react';

// export default function ModalOutside({ children }: { children?: ReactNode }) {
//   return (
//     <div className='z-99 fixed bottom-0pxr left-0pxr flex h-screen w-full items-end bg-black-50'>
//       {children}
//     </div>
//   );
// }

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

  return (
    <div onClick={modalOutSideClick}>
      <div
        ref={modalRef}
        className='z-99 fixed bottom-0pxr left-0pxr flex h-screen w-full items-end bg-black-50'
      >
        {children}
      </div>
    </div>
  );
}
