import { Hero, CampPlaceSection, SearchBar } from '../_components';
function page() {
  return (
    <div>
      <Hero />
      <div className=' flex-center flex w-full'>
        <SearchBar />
      </div>
      <div className='wide:flex-center'>
        <CampPlaceSection />
      </div>
    </div>
  );
}

export default page;
