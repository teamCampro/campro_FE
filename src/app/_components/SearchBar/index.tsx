'use client';

import {
  Button,
  CommonForm,
  DatePickerController,
  GroupCountController,
  LocationController,
} from '@/src/app/_components';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { INPUT_WRAPPER, PAGE_TYPE } from '../../_constants/inputStyle';
import { useAppDispatch } from '@/hooks/redux';
import { submitForSearch } from '../../_utils/submitForSearchBar';
interface SearchParamsType {
  searchParams: {
    [key: string]: string;
  };
}
function SearchBar({ searchParams }: SearchParamsType) {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const onSubmit = (data: FieldValues) => {
    submitForSearch(data, dispatch, router, 'search');
  };

  const defaultGroupCount = {
    adult: Number(searchParams.adult) || 0,
    child: Number(searchParams.child) || 0,
    pet: Number(searchParams.pet) || 0,
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
              default={searchParams.location || ''}
            />
            <DatePickerController
              name='date'
              checkIn={searchParams.checkIn || ''}
              checkOut={searchParams.checkOut || ''}
            />
            <GroupCountController name='group' groupCount={defaultGroupCount} />
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
