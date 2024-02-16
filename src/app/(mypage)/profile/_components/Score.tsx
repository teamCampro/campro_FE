'use client';

import { IconStarHalf, IconStarScore } from '@/public/svgs';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SurveyListsType } from './WriteReviewModal';

interface ScoreType {
  setSurveyLists: Dispatch<SetStateAction<SurveyListsType>>;
  surveyLists: SurveyListsType;
  scoreFixed: number;
  setScoreFixed: Dispatch<SetStateAction<number>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

function Score({
  setSurveyLists,
  surveyLists,
  scoreFixed,
  setScoreFixed,
  score,
  setScore,
}: ScoreType) {
  const handleLeftHalfEnter = (idx: number) => {
    setScore(idx + 0.5);
  };

  const handleRightHalfEnter = (idx: number) => {
    setScore(idx + 1);
  };

  const handleStarClick = () => {
    setScoreFixed(score);
  };

  const handleStarLeave = () => {
    if (score !== scoreFixed) {
      setScore(scoreFixed);
    }
  };

  useEffect(() => {
    setSurveyLists({ ...surveyLists, score: scoreFixed.toFixed(1) });
  }, [scoreFixed]);
  return (
    <>
      <div className='flex-center'>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className='relative h-36pxr w-36pxr cursor-pointer'
              onClick={handleStarClick}
            >
              {score - Math.floor(score) === 0.5 &&
              Math.floor(score) === index ? (
                <>
                  <IconStarScore
                    key={index}
                    width='100%'
                    height='100%'
                    viewBox='0 0 37 36'
                    fill='#DFDFDF'
                  />
                  <IconStarHalf
                    key={index}
                    width='100%'
                    height='100%'
                    viewBox='0 0 37 36'
                    fill='gold'
                    className='absolute left-0pxr top-0pxr'
                  />
                </>
              ) : index + 1 > score ? (
                <IconStarScore
                  key={index}
                  width='100%'
                  height='100%'
                  viewBox='0 0 37 36'
                  fill='#DFDFDF'
                  className='absolute'
                />
              ) : (
                <IconStarScore
                  key={index}
                  width='100%'
                  height='100%'
                  viewBox='0 0 37 36'
                  fill='gold'
                  className='absolute'
                />
              )}

              <div
                className='absolute left-0pxr top-0pxr h-36pxr w-18pxr'
                key={index + 'left'}
                onMouseEnter={() => handleLeftHalfEnter(index)}
                onMouseLeave={handleStarLeave}
              ></div>
              <div
                className='absolute right-0pxr top-0pxr h-36pxr w-18pxr'
                key={index + 'right'}
                onMouseEnter={() => handleRightHalfEnter(index)}
                onMouseLeave={handleStarLeave}
              ></div>
            </div>
          ))}
      </div>
      <div className='text-center text-gray600 font-body2-medium'>
        <span className='text-black font-body1-bold'>
          {scoreFixed ? scoreFixed.toFixed(1) : score.toFixed(1)} /
        </span>
        5
      </div>
    </>
  );
}

export default Score;
