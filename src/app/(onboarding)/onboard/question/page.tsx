'use client';

import usePagination from '@/hooks/usePagination';
import { Loading, Pagination } from '@/src/app/_components';
import postOnboardingResult from '@/src/app/_data/onboarding/onboarding';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import OnboardingList from '../../_components/OnboardingList';

export interface ChoiceType {
  text: string;
  isOptional?: boolean;
}

export interface OnboardingType {
  id: number;
  question: string;
  choices: ChoiceType[];
  selectionType: 'single' | 'multiple' | 'optional';
}

export interface AnswersType {
  [questionId: number]: ChoiceType[];
}

function Question() {
  const [userId, setUserId] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [isAnswering, setIsAnswering] = useState(true);

  const [answers, setAnswers] = useState<AnswersType>({});
  const [questions, setQuestions] = useState<OnboardingType[]>([]);

  const handleChoice = (
    questionId: number,
    answer: ChoiceType,
    selectionType: 'single' | 'multiple' | 'optional',
  ) => {
    setAnswers((prevAnswers) => {
      const currentAnswers = prevAnswers[questionId] || [];
      let updatedAnswers;

      if (
        selectionType === 'multiple' ||
        (selectionType === 'optional' && answer.isOptional)
      ) {
        updatedAnswers = currentAnswers.includes(answer)
          ? currentAnswers.filter((a) => a !== answer)
          : [...currentAnswers, answer];
      } else if (selectionType === 'optional') {
        const nonOptionalAnswers = currentAnswers.filter((a) => a.isOptional);
        updatedAnswers = nonOptionalAnswers.includes(answer)
          ? nonOptionalAnswers
          : [...nonOptionalAnswers, answer];
      } else {
        updatedAnswers = [answer];
      }

      return {
        ...prevAnswers,
        [questionId]: updatedAnswers,
      };
    });
  };

  const handlePage = (direction: 'prev' | 'next') => {
    if (currentPage === totalItems) setIsAnswering(false);
    updateCurrentPage(direction === 'prev' ? currentPage - 1 : currentPage + 1);
  };

  const router = useRouter();

  const { currentPage, totalItems, updateCurrentPage, updateTotalItems } =
    usePagination({});

  useEffect(() => {
    const localUserId = window.localStorage.getItem('userId') || 0;
    if (!localUserId) router.push('/');
    setUserId(+localUserId);
    setIsLogin(!!localUserId);

    const fetch = async () => {
      try {
        const response = await axios.get<OnboardingType[]>(
          '/data/onboardingMockData.json',
        );
        setQuestions(response.data);
        updateTotalItems(response.data.length);
        const initialAnswers: AnswersType = response.data.reduce(
          (acc, question) => ({ ...acc, [question.id]: [] }),
          {},
        );
        setAnswers(initialAnswers);
      } catch (e) {
        console.error(e);
      }
    };

    fetch();
  }, []);

  useEffect(() => {
    const onSubmitOnboard = async () => {
      const allAnswers = Object.values(answers).reduce((acc, answerArray) => {
        const texts = answerArray.map((a: ChoiceType) => a.text);
        return acc.concat(texts);
      }, []);
      await postOnboardingResult(userId, allAnswers);
      setTimeout(() => router.push('/'), 3000);
    };
    if (!isAnswering) onSubmitOnboard();
  }, [isAnswering]);

  if (questions.length < 1) return <Loading />;

  return (
    <div className='flex-center custom-height bg-gray100 pb-16pxr pt-108pxr mobile:items-start mobile:pt-40pxr'>
      {isAnswering ? (
        <div className='flex-center flex-col gap-48pxr'>
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            onUpdatePage={handlePage}
            showRightArrow={
              questions[currentPage - 1].selectionType !== 'single'
            }
            rightArrowDisabled={answers[currentPage].length === 0}
          />
          <OnboardingList
            questions={questions}
            currentPage={currentPage}
            handlePage={handlePage}
            handleChoice={handleChoice}
            answers={answers}
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
