import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

function ModalFooter({ children }: Props) {
  return (
    <div className=' flex-center  w-full bg-white  px-20pxr py-24pxr mobile:relative mobile:z-[99] '>
      {children}
    </div>
  );
}

export default ModalFooter;
