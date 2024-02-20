import axios from 'axios';
import { CampPlaceSection, CategoryList, Header, Hero } from '../_components';
import { getMainCampList } from '../_data/main/campList';

interface SearchParamsType {
  searchParams: {
    [key: string]: string;
  };
}

async function Page({ searchParams }: SearchParamsType) {
  const data = await getMainCampList();
  return (
    <div>
      <Hero searchParams={searchParams} />
      <div className='flex w-full flex-col bg-gray-100 pl-40pxr pt-104pxr mobile:pl-16pxr'>
        <div className='flex-center'>
          <CategoryList />
        </div>
        <div className='wide:flex-center pb-48pxr pt-64pxr'>
          <CampPlaceSection data={data} />
        </div>
      </div>
    </div>
  );
}

export default Page;
