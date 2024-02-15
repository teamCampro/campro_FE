import { CampSite } from '../[id]/page';
import SectionTitle from './SectionTitle';

function UsageGuidelines({ ownerInfo, guide }: CampSite) {
  return (
    <section className='flex flex-col gap-16pxr pt-24pxr mobile:px-20pxr'>
      <SectionTitle>이용안내</SectionTitle>
      <div
        className='text-gray500 font-caption1-medium'
        dangerouslySetInnerHTML={{ __html: guide.usage }}
      ></div>
      <SectionTitle>취소/환불 규정</SectionTitle>
      <div
        className='text-gray500 font-caption1-medium'
        dangerouslySetInnerHTML={{ __html: guide.refund }}
      ></div>
      <div className='flex flex-col gap-16pxr'>
        <SectionTitle>판매자 정보</SectionTitle>
        <ul className='text-gray500 font-body2-medium'>
          <li>
            대표자: <span>{ownerInfo.ownerName}</span>
          </li>
          <li>
            상호명: <span>{ownerInfo.placeName}</span>
          </li>
          <li>
            사업자 주소: <span>{ownerInfo.address}</span>
          </li>
          <li>
            이메일: <span>{ownerInfo.email}</span>
          </li>
          <li>
            사업자 등록 번호: <span>{ownerInfo.ownerRegistrationNumber}</span>
          </li>
          <li>
            관광사업(야영장) 등록번호:
            <span>{ownerInfo.placeRegistrationNumber}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default UsageGuidelines;
