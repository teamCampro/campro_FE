import {
  CampPlaceSection,
  CategoryList,
  Hero,
  SearchBar,
} from '../_components';
function page() {
  return (
    <div>
      <Hero />
      <div className='flex-center flex w-full'>
        <SearchBar />
      </div>
      <div className='wide:flex-center'>
        <CategoryList />
      </div>

      <div className='wide:flex-center'>
        <CampPlaceSection />
      </div>
    </div>
  );
}

export default page;
