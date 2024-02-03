'use client';

import {
  CommonForm,
  Button,
  GroupCountController,
  DatePickerController,
  LocationController,
} from '@/src/app/_components';
import { FieldValues } from 'react-hook-form';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import useMediaQueries from '@/hooks/useMediaQueries';
import { PAGE_TYPE, INPUT_WRAPPER } from '../../_constants/inputStyle';
import getFormattedDate from '../../_utils/getFormattedDate';

function SearchBar({ page }: { page: 'main' | 'search' }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const [isTotalInput, setIsTotalInput] = useState(false);

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
    } else {
      console.error('Invalid date range');
    }
  };

  const getValueForSearchBar = () => {
    let value = '';
    const location = searchParams.get('location');
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');
    const group = searchParams.get('group');

    if (location && checkIn && checkOut && group) {
      const groupObj = JSON.parse(group);
      value = `${location}, ${getFormattedDate([new Date(checkIn), new Date(checkOut)])}, 성인 ${groupObj.adult}명, 아동 ${groupObj.child}명, 펫 ${groupObj.pet}마리`;
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
      {pathName.includes('search') && isMobile && (
        <div className={`inline-block  w-full`}>
          <input
            name='total'
            className='w-full cursor-pointer whitespace-nowrap rounded-lg bg-gray100 py-16pxr pl-44pxr pr-16pxr text-black placeholder-gray500 outline-none font-body2-semibold placeholder:font-body2'
            readOnly
            placeholder='입력해주세요'
            value={getValueForSearchBar()}
            onClick={renderSearchBarForMobile}
          />
        </div>
      )}
      <div ref={outerDivRef}>
        <CommonForm
          className={`flex w-full max-w-1360pxr justify-between rounded-lg bg-white px-28pxr py-32pxr  ${pathName.includes('search') && (isTotalInput ? 'absolute left-0pxr top-55pxr z-[99] mobile:inline-block' : 'mobile:hidden')} ${PAGE_TYPE[page]}`}
          onSubmit={onSubmit}
        >
          <div
            className={`flex-center flex w-full flex-row px-20pxr  pb-20pxr mobile:flex-col mobile:gap-12pxr tablet:flex-row tablet:px-0pxr desktop:pb-0pxr ${INPUT_WRAPPER[page]}`}
          >
            <LocationController
              name='location'
              default={searchParams.get('location') || ''}
            />
            <DatePickerController
              name='date'
              checkIn={searchParams.get('checkIn') || ''}
              checkOut={searchParams.get('checkOut') || ''}
            />
            <GroupCountController
              name='group'
              groupCount={
                searchParams.get('group')
                  ? JSON.parse(searchParams.get('group') || '')
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
            custom={`mobile:w-full tablet:w-full ${page === 'main' ? '' : 'tablet:max-w-134pxr desktop:max-w-134pxr mobile:w-full '}`}
          >
            검색
          </Button.Round>
        </CommonForm>
      </div>
    </>
  );
}
export default SearchBar;
