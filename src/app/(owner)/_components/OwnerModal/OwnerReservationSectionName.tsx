import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function OwnerReservationSectionName({ children }: Props) {
  return <h2 className='text-20pxr font-bold leading-8'>{children}</h2>;
}

export default OwnerReservationSectionName;
