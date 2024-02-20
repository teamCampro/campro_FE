interface SectionRefProps {
  children: React.ReactNode;
  sectionRef: (el: HTMLDivElement | null) => void;
  id: string;
  className?: string;
}

function SectionRef({ children, sectionRef, id, className }: SectionRefProps) {
  return (
    <div
      ref={sectionRef}
      id={id}
      className={`${className ? className : 'scroll-mt-159pxr'}`}
    >
      {children}
    </div>
  );
}

export default SectionRef;
