'use client';

import { useAppDispatch } from '@/hooks/redux';
import useMediaQueries from '@/hooks/useMediaQueries';
import {
  Button,
  CommonForm,
  DatePickerController,
  GroupCountController,
} from '@/src/app/_components';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { INPUT_WRAPPER, PAGE_TYPE } from '../../_constants/inputStyle';
import getSearchBarValue from '../../_utils/getSearchBarValue';
import { submitForSearch } from '../../_utils/submitForSearchBar';
import PlaceController from '../Controller/PlaceController';
interface SearchParamsType {
  searchParams: {
    [key: string]: string;
  };
  placeName?: string;
  campId?: number;
}
function SearchBarForOverview({
  searchParams,
  placeName,
  campId,
}: SearchParamsType) {
  const router = useRouter();
  const path = useParams();

  const [isTotalInput, setIsTotalInput] = useState(false);
  const [isRenderedButton, setIsRenderedButton] = useState(false);
  const dispatch = useAppDispatch();

  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  const outerDivRef = useRef<HTMLDivElement | null>(null);

  const onSubmit = (data: FieldValues) => {
    submitForSearch(data, router, `overview/${path.id}`, 'place');
  };

  const renderButton = () => setIsRenderedButton(true);
  const closeButton = () => setIsRenderedButton(false);

  const renderSearchBarForMobile = () => setIsTotalInput(true);
  const closeSearchBarForMobile = () => setIsTotalInput(false);

  const defaultGroupCount = {
    adult: Number(searchParams.adult) || 0,
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
            value={getSearchBarValue({ searchParams, place: placeName })}
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
        className='flex-center sticky top-0pxr z-30 w-full max-w-1440pxr bg-white'
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
              default={Number(path?.id) === campId ? placeName : ''}
              onRenderButton={renderButton}
            />
            <DatePickerController
              name='date'
              checkIn={searchParams.checkIn || ''}
              checkOut={searchParams.checkOut || ''}
              onRenderButton={renderButton}
            />
            <GroupCountController
              onRenderButton={renderButton}
              name='group'
              groupCount={defaultGroupCount}
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
