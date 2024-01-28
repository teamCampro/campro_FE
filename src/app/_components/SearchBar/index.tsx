'use client';

import { GroupCountInput, CommonForm, Button } from '@/src/app/_components';
import DatePickerController from '../Controller/DatePickerController';
import LocationController from '../Controller/LocationController';
import { FieldValues } from 'react-hook-form';

const onSubmit = (data: FieldValues) => {
  console.log(data);
};

function SearchBar() {
  return (
    <CommonForm
      className='flex w-full max-w-1360pxr flex-col items-center justify-between rounded-lg bg-white px-0pxr pb-0pxr pt-20pxr shadow-searchBar tablet:px-28pxr tablet:py-32pxr desktop:flex-row desktop:gap-28pxr '
      onSubmit={onSubmit}
    >
      <div className='flex-center flex w-full flex-col gap-12pxr px-20pxr pb-20pxr tablet:flex-row tablet:px-0pxr desktop:pb-0pxr'>
        <LocationController name='location' />
        <DatePickerController name='date' />
        <GroupCountInput />
      </div>
      <Button.Round size='sm' custom='w-full'>
        검색
      </Button.Round>
    </CommonForm>
  );
}

export default SearchBar;
