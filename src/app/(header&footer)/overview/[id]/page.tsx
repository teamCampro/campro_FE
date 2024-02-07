import CampImage from '../../_components/CampImage';
import MiniMapContainer from '../../_components/MiniMapContainer';

function page() {
  return (
    <div className='flex-center h-screen w-full '>
      <CampImage />
      <MiniMapContainer />
    </div>
  );
}

export default page;
