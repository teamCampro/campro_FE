'use client';

import Image from 'next/image';
import Tent from '@/../public/png/tent.gif';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pagination } from '@/src/app/_components';
import usePagination from '@/hooks/usePagination';
import OnboardingList from '../../_components/OnboardingList';

export interface OnboardingType {
  id: number;
  question: string;
  choices: ChoicesType[];
}

export interface ChoicesType {
  id: number;
  text: string;
}

function Question() {
  const [isAnswering, setIsAnswering] = useState(true);
  const [tagState, setTagState] = useState<string[]>([]);

  const { currentPage, totalItems, updateCurrentPage, updateTotalItems } =
    usePagination({});
  const [mockData, setMockData] = useState<OnboardingType[]>([]);

  const onSubmitOnboard = () => setIsAnswering(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get<OnboardingType[]>(
          '/data/onboardingMockData.json',
        );
        setMockData(response.data);
        updateTotalItems(response.data.length);
      } catch (e) {
        console.error(e);
      }
    };

    fetch();
  }, []);

  const handleClickChoices = (text: string) => {
    updateCurrentPage(currentPage + 1);
    setTagState((prev) => [...prev, text]);
  };

  return (
    <div className='flex-center pt-108pxr'>
      {isAnswering ? (
        <div className='flex-center flex-col gap-48pxr'>
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            onUpdatePage={updateCurrentPage}
          />
          <OnboardingList
            mockData={mockData}
            currentPage={currentPage}
            onClickChoices={handleClickChoices}
            onSubmitOnboard={onSubmitOnboard}
          />
        </div>
      ) : (
        <div className='flex-center flex-col '>
          <div className='flex-center flex-col gap-64pxr tablet:gap-12pxr'>
            <h3 className='text-black font-title1-semibold tablet:font-h3'>
              캠핑 스타일을 분석 중이에요
            </h3>
            <p className='text-gray600 font-body2'>
              취향에 맞는 캠핑장을 보여드릴게요!
            </p>

            <Image src={Tent.src} width={338} height={187} alt='로딩 이미지' />
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
