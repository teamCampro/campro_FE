'use client';

import Image from 'next/image';
import { useState } from 'react';
import ModalForPlanImage from '../../reserve/_components/ModalForPlanImage';
interface CampSiteMapProps {
  planImage: string;
}
function CampSiteMap({ planImage }: CampSiteMapProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);
  return (
    <section className='flex flex-col gap-16pxr'>
      <h3 className='text-black font-body1-bold mobile:px-20pxr mobile:font-title3-bold mobile359:px-16pxr'>
        배치도
      </h3>
      <div>
        <Image
          onClick={openModal}
          className='max-h-520pxr max-w-980pxr cursor-pointer rounded-2xl mobile:aspect-320/220 mobile:rounded-none'
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
      {isOpenModal && (
        <ModalForPlanImage onClose={closeModal} planImage={[planImage]} />
      )}
    </section>
  );
}

export default CampSiteMap;
