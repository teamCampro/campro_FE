'use client';

import { Button, ModalOutside, ModalPortal } from '@/components/index';
import {
  IconArrowLeftNon,
  IconClose,
  IconPlusNon,
  IconReset,
  IconStar,
  IconStarHalf,
  IconStarScore,
} from '@/public/svgs';
import Score from './Score';
import { useState } from 'react';
import Survey from './Survey';
import WriteReview from './WriteReview';

interface WriteReviewModalType {
  handleClick: () => void;
}

export interface ReviewKeywordType {
  id: number;
  keyword: string;
  isDone: boolean;
}

export interface SurveyListsType {
  score: string;
  selectList: string[];
}

function WriteReviewModal({ handleClick }: WriteReviewModalType) {
  const [isNext, setisNext] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [score, setScore] = useState<number>(0);
  const [scoreFixed, setScoreFixed] = useState(0);
  const [keywords, setKeywords] = useState<ReviewKeywordType[]>([
    { id: 1, keyword: '깨끗해요', isDone: false },
    { id: 2, keyword: '조용해서 쉬기 좋아요', isDone: false },
    { id: 3, keyword: '바베큐 해 먹기 좋아요', isDone: false },
    { id: 4, keyword: '온수가 잘 나와요', isDone: false },
    { id: 5, keyword: '매너타임이 잘 지켜져요', isDone: false },
    { id: 6, keyword: '화장실이 잘 되어있어요', isDone: false },
    { id: 7, keyword: '공용 시설 관리가 잘 되요', isDone: false },
    { id: 8, keyword: '벌레 걱정 없어요', isDone: false },
    { id: 9, keyword: '사진이 잘 나와요', isDone: false },
    { id: 10, keyword: '냉난방이 잘 돼요', isDone: false },
    { id: 11, keyword: '친절해요', isDone: false },
    { id: 12, keyword: '편의시설이 잘 되어있어요', isDone: false },
    { id: 13, keyword: '근처에 갈 곳이 많아요', isDone: false },
  ]);
  const [surveyLists, setSurveyLists] = useState<SurveyListsType>({
    score: '',
    selectList: [],
  });

  const propsList = {
    scoreFixed,
    setScoreFixed,
    keywords,
    setKeywords,
    score,
    setScore,
  };

  const handleScroll = () => {
    setIsScroll(true);
  };

  const handleButton = () => {
    if (surveyLists.score !== '' && surveyLists.selectList.length >= 3) {
      setisNext(true);
    }
  };

  const handleReset = () => {
    if (!isNext) {
      setScore(0);
      setScoreFixed(0);
      setKeywords(
        keywords.map((keyword) => {
          return { ...keyword, isDone: false };
        }),
      );
      setSurveyLists({ score: '', selectList: [] });
    } else {
    }
  };

  console.log(surveyLists);
  return (
    <ModalPortal>
      <ModalOutside
        onClose={handleClick}
        custom='fixed flex-center !left-0pxr mobile:items-center top-0pxr z-[1000] overflow-hidden bg-black-50'
      >
        <div
          className={`flex mobile:h-screen ${isNext ? '' : 'tabletMin:h-816pxr'} w-full flex-col bg-white tabletMin:w-407pxr tabletMin:rounded-xl`}
        >
          <h2 className='flex-center relative p-16pxr text-black font-title3-semibold tabletMin:hidden tabletMin:font-h1-semibold'>
            <IconArrowLeftNon
              fill='#949494'
              className='absolute left-16pxr top-1/2 block -translate-y-1/2 tabletMin:hidden'
              onClick={handleClick}
            />
            후기 등록
          </h2>
          <div className='flex h-full w-full flex-col justify-between gap-32pxr'>
            <div
              className={`flex h-full flex-col ${isScroll ? 'scrollbar-hide overflow-y-scroll' : ''}  px-16pxr  pt-16pxr tabletMin:px-28pxr tabletMin:pt-24pxr`}
            >
              <div
                className='hidden h-24pxr w-24pxr cursor-pointer tabletMin:block'
                onClick={handleClick}
              >
                <IconClose
                  width='100%'
                  height='100%'
                  viewBox='0 0 26 26'
                  fill='white'
                />
              </div>
              <h3 className='text-black font-title2-semibold tabletMin:mt-24pxr'>
                자연숲 캠핑장은 어떠셨나요?
              </h3>
              <h4 className='mb-20pxr mt-2pxr text-gray500 font-caption1-medium'>
                캠핑장 이용 경험을 공유해 주세요
              </h4>
              <ul
                className={`flex flex-col gap-4pxr ${isNext ? '' : 'rounded-lg bg-gray100 px-16pxr py-12pxr'}`}
              >
                <li className='text-gray500 font-caption1-medium'>
                  객실명: <span>A사이드 | A1-8구역</span>
                </li>
                <li className='text-gray500 font-caption1-medium'>
                  유형: <span>2인</span>
                </li>
                {isNext ? (
                  <li>
                    <ul className='flex-center flex-wrap justify-start gap-4pxr'>
                      <li className='flex-center bg-gray100 px-6pxr py-2pxr !leading-none text-gray600 font-caption2-medium'>
                        <div className='w-16xpr h-16pxr'>
                          <IconStar
                            width='100%'
                            height='100%'
                            viewBox='0 0 24 24'
                          />
                        </div>
                        {surveyLists.score}
                      </li>
                      {surveyLists.selectList.map((list, index) => {
                        return (
                          <li
                            key={index}
                            className='whitespace-nowrap bg-gray100 px-6pxr py-2pxr text-gray600 font-caption2-medium'
                          >
                            {list}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ) : null}
              </ul>
              {isNext ? (
                <WriteReview />
              ) : (
                <Survey
                  setSurveyLists={setSurveyLists}
                  isScroll={isScroll}
                  handleScroll={handleScroll}
                  surveyLists={surveyLists}
                  {...propsList}
                />
              )}
            </div>
            <div className='flex-center h-88pxr justify-between gap-14pxr border-t border-b-white px-20pxr py-16pxr'>
              <div
                className='flex-center gap-4pxr whitespace-nowrap pl-12pxr pr-6pxr text-gray500 font-title3-semibold'
                onClick={handleReset}
              >
                초기화
                <div className='h-24pxr w-24pxr'>
                  <IconReset
                    width='100%'
                    height='100%'
                    viewBox='0 0 24 24'
                    fill='#C8C8C8'
                  />
                </div>
              </div>
              <Button.Round
                size='sm'
                custom='!w-full text-white !h-56pxr !flex-shrink'
                onClick={handleButton}
              >
                {isNext ? '후기 등록' : '다음'}
              </Button.Round>
            </div>
          </div>
        </div>
      </ModalOutside>
    </ModalPortal>
  );
}

export default WriteReviewModal;
