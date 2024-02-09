function CampSiteBossInfo() {
  const bossInfo = {
    name: '고민혁',
    campSiteName: '호날두 캠핑장',
    businessAddress: '대구 북구 대학로',
    email: 'rhalsgur1541@gmail.com',
    businessNumber: '338-88-011597833',
    campRegistrationNumber: '제010-3518-750호',
  };
  return (
    <>
      <h2 className='text-black font-title2-semibold'>판매자 정보</h2>
      <ul className='font-medium text-gray500 font-body2'>
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
          관광사업(야영장) 등록번호:{' '}
          <span>{bossInfo.campRegistrationNumber}</span>
        </li>
      </ul>
    </>
  );
}

export default CampSiteBossInfo;
