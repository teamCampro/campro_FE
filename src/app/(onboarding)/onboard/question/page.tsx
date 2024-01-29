'use client';

import Image from 'next/image';
import Tent from '@/../public/gifs/tent.gif';
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

export interface QuestionType {
  [key: string]: string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
}

function Question() {
  const [isAnswering, setIsAnswering] = useState(true);
  const [tagState, setTagState] = useState<QuestionType>({
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
  });

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

  const handleClickChoices = (text: string, id: number) => {
    updateCurrentPage(currentPage + 1);
    setTagState({ ...tagState, [id]: text });
  };

  return (
    <div className='flex-center custom-height bg-gray100 mobile:items-start'>
      {isAnswering ? (
        <div className='flex-center flex-col gap-48pxr mobile:pt-40pxr'>
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
            tagState={tagState}
          />
        </div>
      ) : (
        <div className='flex-center flex-col mobile:pt-108pxr'>
          <div className='flex-center flex-col gap-12pxr '>
            <h3 className='text-black font-h3 mobile:font-title1-semibold'>
              캠핑 스타일을 분석 중이에요
            </h3>
            <p className='mb-64pxr text-gray600 font-body2'>
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
