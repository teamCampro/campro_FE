import { Hero, CampPlaceSection, CategoryList } from '../_components';
import { LINKS } from '../_constants';
function page() {
  return (
    <div>
      <Hero />
      <div className='flex w-full flex-col bg-gray-100 pl-40pxr pt-104pxr'>
        <div className='flex-center'>
          <CategoryList />
        </div>
        <div className='wide:flex-center pb-48pxr pt-64pxr'>
          <CampPlaceSection />
        </div>
      </div>
    </div>
  );
}

export default page;
