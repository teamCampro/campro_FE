import Category from '@/components/Category';
import React from 'react';
import SectionTitle from './SectionTitle';

interface CampSiteFacilitiesProps {
  sectionRef: React.RefObject<HTMLDivElement>;
  id: string;
}

function CampSiteFacilities({ sectionRef, id }: CampSiteFacilitiesProps) {
  return (
    <section
      className='flex scroll-mt-168pxr flex-col gap-16pxr'
      id={id}
      ref={sectionRef}
    >
      <SectionTitle>시설/환경</SectionTitle>
      <Category />
    </section>
  );
}

export default CampSiteFacilities;
