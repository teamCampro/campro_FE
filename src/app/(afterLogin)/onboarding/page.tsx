'use client';
import axios from 'axios';

import usePagination from '../../_hooks/usePagination';
import { useEffect, useState } from 'react';
import { Pagination } from '@/app/_components';
import OnboardingList from './_components/OnboardingList';

export interface OnboardingType {
  id: number;
  question: string;
  choices: ChoicesType[];
}

export interface ChoicesType {
  id: number;
  text: string;
}

export default function Home() {
  const { currentPage, totalItems, updateCurrentPage, updateTotalItems } =
    usePagination({});
  const [mockData, setMockData] = useState<OnboardingType[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get<OnboardingType[]>(
          '/data/onboardingMockData.json',
        );
        console.log(response);
        setMockData(response.data);
        updateTotalItems(response.data.length);
      } catch (e) {
        console.error(e);
      }
    };

    fetch();
  }, []);

  const handleClickChoices = () => {
    updateCurrentPage(currentPage + 1);
  };

  return (
    <div className='flex-center flex-col gap-5pxr'>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        onUpdatePage={updateCurrentPage}
      />
      <OnboardingList
        mockData={mockData}
        currentPage={currentPage}
        onClickChoices={handleClickChoices}
      />
    </div>
  );
}
