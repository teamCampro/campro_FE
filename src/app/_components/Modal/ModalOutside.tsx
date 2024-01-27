import { ReactNode } from 'react';

export default function ModalOutside({ children }: { children?: ReactNode }) {
  return (
    <div className='left-0 top-0 z-5 flex-center fixed h-screen w-screen bg-black bg-opacity-70'>
      {children}
    </div>
  );
}
