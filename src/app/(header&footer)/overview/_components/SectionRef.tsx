interface SectionRefProps {
  children: React.ReactNode;
  sectionRef: (el: HTMLDivElement | null) => void;
  id: string;
}

function SectionRef({ children, sectionRef, id }: SectionRefProps) {
  return (
    <div ref={sectionRef} id={id} className='scroll-mt-168pxr'>
      {children}
    </div>
  );
}

export default SectionRef;
