import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Score from './Score';
import Button from '@/components/Button';
import {
  IconMapMinus,
  IconMinus,
  IconMinusNon,
  IconPlusNon,
} from '@/public/svgs';
import { ReviewKeywordType, SurveyListsType } from './WriteReviewModal';

interface SurveyType {
  isToggleScroll: boolean;
  handleToggleScroll: () => void;
  setSurveyLists: Dispatch<SetStateAction<SurveyListsType>>;
  surveyLists: SurveyListsType;
  keywords: ReviewKeywordType[];
  setKeywords: Dispatch<SetStateAction<ReviewKeywordType[]>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

function Survey({
  isToggleScroll,
  handleToggleScroll,
  setSurveyLists,
  surveyLists,
  keywords,
  setKeywords,
  score,
  setScore,
}: SurveyType) {
  const handleClick = (keyword: ReviewKeywordType) => {
    setKeywords(
      surveyLists.selectList.length < 3
        ? keywords.map((key) => {
            return key.id === keyword.id
              ? { ...key, isDone: !key.isDone }
              : key;
          })
        : keywords.map((key) => {
            return key.id === keyword.id ? { ...key, isDone: false } : key;
          }),
    );
    if (
      !surveyLists.selectList.includes(keyword.keyword) &&
      surveyLists.selectList.length < 3
    ) {
      surveyLists.selectList.push(keyword.keyword);
    } else {
      setSurveyLists({
        ...surveyLists,
        selectList: surveyLists.selectList.filter((list) => {
          return list !== keyword.keyword;
        }),
      });
    }
  };

  return (
    <>
      <div className='mt-24pxr flex flex-col gap-8pxr'>
        <h3 className='leading-[140%] text-black font-body1-bold'>
          전체 만족도는 어땠나요?
        </h3>
        <Score
          setSurveyLists={setSurveyLists}
          surveyLists={surveyLists}
          score={score}
          setScore={setScore}
        />
      </div>
      <div className='mt-24pxr'>
        <h3 className='leading-[140%] text-black font-body1-bold'>
          어떤 점이 좋았나요?
        </h3>
        <h4 className='mt-4pxr leading-[140%] text-gray500 font-caption1-medium'>
          이 캠핑장에 어울리는 키워드를 최대 3개까지 골라주세요
        </h4>
        <div>
          <ul
            className={`mypage  mt-16pxr grid  justify-between gap-12pxr  ${isToggleScroll ? 'h-full' : 'h-212pxr overflow-hidden'}`}
          >
            {keywords.map((keyword) => {
              return (
                <Button.Round
                  key={keyword.id}
                  size='lg'
                  custom={`${keyword.isDone ? 'bg-primary50 text-primary100 border border-primary100' : ''} hover:font-caption1-semibold hover:border hover:border-primary100 !w-full !h-44pxr rounded-lg font-caption1-medium text-gray600`}
                  onClick={() => handleClick(keyword)}
                >
                  {keyword.keyword}
                </Button.Round>
              );
            })}
          </ul>
          <div
            className={`flex-center bottom-10pxr mt-12pxr  ${isToggleScroll ? '' : 'hidden'}`}
            onClick={handleToggleScroll}
          >
            <button className='flex-center flex h-44pxr flex-nowrap gap-4pxr rounded-[99px] border border-gray300 px-20pxr py-12pxr text-gray500 font-body2-medium'>
              <div className='h-20pxr w-20pxr'>
                <IconMinusNon
                  width='100%'
                  height='100%'
                  viewBox='0 0 24 24'
                  fill='#949494'
                />
              </div>
              <span className='whitespace-nowrap leading-[140%] font-caption1-medium'>
                접기
              </span>
            </button>
          </div>
        </div>
        <div
          className={`flex-center mt-12pxr ${isToggleScroll ? 'hidden' : ''}`}
          onClick={handleToggleScroll}
        >
          <button className='flex-center flex h-44pxr flex-nowrap gap-4pxr rounded-[99px] border border-gray300 px-20pxr py-12pxr text-gray500 font-body2-medium'>
            <div className='h-20pxr w-20pxr'>
              <IconPlusNon
                width='100%'
                height='100%'
                viewBox='0 0 24 24'
                fill='#949494'
              />
            </div>
            <span className='whitespace-nowrap leading-[140%] font-caption1-medium'>
              더 보기
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Survey;
