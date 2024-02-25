import { CampPlaceSection, CategoryList, Hero } from '@/components/index';
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
      <div className='flex w-full flex-col bg-gray-100  pt-104pxr '>
        <div className='flex-center pl-40pxr mobile:pl-16pxr'>
          <CategoryList />
        </div>
        <div className='wide:flex-center pb-48pxr pl-40pxr pt-64pxr mobile:pl-0pxr'>
          <CampPlaceSection data={data} />
        </div>
      </div>
    </div>
  );
}

export default Page;
