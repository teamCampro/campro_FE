'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import {
  Button,
  CommonForm,
  DatePickerController,
  GroupCountController,
} from '@/src/app/_components';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { INPUT_WRAPPER, PAGE_TYPE } from '../../_constants/inputStyle';
import getFormattedDate from '../../_utils/getFormattedDate';
import PlaceController from '../Controller/PlaceController';
import { useAppDispatch } from '@/hooks/redux';
import { setReserveInfo } from '../../_slices/reserveInfo';
function SearchBarForOverview() {
  const router = useRouter();
  const path = useParams();
  const searchParams = useSearchParams();

  const [isTotalInput, setIsTotalInput] = useState(false);
  const [isRenderedButton, setIsRenderedButton] = useState(false);
  const dispatch = useAppDispatch();

  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  const outerDivRef = useRef<HTMLDivElement | null>(null);

  const onSubmit = (data: FieldValues) => {
    if (Array.isArray(data.date) && data.date.length === 2) {
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

      const queryString = `checkIn=${checkIn}&checkOut=${checkOut}&group=${group}`;
      router.push(`/overview/${path.id}/?${queryString}`);

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
    const place = searchParams.get('place');
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');
    const group = searchParams.get('group');

    if (path.id && checkIn && checkOut && group) {
      const groupObj = JSON.parse(group);
      value = `${path.id}, ${getFormattedDate([new Date(checkIn), new Date(checkOut)])}, 성인 ${groupObj.adult}명, 아동 ${groupObj.child}명, 펫 ${groupObj.pet}마리`;
    }

    return value;
  };

  const renderButton = () => setIsRenderedButton(true);
  const closeButton = () => setIsRenderedButton(false);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;

      setTimeout(() => {
        if (
          outerDivRef.current &&
          !outerDivRef.current.contains(targetElement) &&
          !isMobile
        ) {
          closeButton();
        }
      }, 0);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isMobile && (
        <div
          className={`w-full bg-white mobile:sticky mobile:top-0pxr mobile:z-30 mobile:bg-white mobile:p-16pxr`}
        >
          <input
            name='total'
            className='relative w-full cursor-pointer whitespace-nowrap rounded-lg bg-gray100 px-16pxr py-16pxr text-black placeholder-gray500 outline-none font-body2-semibold placeholder:font-body2-medium'
            readOnly
            placeholder='입력해주세요'
            value={getValueForSearchBar()}
            onClick={(e) => {
              e.stopPropagation();
              renderButton();
              renderSearchBarForMobile();
            }}
          />
        </div>
      )}
      <div
        ref={outerDivRef}
        className='flex-center sticky top-0pxr z-30 w-full max-w-1440pxr border-b border-gray200 bg-white'
      >
        <CommonForm
          className={`flex w-full justify-between rounded-2xl bg-white ${isMobile && isTotalInput ? 'absolute left-0pxr top-35pxr z-[50] mobile:fixed mobile:top-0pxr mobile:mt-0pxr mobile:inline-block mobile:rounded-none' : 'mobile:hidden'}  ${PAGE_TYPE.search} my-20pxr `}
          onSubmit={onSubmit}
        >
          <div
            className={`flex-center flex w-full flex-row gap-12pxr mobile:flex-col mobile:px-20pxr  mobile:pb-20pxr tablet:flex-row tablet:px-0pxr desktop:pb-0pxr ${INPUT_WRAPPER.search}`}
          >
            <PlaceController
              name='place'
              default={`${path.id}` || ''}
              onRenderButton={renderButton}
            />
            <DatePickerController
              name='date'
              checkIn={searchParams.get('checkIn') || ''}
              checkOut={searchParams.get('checkOut') || ''}
              onRenderButton={renderButton}
            />
            <GroupCountController
              name='group'
              groupCount={
                searchParams.get('group')
                  ? JSON.parse(searchParams.get('group') || '')
                  : { adult: 0, child: 0, pet: 0 }
              }
              onRenderButton={renderButton}
            />
          </div>
          {isRenderedButton && (
            <Button.Round
              type='submit'
              size='sm'
              onClick={closeSearchBarForMobile}
              custom={`mobile:w-full tablet:w-full !h-56pxr mobile:rounded-t-none tablet:max-w-134pxr desktop:max-w-134pxr `}
            >
              검색
            </Button.Round>
          )}
        </CommonForm>
      </div>
    </>
  );
}

export default SearchBarForOverview;
