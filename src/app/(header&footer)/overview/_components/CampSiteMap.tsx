import Image from 'next/image';
interface CampSiteMapProps {
  isRef: React.RefObject<HTMLDivElement>;
  id: string;
}
function CampSiteMap({ isRef, id }: CampSiteMapProps) {
  return (
    <div
      className='flex scroll-mt-168pxr flex-col gap-16pxr'
      ref={isRef}
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
    </div>
  );
}

export default CampSiteMap;
