'use client';

import {
  CommonForm,
  Button,
  GroupCountController,
  DatePickerController,
  LocationController,
} from '@/src/app/_components';

import { FieldValues } from 'react-hook-form';

const onSubmit = (data: FieldValues) => {
  console.log({ ...data, group: JSON.parse(data.group) });
};

function SearchBar() {
  return (
    <CommonForm
      className='flex w-full max-w-1360pxr flex-col  items-center justify-between rounded-lg bg-white px-28pxr py-32pxr shadow-searchBar mobile:px-0pxr mobile:pb-0pxr mobile:pt-20pxr tablet:px-28pxr tablet:py-32pxr desktop:flex-row desktop:gap-28pxr '
      onSubmit={onSubmit}
    >
      <div className='flex-center flex w-full flex-row px-20pxr pb-20pxr mobile:flex-col mobile:gap-12pxr tablet:flex-row tablet:px-0pxr desktop:pb-0pxr '>
        <LocationController name='location' />
        <DatePickerController name='date' />
        <GroupCountController
          name='group'
          groupCount={{ adult: 0, child: 0, pet: 0 }}
        />
      </div>
      <Button.Round
        type='submit'
        size='sm'
        custom='mobile:w-full tablet:w-full'
      >
        검색
      </Button.Round>
    </CommonForm>
  );
}

export default SearchBar;
