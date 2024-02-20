'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import {
  Button,
  CommonForm,
  DatePickerController,
  GroupCountController,
  LocationController,
} from '@/src/app/_components';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { INPUT_WRAPPER, PAGE_TYPE } from '../../_constants/inputStyle';
import { submitForSearchAndFilter } from '../../_utils/submitForSearchBar';
import getSearchBarValue from '../../_utils/getSearchBarValue';
import { formatDate } from '../../_utils/formatDate';
import ModalForSearchBar from '../Modal/ModalForSearchBar';
import HookFormButton from '../Button/HookFormButton';

interface SearchParamsType {
  searchParams: {
    [key: string]: string;
  };
}

function SearchBarForSearch({ searchParams }: SearchParamsType) {
  const router = useRouter();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isTotalInput, setIsTotalInput] = useState(false);
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  const onSubmit = (data: FieldValues) => {
    const stay =
      searchParams.stay === 'undefined' ? undefined : searchParams.stay;
    submitForSearchAndFilter(data, router, 'search', 'location', stay);
  };

  const renderSearchBarForMobile = () => {
    setIsTotalInput(true);
    setIsOpenModal(true);
  };

  const defaultGroupCount = {
    adult: Number(searchParams.adult) || 2,
    child: Number(searchParams.child) || 0,
    pet: Number(searchParams.pet) || 0,
  };

  useEffect(() => {
    setIsTotalInput(false);
    setIsOpenModal(false);
  }, [searchParams]);

  return (
    <>
      {isMobile && (
        <div className={`  inline-block  w-full`}>
          <input
            name='total'
            className='w-full cursor-pointer whitespace-nowrap rounded-lg bg-gray100 px-16pxr py-16pxr text-black placeholder-gray500 outline-none font-body2-semibold placeholder:font-body2-medium'
            readOnly
            placeholder='입력해주세요'
            value={getSearchBarValue({ searchParams, page: 'search' })}
            onClick={renderSearchBarForMobile}
          />
        </div>
      )}

      <ModalForSearchBar
        open={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
          setIsTotalInput(false);
        }}
        custom=' mobile:!items-start  mobile:!top-52pxr mobile:!bg-black-searchBar '
      >
        <CommonForm
          className={`flex w-full justify-between  rounded-b-2xl bg-white  ${PAGE_TYPE.search} w-full max-w-1480pxr px-40pxr mobile:px-0pxr  ${isTotalInput ? 'mobile:inline-block' : 'mobile:invisible mobile:!absolute'} `}
          onSubmit={onSubmit}
          mode='onChange'
        >
          <div
            className={`visibility flex-center flex w-full flex-row gap-12pxr mobile:flex-col mobile:px-20pxr  mobile:pb-20pxr tablet:flex-row tablet:px-0pxr desktop:pb-0pxr   ${INPUT_WRAPPER.search}`}
          >
            <LocationController
              name='location'
              default={searchParams.location || '전체'}
            />
            <DatePickerController
              name='date'
              checkIn={searchParams.checkIn || formatDate(new Date())}
              checkOut={
                searchParams.checkOut ||
                formatDate(new Date(Date.now() + 1000 * 60 * 60 * 24))
              }
            />
            <GroupCountController name='group' groupCount={defaultGroupCount} />
          </div>
          <HookFormButton className='!h-56pxr mobile:w-full mobile:rounded-t-none tablet:w-full tablet:max-w-134pxr desktop:max-w-134pxr ' />
        </CommonForm>
      </ModalForSearchBar>
    </>
  );
}

export default SearchBarForSearch;
