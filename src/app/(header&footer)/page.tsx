'use client';

import { Hero, CampPlaceSection } from '../_components';

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
