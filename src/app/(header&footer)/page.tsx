import { CampPlaceSection, CategoryList, Header, Hero } from '../_components';

interface SearchParamsType {
  searchParams: {
    [key: string]: string;
  };
}

async function Page({ searchParams }: SearchParamsType) {
  const getCampList = async () => {
    const response = await fetch(
      `http://localhost:3000/api/camping-zone/main-list`,
      {
        cache: 'no-store',
      },
    );
    return response.json();
  };

  const Data = await getCampList();

  return (
    <div>
      <Hero searchParams={searchParams} />
      <div className='flex w-full flex-col bg-gray-100 pl-40pxr pt-104pxr mobile:pl-16pxr'>
        <div className='flex-center'>
          <CategoryList />
        </div>
        <div className='wide:flex-center pb-48pxr pt-64pxr'>
          <CampPlaceSection data={Data} />
        </div>
      </div>
    </div>
  );
}

export default Page;
