'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import {
  Button,
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
import PlaceController from '../Controller/PlaceController';
import ModalForSearchBar from '../Modal/ModalForSearchBar';
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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isTotalInput, setIsTotalInput] = useState(false);
  const [isRenderedButton, setIsRenderedButton] = useState(false);

  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  const onSubmit = (data: FieldValues) => {
    submitForSearch(data, router, `overview/${path.id}`);
  };

  const renderButton = () => setIsRenderedButton(true);
  const closeButton = () => setIsRenderedButton(false);

  const renderSearchBarForMobile = () => {
    setIsTotalInput(true);
    setIsOpenModal(true);
  };

  const defaultGroupCount = {
    adult: Number(searchParams.adult) || 0,
    child: Number(searchParams.child) || 0,
    pet: Number(searchParams.pet) || 0,
  };

  useEffect(() => {
    setIsTotalInput(false);
    setIsOpenModal(false);
  }, [searchParams]);

  return (
    <div className='sticky top-0pxr z-30'>
      {isMobile && (
        <div
          className={`w-full bg-white mobile:top-0pxr mobile:z-30 mobile:bg-white mobile:p-16pxr`}
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
      <ModalForSearchBar
        open={isOpenModal}
        onClose={() => {
          setIsTotalInput(false);
          setIsOpenModal(false);
          closeButton();
        }}
        custom=' mobile:!items-start  mobile:!top-52pxr mobile:!bg-black-searchBar '
      >
        <div className='flex-center z-30 w-full max-w-1440pxr bg-white mobile:border-b mobile:border-gray200'>
          <CommonForm
            className={`flex w-full justify-between rounded-2xl bg-white ${isMobile && isTotalInput ? 'absolute left-0pxr top-35pxr z-[50] mobile:top-0pxr mobile:mt-0pxr mobile:inline-block' : 'mobile:hidden'}   ${PAGE_TYPE.overview} my-20pxr `}
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
                custom={`mobile:w-full tablet:w-full !h-56pxr mobile:rounded-t-none tablet:max-w-134pxr desktop:max-w-134pxr `}
              >
                검색
              </Button.Round>
            )}
          </CommonForm>
        </div>
      </ModalForSearchBar>
    </div>
  );
}

export default SearchBarForOverview;
