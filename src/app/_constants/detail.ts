interface DetailType {
  [key: string]: string[];
}

const TYPE: DetailType = {
  stay: [
    '텐트',
    '카라반',
    '글램핑',
    '오토캠핑',
    '캠프닉',
    '키즈 캠핑',
    '애견캠핑',
    '차박',
  ],
  home: [
    '바베큐',
    '모닥불',
    '매점',
    '와이파이',
    '에어컨',
    '전기장판',
    '레저',
    '개인화장실',
    '개인샤워실',
  ],
  theme: ['감성적', '아늑한', '활기찬', '자연적'],
  trip: ['나홀로', '연인', '가족', '애견동반'],
};

export default TYPE;
