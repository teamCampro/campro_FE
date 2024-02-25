import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

function ModalHeader({ children }: Props) {
  return (
    <div className=' flex-center w-full rounded-t-[16px] border border-b-gray300 bg-white px-20pxr py-16pxr text-gray-600 font-body2-semibold mobile:z-[99]'>
      {children}
    </div>
  );
}
/* mobile:relative */
export default ModalHeader;
