import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

function ModalFooter({ children }: Props) {
  return (
    <div className='flex-center bg-white px-20pxr py-24pxr '>{children}</div>
  );
}

export default ModalFooter;
