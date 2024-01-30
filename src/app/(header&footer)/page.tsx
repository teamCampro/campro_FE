import { Hero, CampPlaceSection, SearchBar } from '../_components';
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
