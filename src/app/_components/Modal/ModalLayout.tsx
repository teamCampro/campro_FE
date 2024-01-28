import { ReactNode } from 'react';

function ModalLayout({ children }: { children: ReactNode }) {
  return <div className='flex w-full flex-col'>{children}</div>;
}

export default ModalLayout;
