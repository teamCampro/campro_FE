import CampImage from '../_components/CampImage';
import CampSiteDetail from './_components/CampSiteDetail';
import CampSiteList from './_components/CampSiteList';

function page() {
  return (
    <>
      <div>
        <CampSiteList />
        <CampSiteDetail />
      </div>
      <div className='flex-center h-screen w-full '>
        <CampImage />
      </div>
    </>
  );
}

export default page;
