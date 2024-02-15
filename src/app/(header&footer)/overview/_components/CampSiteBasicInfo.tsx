import Chip from '@/components/Chip';
import Copy from '@/components/Copy';
import { IconCall, IconLocation } from '@/public/svgs';
import TagList from './TagList';

interface CampSiteBasicInfoProps {
  types: string[];
  placeName: string;
  address: string;
  tel: string;
  intro: string;
  tag: {
    text: string;
    list: { text: string; count: number }[];
  };
}

function CampSiteBasicInfo({
  types,
  placeName,
  address,
  tel,
  intro,
  tag,
}: CampSiteBasicInfoProps) {
  return (
    <article>
      <div className='flex flex-wrap gap-8pxr mobile:mr-60pxr tablet:mr-80pxr'>
        {types.map((type, i) => (
          <Chip key={type + i}>{type}</Chip>
        ))}
      </div>
      <h2 className='mb-12pxr mt-2pxr font-h2-semibold mobile:font-title3-bold'>
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
      <div className='flex flex-col'>
        <TagList tag={tag} />
        <div className='flex flex-col gap-16pxr pt-24pxr'>
          <h2 className='text-black font-title2-semibold'>기본 정보</h2>
          <p className='text-gray500 font-body2-medium'>{intro}</p>
        </div>
      </div>
    </article>
  );
}

export default CampSiteBasicInfo;
