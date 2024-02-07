import CampImage from '../../_components/CampImage';
import MiniMapContainer from '../../_components/MiniMapContainer';
import CampSiteDetail from '../_components/CampSiteDetail';
import CampSiteList from '../_components/CampSiteList';
import SearchBarForOverview from '@/components/SearchBar/SearchBarForOverview';
function page() {
  return (
    <div className='flex h-screen w-full flex-col '>
      <SearchBarForOverview />
      <CampImage />
      <MiniMapContainer />
      <div>
        <CampSiteList />
        <CampSiteDetail />
      </div>
    </div>
  );
}

export default page;
