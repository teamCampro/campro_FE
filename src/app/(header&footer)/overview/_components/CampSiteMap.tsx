import Image from 'next/image';
interface CampSiteMapProps {
  sectionRef: React.RefObject<HTMLDivElement>;
  id: string;
}
function CampSiteMap({ sectionRef, id }: CampSiteMapProps) {
  return (
    <section
      className='flex scroll-mt-168pxr flex-col gap-16pxr'
      ref={sectionRef}
      id={id}
    >
      <h3 className='text-black font-body1-bold mobile:px-20pxr mobile:font-title3-bold mobile359:px-16pxr'>
        배치도
      </h3>
      <div>
        <Image
          className='rounded-2xl mobile:aspect-320/220 mobile:rounded-none'
          src={'/avifs/map.avif'}
          alt='배치도'
          width={174}
          height={174}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </section>
  );
}

export default CampSiteMap;
