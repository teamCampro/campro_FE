'use client';

import {
  CommonForm,
  Button,
  GroupCountController,
  DatePickerController,
  LocationController,
} from '@/src/app/_components';
import { FieldValues } from 'react-hook-form';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { PAGE_TYPE, INPUT_WRAPPER } from '../../_constants/inputStyle';

function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

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

  return (
    <>
      <div className='w-full max-w-1480pxr px-40pxr mobile:px-0pxr'>
        <CommonForm
          className={`flex w-full justify-between rounded-2xl bg-white   px-28pxr py-32pxr  ${PAGE_TYPE.main}`}
          onSubmit={onSubmit}
        >
          <div
            className={`flex-center flex w-full flex-row gap-12pxr pb-20pxr mobile:flex-col mobile:px-20pxr mobile:pb-20pxr tablet:flex-row tablet:px-0pxr desktop:pb-0pxr ${INPUT_WRAPPER.main}`}
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
            custom={`mobile:w-full tablet:w-full !h-56pxr mobile:rounded-t-none `}
          >
            검색
          </Button.Round>
        </CommonForm>
      </div>
    </>
  );
}
export default SearchBar;
