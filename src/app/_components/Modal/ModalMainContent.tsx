import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function ModalMainContent({ children }: Props) {
  return <div className='flex-center w-full  '>{children}</div>;
}

export default ModalMainContent;
