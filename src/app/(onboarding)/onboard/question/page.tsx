'use client';

import usePagination from '@/hooks/usePagination';
import { Pagination } from '@/src/app/_components';
import postOnboardingResult from '@/src/app/_data/onboarding/onboarding';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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
}

function Question() {
  const [userId, setUserId] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [isAnswering, setIsAnswering] = useState(true);
  const [tagState, setTagState] = useState<QuestionType>({
    '1': '',
    '2': '',
    '3': '',
    '4': '',
  });

  const router = useRouter();

  const { currentPage, totalItems, updateCurrentPage, updateTotalItems } =
    usePagination({});
  const [mockData, setMockData] = useState<OnboardingType[]>([]);

  const onSubmitOnboard = async () => {
    setIsAnswering(false);
  };

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
    const localUserId = window.localStorage.getItem('userId') || 0;
    setUserId(+localUserId);
    setIsLogin(!!localUserId);

    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isAnswering) postOnboardingResult(userId, Object.values(tagState));
  }, [isAnswering, tagState, userId]);

  const handleClickChoices = (text: string, id: number) => {
    setTagState((prev) => ({ ...prev, [id]: text }));
    updateCurrentPage(currentPage + 1);
  };

  if (mockData.length < 1)
    return (
      <div className='flex-center custom-height bg-gray100'>
        <Image
          src='/gifs/campro_loading.gif'
          width={150}
          height={150}
          alt='로딩 이미지'
        />
      </div>
    );

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
            <h3 className='text-black font-h3-semibold mobile:font-title1-semibold'>
              캠핑 스타일을 분석 중이에요
            </h3>
            <p className='mb-64pxr text-gray600 font-body2'>
              취향에 맞는 캠핑장을 보여드릴게요!
            </p>

            <Image
              src='/gifs/campro_loading.gif'
              width={150}
              height={150}
              alt='로딩 이미지'
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
