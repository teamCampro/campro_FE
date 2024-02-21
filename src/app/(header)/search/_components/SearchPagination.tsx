'use client';

import { IconNavigationLeft, IconNavigationRight } from '@/public/svgs';
import { Fragment, useState } from 'react';
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

interface Props {
  currentPage: number;
  totalItems: number;
  onUpdatePage: (pageNumber: number) => void;
}

function SearchPagination({ currentPage, totalItems, onUpdatePage }: Props) {
  const [selected, setSelected] = useState(1);

  const handleClickPage = (p: number) => {
    setSelected(p);
    onUpdatePage(p);
  };

  const pages = Array.from(
    { length: Math.ceil(totalItems / 18) },
    (x, i) => i + 1,
  );

  /* 번호배열 길이 -2 보다 현재페이지 번호가 작으면 ... 제거 */
  const islastHellip = () => {
    return currentPage <= pages.length - 3;
  };
  /* 4 보다 현재페이지 번호가 작으면 ... 제거(첫 화면에서 번호 4까지는 보이기 떄문에 4를 조건으로 줬음 ) */
  const isFirstHellip = () => {
    return currentPage >= 4;
  };

  /* 1번과 마지막번호 고정 활성화 */
  const isFixedNumber = (num: number) => {
    return num === 1 || num === pages.length;
  };

  const isNoneNumber = (num: number) => {
    return currentPage + 1 < num || currentPage - 1 > num;
  };

  const isNoneNumChange = (num: number) => {
    return (
      (currentPage === 2 && currentPage + 3 > num) ||
      (currentPage === pages.length - 1 && currentPage - 3 < num) ||
      (currentPage === 1 && currentPage + 4 > num) ||
      (currentPage === pages.length && currentPage - 4 < num)
    );
  };

  return (
    <div className='flex-center gap-20pxr pb-59pxr text-gray500'>
      <button
        type='button'
        className='cursor-pointer'
        disabled={currentPage === 1 ? true : false}
      >
        <IconNavigationLeft onClick={() => handleClickPage(currentPage - 1)} />
      </button>
      <div className='flex-center'>
        {pages.map((page, index) => {
          return (
            <Fragment key={index}>
              {page === pages.length && islastHellip() ? (
                <div className='flex-center h-20pxr w-24pxr pb-5pxr text-20pxr text-gray500'>
                  &hellip;
                </div>
              ) : null}
              {page === 2 && isFirstHellip() ? (
                <div className='flex-center h-20pxr w-24pxr pb-5pxr text-20pxr text-gray500'>
                  &hellip;
                </div>
              ) : null}
              <button
                key={page}
                type='button'
                className={`px-8pxr py-2pxr font-caption1-medium ${!isNoneNumber(page) || isFixedNumber(page) || isNoneNumChange(page) ? 'inline-block' : 'hidden'} ${selected === page ? 'rounded-xl bg-gray100 text-gray800 font-caption1-semibold' : ''}`}
                onClick={() => handleClickPage(page)}
              >
                {page}
              </button>
            </Fragment>
          );
        })}
      </div>
      <button
        type='button'
        className='cursor-pointer'
        disabled={currentPage === Math.ceil(totalItems / 18) ? true : false}
      >
        <IconNavigationRight onClick={() => handleClickPage(currentPage + 1)} />
      </button>
    </div>
  );
}

export default SearchPagination;
