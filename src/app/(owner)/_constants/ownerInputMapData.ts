const OWNER_INPUT_MAP_DATA = [
  {
    label: '사이트 이름',
    placeholder: '사이트 이름을 입력해주세요.',
    unit: '',
    inputType: 'text',
    key: 'siteName',
  },
  {
    label: '가격',
    placeholder: '가격을 입력해주세요.',
    unit: '₩',
    inputType: 'number',
    key: 'price',
  },
  {
    label: '최소 숙박 일',
    placeholder: '최소 숙박일을 입력해주세요. ex) 2',
    unit: '일',
    inputType: 'number',
    key: 'minNights',
  },
  {
    label: '최소 숙박 인원',
    placeholder: '최소 숙박 인원을 입력해주세요. ex) 4',
    unit: '명',
    inputType: 'number',
    key: 'minPeople',
  },
  {
    label: '최대 숙박 인원',
    placeholder: '최대 숙박 인원을 입력해주세요. ex) 4',
    unit: '명',
    inputType: 'number',
    key: 'maxPeople',
  },
  {
    label: '최대 주차 가능 수',
    placeholder: '최대 주차 가능 수를 입력해주세요. ex) 2',
    unit: '대',
    inputType: 'number',
    key: 'maxParking',
  },
  {
    label: '주차 가이드',
    placeholder: 'ex) 텐트 옆 주차',
    unit: '',
    inputType: 'text',
    key: 'parkingGuide',
  },
];

export default OWNER_INPUT_MAP_DATA;
