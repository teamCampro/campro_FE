'use client';

import {
  GroupCountInput,
  LocationInput,
  CommonForm,
  Button,
} from '@/src/app/_components';
import DatePickerInput from '../Input/DatePickerInput';
import LocationControl from '../Input/LocationControl';
function SearchBar() {
  return (
    <div className='m-auto flex w-full max-w-1440pxr items-center justify-center bg-gray500 px-40pxr'>
      <CommonForm
        className='flex w-full max-w-1360pxr flex-col items-center justify-between rounded-lg bg-white px-0pxr pb-0pxr pt-20pxr shadow-searchBar tablet:px-28pxr tablet:py-32pxr desktop:flex-row desktop:gap-28pxr '
        onSubmit={() => {}}
      >
        <div className='flex-center flex w-full flex-col gap-12pxr px-20pxr pb-20pxr tablet:flex-row tablet:px-0pxr desktop:pb-0pxr'>
          <LocationControl />
          <DatePickerInput name='date' />
          <GroupCountInput />
        </div>
        <Button.Round size='sm' custom='w-full'>
          검색
        </Button.Round>
      </CommonForm>
    </div>
  );
}

export default SearchBar;
