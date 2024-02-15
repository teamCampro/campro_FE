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

interface ProgressProps {
  tagList: { text: string; count: number }[];
  showAll: boolean;
}

function Progress({ showAll, tagList }: ProgressProps) {
  const max = tagList.reduce((acc, tag) => tag.count + acc, 0);
  tagList.sort((a, b) => b.count - a.count);
  return (
    <ul className='flex flex-col gap-8pxr'>
      {(showAll ? tagList : tagList.slice(0, 3)).map((tag, index) => (
        <li key={index} className='relative h-46pxr'>
          <progress
            id='progress'
            value={(tag.count / max) * 100}
            max='100'
            className='w-full'
          />
          <h3 className='absolute left-16pxr top-1/2 -translate-y-1/2 font-body2-semibold'>
            {tag.text}
          </h3>
          <span className='absolute right-16pxr top-1/2 -translate-y-1/2 font-body2-semibold'>
            {tag.count}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Progress;
