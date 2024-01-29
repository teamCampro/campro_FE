'use client';

import { Hero } from '../_components';

import CampPlaceSection from './_components/CampPlaceSection';

function page() {
  return (
    <div>
      <Hero />

      <div className='wide:flex-center'>
        <CampPlaceSection />
      </div>
    </div>
  );
}

export default page;
