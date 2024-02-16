'use client';

import { IconStarHalf, IconStarScore } from '@/public/svgs';
import { useState } from 'react';

function Score() {
  const [score, setScore] = useState<number>(0);
  const [scoreFixed, setScoreFixed] = useState(score);

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

  return (
    <>
      <div className='flex-center'>
        {Array(5)
          .fill(0)
          .map((i, idx) => (
            <div
              key={idx}
              className='relative h-36pxr w-36pxr cursor-pointer'
              onClick={handleStarClick}
            >
              {score - Math.floor(score) === 0.5 &&
              Math.floor(score) === idx ? (
                <>
                  <IconStarScore
                    key={idx}
                    width='100%'
                    height='100%'
                    viewBox='0 0 37 36'
                    fill='#DFDFDF'
                  />
                  <IconStarHalf
                    key={idx}
                    width='100%'
                    height='100%'
                    viewBox='0 0 37 36'
                    fill='gold'
                    className='absolute left-0pxr top-0pxr'
                  />
                </>
              ) : idx + 1 > score ? (
                <IconStarScore
                  key={idx}
                  width='100%'
                  height='100%'
                  viewBox='0 0 37 36'
                  fill='#DFDFDF'
                  className='absolute'
                />
              ) : (
                <IconStarScore
                  key={idx}
                  width='100%'
                  height='100%'
                  viewBox='0 0 37 36'
                  fill='gold'
                  className='absolute'
                />
              )}

              <div
                className='absolute left-0pxr top-0pxr h-36pxr w-18pxr'
                key={idx + 'left'}
                onMouseEnter={() => handleLeftHalfEnter(idx)}
                onMouseLeave={handleStarLeave}
              ></div>
              <div
                className='absolute right-0pxr top-0pxr h-36pxr w-18pxr'
                key={idx + 'right'}
                onMouseEnter={() => handleRightHalfEnter(idx)}
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
