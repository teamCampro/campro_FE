import Chip from '@/components/Chip';
import Copy from '@/components/Copy';
import { IconCall, IconLocation } from '@/public/svgs';
function CampSiteProfile() {
  const campSiteProfile = {
    campSiteType: '텐트캠핑',
    campSiteName: '자연수캠핑장',
    campSiteAddress: '충남 아산시 배방읍 솔치로 17-32',
    campSiteNumber: '042-123-4567',
  };

  return (
    <div>
      <Chip>{campSiteProfile.campSiteType}</Chip>
      <h2 className='mb-12pxr font-h2-semibold mobile:font-title3-bold' id='1'>
        {campSiteProfile.campSiteName}
      </h2>
      <ul className='flex flex-col gap-8pxr'>
        <li className='flex items-center gap-4pxr'>
          <span className='inline-block h-20pxr w-20pxr'>
            <IconLocation
              width='100%'
              height='100%'
              viewBox='0 0 24 24'
              fill='#949494'
            />
          </span>
          <h3 className='!leading-none text-gray600 font-body2-medium'>
            {campSiteProfile.campSiteAddress}
          </h3>
          <Copy copyTarget={campSiteProfile.campSiteAddress}>복사</Copy>
        </li>
        <li className='flex items-center gap-4pxr'>
          <span className='inline-block h-20pxr w-20pxr'>
            <IconCall
              width='100%'
              height='100%'
              viewBox='0 0 24 24'
              fill='#949494'
            />
          </span>
          <h3 className='!leading-none text-gray600 font-body2-medium'>
            {campSiteProfile.campSiteNumber}
          </h3>
          <Copy copyTarget={campSiteProfile.campSiteNumber}>복사</Copy>
        </li>
      </ul>
    </div>
  );
}

export default CampSiteProfile;
