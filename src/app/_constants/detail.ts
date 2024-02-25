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
    { id: 9, type: '매점' },
    { id: 10, type: '와이파이' },
    { id: 11, type: '애견동반' },
    { id: 12, type: '놀이시설' },
    { id: 13, type: '물놀이' },
    { id: 14, type: '바베큐' },
    { id: 15, type: '장비대여' },
    { id: 16, type: '트램플린' },
    { id: 17, type: '개수대' },
    { id: 18, type: '화장실' },
    { id: 19, type: '샤워실' },
    { id: 20, type: '개인샤워실' },
    { id: 21, type: '개인화장실' },
    { id: 22, type: 'TV' },
    { id: 23, type: '난방기구' },
    { id: 24, type: '산책로' },
    { id: 25, type: '에어컨' },
    { id: 26, type: '운동시설' },
    { id: 27, type: '전기' },
    { id: 28, type: '취사도구' },
    { id: 29, type: '침대' },
  ],
  theme: [
    { id: 30, type: '감성적' },
    { id: 31, type: '아늑한' },
    { id: 33, type: '활기찬' },
    { id: 34, type: '자연적' },
  ],
  trip: [
    { id: 35, type: '나홀로' },
    { id: 36, type: '연인' },
    { id: 37, type: '가족' },
  ],
};

export default TYPE;
