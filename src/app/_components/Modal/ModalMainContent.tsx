import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function ModalMainContent({ children }: Props) {
  return <div className='flex-center px-20pxr pt-16pxr '>{children}</div>;
}

export default ModalMainContent;
