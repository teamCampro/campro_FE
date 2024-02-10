import Chip from '@/components/Chip';
import Copy from '@/components/Copy';
import { IconCall, IconLocation } from '@/public/svgs';
import TagList from './TagList';
interface CampSiteProfileProps {
  isRef: React.RefObject<HTMLDivElement>;
}

const basicInfo = {
  info: `전통이라는 지붕 위에 모더니즘적 디자인 요소를 가미, 삶에 여유와 품격을
    한층 높여 주는 프리미엄 라이프 스타일 공간으로 변화를 거듭해 오는 세계
    최고의 캠핑장입니다.`,
};

function CampSiteProfile({ isRef }: CampSiteProfileProps) {
  const campSiteProfile = {
    campSiteType: '텐트캠핑',
    campSiteName: '자연숲캠핑장',
    campSiteAddress: '충남 아산시 배방읍 솔치로 17-32',
    campSiteNumber: '042-123-4567',
  };

  return (
    <div className='scroll-mt-168pxr' id='1' ref={isRef}>
      <Chip>{campSiteProfile.campSiteType}</Chip>
      <h2 className='mb-12pxr font-h2-semibold mobile:font-title3-bold'>
        {campSiteProfile.campSiteName}
      </h2>
      <ul className='flex flex-col gap-8pxr'>
        <li className='flex items-center gap-4pxr'>
          <span className='inline-block h-20pxr w-20pxr text-gray500'>
            <IconLocation width='100%' height='100%' viewBox='0 0 24 24' />
          </span>
          <h3 className='!leading-none text-gray600 font-body2-medium'>
            {campSiteProfile.campSiteAddress}
          </h3>
          <Copy copyTarget={campSiteProfile.campSiteAddress}>복사</Copy>
        </li>
        <li className='flex items-center gap-4pxr'>
          <span className='inline-block h-20pxr w-20pxr text-gray500'>
            <IconCall width='100%' height='100%' viewBox='0 0 24 24' />
          </span>
          <h3 className='!leading-none text-gray600 font-body2-medium'>
            {campSiteProfile.campSiteNumber}
          </h3>
          <Copy copyTarget={campSiteProfile.campSiteNumber}>복사</Copy>
        </li>
      </ul>
      <div className='flex flex-col'>
        <TagList />
        <div className='flex flex-col gap-16pxr pt-24pxr'>
          <h2 className='text-black font-title2-semibold'>기본 정보</h2>
          <p className='text-gray500 font-body2-medium'>{basicInfo.info}</p>
        </div>
      </div>
    </div>
  );
}

export default CampSiteProfile;
