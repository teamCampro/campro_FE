'use client';

import { CampPlaceSection, CategoryList, Hero } from '@/components/index';
import { useEffect, useState } from 'react';
import { getMainCampList } from '../_data/main/campList';
import { CampZoneData } from './_components/CampPlaceSection';
import { useAppSelector } from '@/hooks/redux';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../_data/sign/getUserInfo';

interface SearchParamsType {
  searchParams: {
    [key: string]: string;
  };
}
export interface UserInfo {
  name: string;
  email: string;
  tel: string;
  role: string;
  nickname: string;
  onboard: string;
}
function Page({ searchParams }: SearchParamsType) {
  const [data, setData] = useState<CampZoneData | null>(null);

  const logoutState = useAppSelector((state) => state.profile);

  useEffect(() => {
    const fetch = async () => {
      const res = await getMainCampList();

      setData(res);
    };
    fetch();
  }, [logoutState]);

  return (
    <div>
      <Hero searchParams={searchParams} />
      <div className='flex w-full flex-col bg-gray-100 pt-104pxr '>
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
