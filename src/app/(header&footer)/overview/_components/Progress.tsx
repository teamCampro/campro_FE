const progressData = [
  {
    keywordPercentage: '20',
    keyword: '깨끗해요',
    keywordCount: '1900',
  },
  {
    keywordPercentage: '20',
    keyword: '매너 타임을 잘 지켜요',
    keywordCount: '950',
  },
  {
    keywordPercentage: '10',
    keyword: '조용해요',
    keywordCount: '475',
  },
  {
    keywordPercentage: '10',
    keyword: '아늑해요',
    keywordCount: '88',
  },
  {
    keywordPercentage: '40',
    keyword: '사장님이 cs를 양보해요',
    keywordCount: '444',
  },
];

interface ProgressData {
  keywordPercentage: string;
  keyword: string;
  keywordCount: string;
}

interface Props {
  progressData: ProgressData[];
}

function Progress({ showAll }: { showAll: boolean }) {
  return (
    <ul className='flex flex-col gap-8pxr'>
      {(showAll ? progressData : progressData.slice(0, 3)).map(
        (data, index) => (
          <li key={index} className='relative h-46pxr'>
            <progress
              id='progress'
              value={data.keywordPercentage}
              max='100'
              className='w-full'
            ></progress>
            <h3 className='absolute left-16pxr top-1/2 -translate-y-1/2 font-body2-semibold'>
              {data.keyword}
            </h3>
            <span className='absolute right-16pxr top-1/2 -translate-y-1/2 font-body2-semibold'>
              {data.keywordCount}
            </span>
          </li>
        ),
      )}
    </ul>
  );
}

export default Progress;
