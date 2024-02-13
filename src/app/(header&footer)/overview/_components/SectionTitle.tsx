import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  id?: string;
}

function SectionTitle({ children, id }: SectionTitleProps) {
  return (
    <h2
      className='text-black font-title2-semibold mobile:font-title3-bold'
      id={id}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
