import { useState } from 'react';
import Score from './Score';
import Button from '@/components/Button';
import { IconPlusNon } from '@/public/svgs';

interface ReviewKeywordType {
  id: number;
  keyword: string;
  isDone: boolean;
}

function Survey() {
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
  return (
    <>
      <div className='mt-24pxr flex flex-col gap-8pxr'>
        <h3 className='text-black font-body1-bold'>전체 만족도는 어땠나요?</h3>
        <Score />
      </div>
      <div className='mt-24pxr'>
        <h3 className='text-black font-body1-bold'>어떤 점이 좋았나요?</h3>
        <h4 className='mt-4pxr text-gray500 font-caption1-medium'>
          이 캠핑장에 어울리는 키워드를 최대 3개까지 골라주세요
        </h4>
        <ul className='mypage mt-16pxr grid h-212pxr justify-between gap-12pxr overflow-hidden'>
          {keywords.map((keyword) => {
            return (
              <Button.Round
                key={keyword.id}
                size='lg'
                custom={`${keyword.isDone ? 'bg-primary50 ' : ''} hover:font-body1-bold !w-full !h-44pxr rounded-lg font-caption1-medium text-gray600`}
              >
                {keyword.keyword}
              </Button.Round>
            );
          })}
        </ul>
        <div className='flex-center mt-12pxr'>
          <button
            /* onClick={() => handleAdd(vehicleNumber)} */
            className='flex-center flex h-44pxr flex-nowrap gap-4pxr rounded-[99px] border border-gray300 px-20pxr py-12pxr font-body2-medium hover:bg-primary50'
          >
            <div className='h-20pxr w-20pxr'>
              <IconPlusNon
                width='100%'
                height='100%'
                viewBox='0 0 24 24'
                fill='#949494'
              />
            </div>
            <p className='whitespace-nowrap text-gray500 font-caption1-medium'>
              더 보기
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Survey;
