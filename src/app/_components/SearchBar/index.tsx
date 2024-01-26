'use client';

import {
  Button,
  DateInput,
  GroupCountInput,
  LocationInput,
  CommonForm,
} from '@/src/app/_components';

function SearchBar() {
  return (
    <div className='m-auto flex w-full max-w-1440pxr items-center justify-center bg-gray500 px-40pxr'>
      <CommonForm
        className='flex w-full max-w-1360pxr flex-col items-center justify-between rounded-lg bg-white px-0pxr pb-0pxr pt-20pxr shadow-searchBar tablet:px-28pxr tablet:py-32pxr desktop:flex-row desktop:gap-28pxr '
        onSubmit={() => {}}
      >
        <div className='flex-center flex w-full flex-col gap-12pxr px-20pxr pb-20pxr tablet:flex-row tablet:px-0pxr desktop:pb-0pxr'>
          <LocationInput />
          <DateInput />
          <GroupCountInput />
        </div>
        <Button type='search'>검색</Button>
      </CommonForm>
    </div>
  );
}

export default SearchBar;
