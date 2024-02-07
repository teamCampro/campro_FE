import CampImage from '../../_components/CampImage';
import MiniMapContainer from '../../_components/MiniMapContainer';
import CampSiteDetail from '../_components/CampSiteDetail';
import CampSiteList from '../_components/CampSiteList';

function page() {
  return (
    <div className='flex-center h-screen w-full '>
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
