import SectionTitle from './SectionTitle';
import TextInfo from './TextInfo';

interface UsageGuidelinesProps {
  id: string;
  sectionRef: React.RefObject<HTMLDivElement>;
}
const bossInfo = {
  name: '고민혁',
  campSiteName: '호날두 캠핑장',
  businessAddress: '대구 북구 대학로',
  email: 'rhalsgur1541@gmail.com',
  businessNumber: '338-88-011597833',
  campRegistrationNumber: '제010-3518-750호',
};
function UsageGuidelines({ id, sectionRef }: UsageGuidelinesProps) {
  return (
    <section
      className='flex scroll-mt-168pxr flex-col gap-16pxr pt-24pxr mobile:px-20pxr'
      id={id}
      ref={sectionRef}
    >
      <SectionTitle>이용안내</SectionTitle>
      <TextInfo text='campInfo' />
      <SectionTitle>취소/환불 규정</SectionTitle>
      <TextInfo text='cancelRules' />
      <div className='flex flex-col gap-16pxr'>
        <SectionTitle>판매자 정보</SectionTitle>
        <ul className='text-gray500 font-body2-medium'>
          <li>
            대표자: <span>{bossInfo.name}</span>
          </li>
          <li>
            상호명: <span>{bossInfo.campSiteName}</span>
          </li>
          <li>
            사업자 주소: <span>{bossInfo.businessAddress}</span>
          </li>
          <li>
            이메일: <span>{bossInfo.email}</span>
          </li>
          <li>
            사업자 등록 번호: <span>{bossInfo.businessNumber}</span>
          </li>
          <li>
            관광사업(야영장) 등록번호:
            <span>{bossInfo.campRegistrationNumber}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default UsageGuidelines;
