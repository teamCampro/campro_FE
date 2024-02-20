import Chip from '@/components/Chip';
import Copy from '@/components/Copy';
import { IconCall, IconLocation } from '@/public/svgs';
import TagList from './TagList';

interface CampSiteBasicInfoProps {
  keyword: string;
  placeName: string;
  address: string;
  tel: string;
  intro: string;
}

function CampSiteBasicInfo({
  keyword,
  placeName,
  address,
  tel,
  intro,
}: CampSiteBasicInfoProps) {
  const tag = {
    text: '청결도 만족도가 높은 곳이에요',
    list: [
      { text: '깨끗해요', count: 738 },
      { text: '매너 타임을 잘 지켜요', count: 1995 },
      { text: '조용해요', count: 1337 },
      { text: '사장님이 cs를 양보해요', count: 688 },
      { text: '아늑해요', count: 369 },
    ],
  };
  console.log(keyword);
  const keywords = keyword.split(',').filter(Boolean);
  console.log(keywords);
  return (
    <article className='flex flex-col gap-24pxr'>
      <div className='flex flex-col gap-12pxr'>
        <div className='flex flex-wrap gap-8pxr mobile:mr-60pxr tablet:mr-80pxr'>
          {keywords.map((word, i) => (
            <Chip key={word + i}>{word}</Chip>
          ))}
        </div>
        <h2 className='font-h2-semibold mobile:font-title3-bold'>
          {placeName}
        </h2>
        <ul className='flex flex-col gap-8pxr'>
          <li className='flex items-center gap-4pxr'>
            <span className='inline-block h-20pxr w-20pxr text-gray500'>
              <IconLocation width='100%' height='100%' viewBox='0 0 24 24' />
            </span>
            <h3 className='!leading-none text-gray600 font-body2-medium'>
              {address}
            </h3>
            <Copy copyTarget={address}>복사</Copy>
          </li>
          <li className='flex items-center gap-4pxr'>
            <span className='inline-block h-20pxr w-20pxr text-gray500'>
              <IconCall width='100%' height='100%' viewBox='0 0 24 24' />
            </span>
            <h3 className='!leading-none text-gray600 font-body2-medium'>
              {tel}
            </h3>
            <Copy copyTarget={tel}>복사</Copy>
          </li>
        </ul>
      </div>

      <div className='flex flex-col gap-24pxr'>
        <TagList tag={tag} />
        <div className='flex flex-col gap-16pxr'>
          <h2 className='text-black font-title2-semibold'>기본 정보</h2>
          <p className='text-gray500 font-body2-medium'>{intro}</p>
        </div>
      </div>
    </article>
  );
}

export default CampSiteBasicInfo;
