'use client';

import { useAppDispatch } from '@/hooks/redux';
import useMediaQueries from '@/hooks/useMediaQueries';
import {
  Button,
  CommonForm,
  DatePickerController,
  GroupCountController,
  LocationController,
} from '@/src/app/_components';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { INPUT_WRAPPER, PAGE_TYPE } from '../../_constants/inputStyle';
import { submitForSearch } from '../../_utils/submitForSearchBar';
import getSearchBarValue from '../../_utils/getSearchBarValue';
import { formatDate } from '../../_utils/formatDate';
interface SearchParamsType {
  searchParams: {
    [key: string]: string;
  };
}

function SearchBarForSearch({ searchParams }: SearchParamsType) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isTotalInput, setIsTotalInput] = useState(false);
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;
  const outerDivRef = useRef<HTMLDivElement | null>(null);

  const onSubmit = (data: FieldValues) => {
    const campType =
      searchParams.campType === 'undefined' ? undefined : searchParams.campType;

    submitForSearch(data, dispatch, router, 'search', 'location', campType);
  };

  const renderSearchBarForMobile = () => setIsTotalInput(true);
  const closeSearchBarForMobile = () => setIsTotalInput(false);

  const defaultGroupCount = {
    adult: Number(searchParams.adult) || 2,
    child: Number(searchParams.child) || 0,
    pet: Number(searchParams.pet) || 0,
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;
      const modalElement = document.getElementById('modal');
      if (
        modalElement &&
        !modalElement.contains(targetElement) &&
        outerDivRef.current &&
        !outerDivRef.current.contains(targetElement)
      ) {
        setIsTotalInput(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <div className={`inline-block  w-full`}>
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
      <div
        ref={outerDivRef}
        className='w-full max-w-1480pxr px-40pxr mobile:px-0pxr'
      >
        <CommonForm
          className={`flex w-full justify-between rounded-2xl bg-white    ${isTotalInput ? 'absolute left-0pxr top-0pxr z-[150] mobile:inline-block' : 'mobile:hidden'}  ${PAGE_TYPE.search}`}
          onSubmit={onSubmit}
        >
          <div
            className={`flex-center flex w-full flex-row gap-12pxr mobile:flex-col mobile:px-20pxr  mobile:pb-20pxr tablet:flex-row tablet:px-0pxr desktop:pb-0pxr ${INPUT_WRAPPER.search}`}
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
          <Button.Round
            type='submit'
            size='sm'
            onClick={closeSearchBarForMobile}
            custom={`mobile:w-full tablet:w-full !h-56pxr mobile:rounded-t-none tablet:max-w-134pxr desktop:max-w-134pxr `}
          >
            검색
          </Button.Round>
        </CommonForm>
      </div>
    </>
  );
}

export default SearchBarForSearch;
