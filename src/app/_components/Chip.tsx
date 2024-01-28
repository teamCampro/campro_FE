import { ReactNode } from 'react';

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className='inline-block rounded-full bg-second50 px-12pxr py-4pxr text-second100 font-caption2-semibold'>
      {children}
    </span>
  );
}

export default Chip;
