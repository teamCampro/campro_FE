import { IconArrowLeftGray } from '@/public/svgs';

interface Props {
  currentPage: number;
  totalItems: number;
  onUpdatePage: (pageNumber: number) => void;
}

function Pagination({ currentPage, totalItems, onUpdatePage }: Props) {
  const disabled = currentPage <= 1;
  return (
    <div className='flex w-103pxr items-center gap-16pxr'>
      {
        <button
          type='button'
          disabled={disabled}
          className={`${disabled ? 'text-gray400' : 'text-gray600'}`}
          onClick={() => onUpdatePage(currentPage - 1)}
        >
          <IconArrowLeftGray />
        </button>
      }
      <p className='pr-10pxr'>
        {currentPage} / {totalItems}
      </p>
    </div>
  );
}

export default Pagination;
