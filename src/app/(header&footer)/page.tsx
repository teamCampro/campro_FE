import { SearchBar } from '../_components';
import CampPlaceSection from './_components/CampPlaceSection';
function page() {
  return (
    <div className=' flex-center flex w-full'>
      <SearchBar />
      <div className='wide:flex-center'>
        <CampPlaceSection />
      </div>
    </div>
  );
}

export default page;
