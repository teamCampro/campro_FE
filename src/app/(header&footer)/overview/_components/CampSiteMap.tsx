import Image from 'next/image';
interface CampSiteMapProps {
  planImage: string;
}
function CampSiteMap({ planImage }: CampSiteMapProps) {
  return (
    <section className='flex flex-col gap-16pxr'>
      <h3 className='text-black font-body1-bold mobile:px-20pxr mobile:font-title3-bold mobile359:px-16pxr'>
        배치도
      </h3>
      <div>
        <Image
          className='rounded-2xl mobile:aspect-320/220 mobile:rounded-none'
          src={planImage}
          alt='배치도'
          priority
          width={980}
          height={520}
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
