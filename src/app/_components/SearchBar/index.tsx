'use client';

import { CommonForm, Button } from '@/src/app/_components';
import DatePickerController from '../Controller/DatePickerController';
import LocationController from '../Controller/LocationController';
import { FieldValues } from 'react-hook-form';
import GroupCountController from '../Controller/GroupCountController';

const onSubmit = (data: FieldValues) => {
  console.log(data);
};

function SearchBar() {
  return (
    <CommonForm
      className='flex w-full max-w-1360pxr flex-col  items-center justify-between rounded-lg bg-white px-28pxr py-32pxr shadow-searchBar mobile:px-0pxr mobile:pb-0pxr mobile:pt-20pxr tablet:px-28pxr tablet:py-32pxr desktop:flex-row desktop:gap-28pxr '
      onSubmit={onSubmit}
    >
      <div className='flex-center flex w-full flex-row gap-12pxr px-20pxr pb-20pxr mobile:flex-col tablet:flex-row tablet:px-0pxr desktop:pb-0pxr'>
        <LocationController name='location' />
        <DatePickerController name='date' />
        <GroupCountController name='group' />
      </div>
      <Button.Round size='sm' custom='mobile:w-full tablet:w-full'>
        검색
      </Button.Round>
    </CommonForm>
  );
}

export default SearchBar;
