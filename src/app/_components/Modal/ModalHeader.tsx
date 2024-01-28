import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

function ModalHeader({ children }: Props) {
  return (
    <div className='flex-center w-full  rounded-t-[16px] border-b border-gray300 bg-white px-20pxr py-16pxr '>
      {children}
    </div>
  );
}

export default ModalHeader;
