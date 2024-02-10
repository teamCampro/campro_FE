function CampSiteBasicInfo() {
  const basicInfo = {
    info: `전통이라는 지붕 위에 모더니즘적 디자인 요소를 가미, 삶에 여유와 품격을
    한층 높여 주는 프리미엄 라이프 스타일 공간으로 변화를 거듭해 오는 세계
    최고의 캠핑장입니다.`,
  };

  return (
    <div className='flex flex-col gap-16pxr'>
      <h2 className='text-black font-title2-semibold'>기본 정보</h2>
      <p className='text-gray500 font-body2-medium'>{basicInfo.info}</p>
    </div>
  );
}

export default CampSiteBasicInfo;
