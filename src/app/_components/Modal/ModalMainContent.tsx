import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function ModalMainContent({ children }: Props) {
  return <div className='flex-center w-full  mobile:z-[99] '>{children}</div>;
}

export default ModalMainContent;
