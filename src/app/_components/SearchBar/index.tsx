'use client';

import {
  CommonForm,
  Button,
  GroupCountController,
  DatePickerController,
  LocationController,
} from '@/src/app/_components';

import { FieldValues } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
function SearchBar({ page }: { page: 'main' | 'search' }) {
  const router = useRouter();
  const searchParams = useSearchParams(); // ?id=123&minhyuk=천재
  const onSubmit = (data: FieldValues) => {
    if (Array.isArray(data.date) && data.date.length === 2) {
      const location = encodeURIComponent(data.location);
      const checkIn = encodeURIComponent(
        new Date(data.date[0].toLocaleDateString('fr-CA'))
          .toISOString()
          .slice(0, 10),
      );
      const checkOut = encodeURIComponent(
        new Date(data.date[1].toLocaleDateString('fr-CA'))
          .toISOString()
          .slice(0, 10),
      );
      const group = encodeURIComponent(data.group);

      const queryString = `location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&group=${group}`;

      router.push(`/search?${queryString}`);
    } else {
      console.error('Invalid date range');
    }
  };

  const PAGE = {
    main: 'flex-col  items-center  shadow-searchBar mobile:px-0pxr mobile:pb-0pxr mobile:pt-20pxr tablet:px-28pxr tablet:py-32pxr desktop:flex-row desktop:gap-28pxr ',
    search:
      ' gap-16pxr  mobile:shadow-searchBar  mobile:px-0pxr mobile:pb-0pxr mobile:pt-20pxr mobile:flex-col mobile:items-center',
  };

  const INPUTWRAPPER = {
    main: 'flex-center flex w-full flex-row px-20pxr pb-20pxr mobile:flex-col mobile:gap-12pxr tablet:flex-row tablet:px-0pxr desktop:pb-0pxr ',
    search: 'flex w-full gap-12pxr',
  };
  return (
    <CommonForm
      className={`flex w-full max-w-1360pxr justify-between rounded-lg  bg-white px-28pxr  py-32pxr ${PAGE[page]}`}
      onSubmit={onSubmit}
    >
      <div
        className={`flex-center flex w-full flex-row px-20pxr pb-20pxr mobile:flex-col mobile:gap-12pxr tablet:flex-row tablet:px-0pxr desktop:pb-0pxr ${INPUTWRAPPER[page]}`}
      >
        <LocationController
          name='location'
          default={searchParams.get('location') || ''}
        />
        <DatePickerController
          name='date'
          checkIn={searchParams.get('checkIn') || ''}
          checkOut={searchParams.get('checkOut') || ''}
        />
        <GroupCountController
          name='group'
          groupCount={
            searchParams.get('group')
              ? JSON.parse(searchParams.get('group') || '')
              : {
                  adult: 0,
                  child: 0,
                  pet: 0,
                }
          }
        />
      </div>
      <Button.Round
        type='submit'
        size='sm'
        custom={`mobile:w-full tablet:w-full ${page === 'main' ? '' : 'tablet:max-w-134pxr desktop:max-w-134pxr mobile:w-full '}`}
      >
        검색
      </Button.Round>
    </CommonForm>
  );
}
export default SearchBar;
