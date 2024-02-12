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
import { setReserveInfo } from '../../_slices/reserveInfo';
import getFormattedDate from '../../_utils/getFormattedDate';
interface SearchParamsType {
  searchParams: {
    [key: string]: string;
  };
}

function SearchBarForSearch({ searchParams }: SearchParamsType) {
  const router = useRouter();

  const [isTotalInput, setIsTotalInput] = useState(false);
  const dispatch = useAppDispatch();
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  const outerDivRef = useRef<HTMLDivElement | null>(null);

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

      const groupObject = JSON.parse(decodeURIComponent(data.group));

      dispatch(
        setReserveInfo({
          dates: getFormattedDate([new Date(checkIn), new Date(checkOut)]),
          adult: groupObject.adult,
          child: groupObject.child,
          pet: groupObject.pet,
        }),
      );
    } else {
      console.error('Invalid date range');
    }
  };

  const getValueForSearchBar = () => {
    let value = '';

    const { location, checkIn, checkOut, group: groupParam } = searchParams;
    let group = { adult: 0, child: 0, pet: 0 };
    if (groupParam) {
      try {
        group = JSON.parse(groupParam);
        console.log(group);
      } catch (e) {
        console.error('Error parsing group params:', e);
      }
    }
    if (location && checkIn && checkOut && group) {
      value = `${location}, ${getFormattedDate([new Date(checkIn), new Date(checkOut)])}, 성인 ${group.adult}명, 아동 ${group.child}명, 펫 ${group.pet}마리`;
    }

    return value;
  };

  const renderSearchBarForMobile = () => setIsTotalInput(true);
  const closeSearchBarForMobile = () => setIsTotalInput(false);

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
            value={getValueForSearchBar()}
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
              default={searchParams.location || ''}
            />
            <DatePickerController
              name='date'
              checkIn={searchParams.checkIn || ''}
              checkOut={searchParams.checkOut || ''}
            />
            <GroupCountController
              name='group'
              groupCount={
                searchParams.group
                  ? JSON.parse(
                      decodeURIComponent(searchParams.group || '') || '',
                    )
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
            onClick={closeSearchBarForMobile}
            custom={`mobile:w-full tablet:w-full !h-56pxr mobile:rounded-t-none tablet:max-w-134pxr desktop:max-w-134pxr `}
          >
            {' '}
            검색{' '}
          </Button.Round>
        </CommonForm>
      </div>
    </>
  );
}

export default SearchBarForSearch;
