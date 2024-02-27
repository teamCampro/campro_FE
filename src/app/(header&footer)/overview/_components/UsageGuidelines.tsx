import SectionTitle from './SectionTitle';

interface UsageGuidelinesProps {
  guide: string;
  refundGuide: string;
  bossName: string;
  bossCompanyName: string;
  bossAddress: string;
  bossEmail: string;
  businessNumber: string;
  tourNumber: string;
}

function UsageGuidelines({
  guide,
  refundGuide,
  bossName,
  bossCompanyName,
  bossAddress,
  bossEmail,
  businessNumber,
  tourNumber,
}: UsageGuidelinesProps) {
  return (
    <section className='flex flex-col gap-32pxr pt-24pxr mobile:px-20pxr'>
      <div className='flex flex-col gap-16pxr'>
        <SectionTitle>이용안내</SectionTitle>
        <div
          className='text-gray500 font-caption1-medium'
          dangerouslySetInnerHTML={{ __html: guide }}
        ></div>
      </div>
      <div className='flex flex-col gap-16pxr'>
        <SectionTitle>취소/환불 규정</SectionTitle>
        <div
          className='text-gray500 font-caption1-medium'
          dangerouslySetInnerHTML={{ __html: refundGuide }}
        ></div>
      </div>
      <div className='flex flex-col gap-16pxr'>
        <SectionTitle>판매자 정보</SectionTitle>
        <ul className='text-gray500 font-body2-medium'>
          <li>
            대표자: <span>{bossName}</span>
          </li>
          <li>
            상호명: <span>{bossCompanyName}</span>
          </li>
          <li>
            사업자 주소: <span>{bossAddress}</span>
          </li>
          <li>
            이메일: <span>{bossEmail}</span>
          </li>
          <li>
            사업자 등록 번호: <span>{businessNumber}</span>
          </li>
          <li>
            관광사업(야영장) 등록번호:
            <span>{tourNumber}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default UsageGuidelines;
