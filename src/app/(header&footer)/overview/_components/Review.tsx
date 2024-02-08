import { IconStar } from '@/public/svgs';

function Review() {
  return (
    <section className='border-b border-gray200 pt-20pxr mobile:pl-24pxr mobile359:pl-16pxr'>
      <div className='flex items-center justify-start pt-20pxr mobile:pr-24pxr mobile359:pr-16pxr'>
        <h2 className='flex-center text-black font-title3-bold'>
          <IconStar />
          이용 후기<span>9.8</span>
        </h2>
        <span className='grow-2 font-medium text-gray400 font-caption1'>
          ・257명 평가
        </span>
        <div>전체보기</div>
      </div>
      <div>
        <div>
          <h4>보라돌이28</h4>
          <span>2일전</span>
        </div>
        <ul>
          <li>이미지</li>
        </ul>
        <div>
          <h4>
            객실명: <span>A사이드</span>
            <span>| A1-8구역</span>
          </h4>
        </div>
        <div>
          <h4>
            유형: <span>2인</span>
            <span>| 여성</span>
          </h4>
        </div>
        <p>
          친구랑 둘이서 처음 가 본 캠핑이었는데 엄청 친절하시고 조용해서
          쉬기에도 너무 좋았어요! 자연 향기 너무 힐링되고 좋았어요! 친구도 너무
          마음에 든다구 하더라구요 ㅎㅎ ! 다음 캠핑갈 때도 이용하고 싶어요!
        </p>
        <div>더보기</div>
        <ul>
          <li>5.0</li>
          <li>조용해서 쉬기 좋아요</li>
        </ul>
      </div>
    </section>
  );
}

export default Review;
