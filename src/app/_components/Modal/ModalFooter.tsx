import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

function ModalFooter({ children }: Props) {
  return (
    <div className=' flex-center w-full bg-white px-20pxr py-24pxr  mobile:z-[99] mobile:px-20pxr mobile:py-16pxr'>
      {children}
    </div>
  );
}

export default ModalFooter;
