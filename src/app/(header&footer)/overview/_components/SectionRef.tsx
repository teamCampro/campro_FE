import { ReactNode } from 'react';

interface sectionRefProps {
  children: ReactNode;
  sectionRef: React.RefObject<HTMLDivElement>;
  id: string;
}

function SectionRef({ children, sectionRef, id }: sectionRefProps) {
  return (
    <div ref={sectionRef} id={id} className='scroll-mt-168pxr'>
      {children}
    </div>
  );
}

export default SectionRef;
