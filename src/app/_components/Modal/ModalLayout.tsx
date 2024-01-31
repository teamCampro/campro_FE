import { ReactNode } from 'react';

function ModalLayout({ children }: { children: ReactNode }) {
  return (
    <div className=' flex  w-full flex-col mobile:relative mobile:z-[99]'>
      {children}
    </div>
  );
}

export default ModalLayout;
