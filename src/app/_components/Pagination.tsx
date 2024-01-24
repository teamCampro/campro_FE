import React, { Dispatch, SetStateAction } from 'react';
import ArrowLeft from '../../../public/svgs/ArrowLeft.svg';
import ArrowLeftGray from '../../../public/svgs/ArrowLeftGray.svg';

interface Props {
  currentPage: number;
  totalItems: number;
  onUpdatePage: (pageNumber: number) => void;
}

function Pagination({ currentPage, totalItems, onUpdatePage }: Props) {
  return (
    <div className='flex w-103pxr items-center gap-16pxr'>
      {currentPage > 1 ? (
        <button type='button' onClick={() => onUpdatePage(currentPage - 1)}>
          <ArrowLeft />
        </button>
      ) : (
        <button disabled>
          <ArrowLeftGray />
        </button>
      )}
      <p className='pr-10pxr'>
        {currentPage} / {totalItems}
      </p>
    </div>
  );
}

export default Pagination;
