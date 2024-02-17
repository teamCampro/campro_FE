import React, { ReactNode } from 'react';
import OwnerReservationSectionName from './OwnerReservationSectionName';

interface Props {
  sectionName: string;
  children: ReactNode;
}

function OwnerReservationSection({ sectionName, children }: Props) {
  return (
    <section className='flex flex-col gap-14pxr'>
      <OwnerReservationSectionName>{sectionName}</OwnerReservationSectionName>
      {children}
    </section>
  );
}

export default OwnerReservationSection;
