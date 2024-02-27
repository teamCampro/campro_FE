'use client';

import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import useMediaQueries from '@/hooks/useMediaQueries';
import {
  CommonForm,
  DatePickerController,
  GroupCountController,
} from '@/src/app/_components';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { INPUT_WRAPPER, PAGE_TYPE } from '../../_constants/inputStyle';
import getSearchBarValue from '../../_utils/getSearchBarValue';
import { submitForSearch } from '../../_utils/submitForSearchBar';
import HookFormButton from '../Button/HookFormButton';
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

  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  const onSubmit = (data: FieldValues) => {
    submitForSearch(data, router, `overview/${path.id}`);
    setIsTotalInput(false);
    openScroll();
  };
  const { lockScroll, openScroll } = useBodyScrollLock();

  const renderButton = () => setIsRenderedButton(true);
  const renderSearchBarForMobile = () => {
    lockScroll();
    setIsTotalInput(true);
  };

  const defaultGroupCount = {
    adult: Number(searchParams.adult) || 0,
    child: Number(searchParams.child) || 0,
    pet: Number(searchParams.pet) || 0,
  };
  const onBackdropClick = () => {
    openScroll();
    setIsTotalInput(false);
  };
  useEffect(() => {
    setIsTotalInput(false);
  }, [searchParams]);

  return (
    <div className='px-auto sticky top-0pxr z-30 w-full bg-white'>
      {isMobile && (
        <div className='w-full bg-white mobile:top-0pxr mobile:z-30 mobile:bg-white mobile:p-16pxr '>
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
        className='flex-center z-30 mx-auto mb-40pxr w-full max-w-1360pxr border-b mobile:mb-0pxr mobile:border-gray200 mobile:p-0pxr'
        onClick={() => onBackdropClick()}
      >
        <CommonForm
          className={`flex w-full justify-between bg-white ${isMobile && isTotalInput ? 'absolute left-0pxr top-0pxr z-[50] h-screen mobile:top-0pxr mobile:mt-0pxr mobile:inline-block mobile:bg-black-50' : 'mobile:hidden'} ${PAGE_TYPE.overview} my-20pxr `}
          onSubmit={onSubmit}
        >
          <div
            className={`flex-center flex w-full flex-row gap-12pxr bg-white mobile:flex-col mobile:px-20pxr  mobile:pb-20pxr tablet:flex-row tablet:px-0pxr desktop:pb-0pxr ${INPUT_WRAPPER.overview}`}
            onClick={(e) => e.stopPropagation()}
          >
            <PlaceController
              name='place'
              default={placeName}
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
            <HookFormButton
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              size='sm'
              custom={`mobile:w-full tablet:w-full !h-56pxr mobile:rounded-t-none   mobile:w-full !h-56pxr  tablet:w-full tablet:max-w-134pxr desktop:max-w-134pxr`}
            >
              검색
            </HookFormButton>
          )}
        </CommonForm>
      </div>
    </div>
  );
}

export default SearchBarForOverview;
