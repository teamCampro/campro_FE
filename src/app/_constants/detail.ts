export interface DetailType {
  id: number;
  type: string;
}

interface DetailListType {
  [key: string]: DetailType[];
  stay: DetailType[];
  facilities: DetailType[];
  theme: DetailType[];
  trip: DetailType[];
}

const TYPE: DetailListType = {
  stay: [
    { id: 1, type: '텐트' },
    { id: 2, type: '카라반' },
    { id: 3, type: '글램핑' },
    { id: 4, type: '오토캠핑' },
    { id: 5, type: '캠프닉' },
    { id: 6, type: '키즈 캠핑' },
    { id: 7, type: '애견캠핑' },
    { id: 8, type: '차박' },
  ],
  facilities: [
    { id: 9, type: '바베큐' },
    { id: 10, type: '모닥불' },
    { id: 11, type: '매점' },
    { id: 12, type: '와이파이' },
    { id: 13, type: '에어컨' },
    { id: 14, type: '전기장판' },
    { id: 15, type: '개인화장실' },
    { id: 16, type: '개인샤워실' },
  ],
  theme: [
    { id: 17, type: '감성적' },
    { id: 18, type: '아늑한' },
    { id: 19, type: '활기찬' },
    { id: 20, type: '자연적' },
  ],
  trip: [
    { id: 21, type: '나홀로' },
    { id: 22, type: '연인' },
    { id: 23, type: '가족' },
    { id: 24, type: '애견동반' },
  ],
};

export default TYPE;
