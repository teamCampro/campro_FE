'use client';
import { useState } from 'react';

interface Props {
  initialCurrentPage?: number;
  initialTotalItems?: number;
}

function usePagination({
  initialCurrentPage = 1,
  initialTotalItems = 0,
}: Props) {
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [totalItems, setTotalItems] = useState(initialTotalItems);

  const updateCurrentPage = (pageNumber: number) => {
    if (currentPage >= 1 && pageNumber <= totalItems) {
      setCurrentPage(pageNumber);
    }
  };

  const updateTotalItems = (total: number) => {
    setTotalItems(total);
  };

  return {
    currentPage,
    totalItems,
    updateCurrentPage,
    updateTotalItems,
  };
}

export default usePagination;
