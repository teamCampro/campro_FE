import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

function ModalHeader({ children }: Props) {
  return (
    <div className=' flex-center w-full rounded-t-[16px] bg-white px-20pxr py-16pxr  mobile:z-[99] '>
      {children}
    </div>
  );
}
/* mobile:relative */
export default ModalHeader;
