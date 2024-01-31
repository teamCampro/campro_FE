import { IconArrowLeft, IconArrowLeftGray } from '@/public/svgs';

interface Props {
  currentPage: number;
  totalItems: number;
  onUpdatePage: (pageNumber: number) => void;
}

function PaginationView({ currentPage, totalItems, onUpdatePage }: Props) {
  return (
    <div className='flex w-103pxr items-center gap-16pxr'>
      {currentPage > 1 ? (
        <button type='button' onClick={() => onUpdatePage(currentPage - 1)}>
          <IconArrowLeft />
        </button>
      ) : (
        <button disabled>
          <IconArrowLeftGray />
        </button>
      )}
      <p className='pr-10pxr'>
        {currentPage} / {totalItems}
      </p>
    </div>
  );
}

export default PaginationView;
