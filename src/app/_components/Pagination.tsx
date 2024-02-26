import { IconArrowLeftCircle, IconArrowRightCircle } from '@/public/svgs';

interface Props {
  currentPage: number;
  totalItems: number;
  onUpdatePage: (direction: 'prev' | 'next') => void;
  showRightArrow: boolean;
  rightArrowDisabled: boolean;
}

function Pagination({
  currentPage,
  totalItems,
  onUpdatePage,
  showRightArrow,
  rightArrowDisabled,
}: Props) {
  const disabled = currentPage <= 1;
  return (
    <div className='flex  items-center gap-16pxr'>
      <button
        type='button'
        disabled={disabled}
        onClick={() => onUpdatePage('prev')}
      >
        <IconArrowLeftCircle
          className={`${disabled ? 'fill-gray400' : 'fill-gray600'}`}
        />
      </button>
      <p className=''>
        {currentPage} / {totalItems}
      </p>
      <button
        type='button'
        className={showRightArrow ? 'block' : 'hidden'}
        disabled={rightArrowDisabled}
        onClick={() => onUpdatePage('next')}
      >
        <IconArrowRightCircle
          className={`${rightArrowDisabled ? 'fill-gray400' : 'fill-gray600'}`}
        />
      </button>
    </div>
  );
}

export default Pagination;
