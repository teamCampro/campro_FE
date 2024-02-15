const { type } = require('os');

const mapMock = [
  {
    id: 1,
    placeName: '유령 무희 캠핑장',
    price: 40000,
    address: '경기 안성시',
    imgUrl:
      'https://image.fmkorea.com/files/attach/new3/20231214/14339012/2857140960/6504813238/99b983892094b5c6d2fc3736e15da7d1.png',
    location: { lat: 37.27943075229118, lng: 127.01763998406159 },
  },
  {
    id: 2,
    price: 70000,
    placeName: '밤의 끝자락 캠핑장',
    address: '강원 속초시',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoQ9uH%2FbtqCynMk5m1%2FYEnYKsFOwKkFZmc8rRtnU1%2Fimg.png',
    location: { lat: 37.55915668706214, lng: 126.92536526611102 },
  },
  {
    id: 3,
    price: 90000,
    placeName: '세릴다의 원한 캠핑장',
    address: '충남 태안군',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtJ2LU%2FbtqCxPPVM4d%2FSHEc9IremCZSIgRAkN5GXk%2Fimg.jpg',
    location: { lat: 35.13854258261161, lng: 129.1014781294671 },
  },
  {
    id: 4,
    price: 110000,
    placeName: '기회 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcNArNb%2FbtqCMnj3XRX%2FiouyDk3h912eBHgbTDeBz1%2Fimg.jpg',
    location: { lat: 37.55518388656961, lng: 126.92926237742505 },
  },
  {
    id: 5,
    price: 100000,
    placeName: '오만 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F3i4qz%2FbtqCy4lZCWd%2FROk9NFSccyZbw2NdkfDbY0%2Fimg.jpg',
    location: { lat: 35.20618517638034, lng: 129.07944301057026 },
  },
  {
    id: 6,
    price: 50000,
    placeName: '악의 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FIaCWK%2FbtqCDlMOQF9%2FuG4EnRFSKo7HfYgU741z20%2Fimg.png',
    location: { lat: 37.561110808242056, lng: 126.9831268386891 },
  },
  {
    id: 7,
    price: 70000,
    placeName: '몰락한 왕의 검 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoQ9uH%2FbtqCynMk5m1%2FYEnYKsFOwKkFZmc8rRtnU1%2Fimg.png',
    location: { lat: 37.86187129655063, lng: 127.7410250820423 },
  },
  {
    id: 8,
    price: 210000,
    placeName: '루난의 허리케인 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcAD1wf%2FbtqCy4lZRTM%2FJekjFZUKsYJa79LliZMjC1%2Fimg.jpg',
    location: { lat: 35.10233410927457, lng: 129.02611815856181 },
  },
  {
    id: 9,
    price: 200000,
    placeName: '치속 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbmc6Bm%2FbtqCD81gXSk%2FZZGu8KHY6Hwk25KTNh5jd0%2Fimg.jpg',
    location: { lat: 35.10215562270429, lng: 129.02579793018205 },
  },
  {
    id: 10,
    price: 180000,
    placeName: '어둠 수확 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd9CY9B%2FbtqCB7IAOzm%2F7fxNuKlJWRpFkJaLqpUF2K%2Fimg.jpg',
    location: { lat: 35.475423012251106, lng: 128.76666923366042 },
  },
  {
    id: 11,
    price: 150000,
    placeName: '여진 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt47c7e1e814519dc2/60ee0c8f8c0ef444a6835a14/demacia-grandplaza.jpg',
    location: { lat: 35.93282824693927, lng: 126.95307628834287 },
  },
  {
    id: 12,
    price: 110000,
    placeName: '수호자 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://i.namu.wiki/i/RLuwnudH_hltpdQTWxYXaV2mhlxY9dQe294fZwp2resUZwQkrDrm-S_fvWyWZIyyN0xfKU4oauAseYBnl1BMR_QR-vxaPOBdsxRpnBnU1CgGEIvyWXP5GlOG1pWFv2Z3CG2z_hi8b0XePyy6hd-WGw.webp',
    location: { lat: 36.33884892276137, lng: 127.393666019664 },
  },
  {
    id: 13,
    price: 120000,
    placeName: '무한의 대검 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt640eb217bfb3bbfb/60ee11cbc019ad2aaa39a552/shadow_isles_environment_06.jpg',
    location: { lat: 37.520412849636, lng: 126.9742764161581 },
  },
  {
    id: 14,
    price: 70000,
    placeName: '피바라기 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'data:image/jpeg;base64,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',
    location: { lat: 35.155139675209675, lng: 129.06154773758374 },
  },
  {
    id: 15,
    price: 110000,
    placeName: '스태틱의 단검 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: { lat: 35.816041994696576, lng: 127.11046706211324 },
  },
  {
    id: 16,
    price: 60000,
    placeName: '정수 약탈자 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: { lat: 37.586112739308916, lng: 127.02949148517999 },
  },
  {
    id: 17,
    price: 80000,
    placeName: '불멸의 철갑궁 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: { lat: 37.50380641844987, lng: 127.02130716617751 },
  },
  {
    id: 18,
    price: 90000,
    placeName: '거대한 히드라 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: { lat: 37.55155704387368, lng: 126.92161115892036 },
  },
  {
    id: 19,
    price: 110000,
    placeName: '삼위일체 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: { lat: 37.55413060051369, lng: 126.92207472929526 },
  },
  {
    id: 20,
    price: 100000,
    placeName: '구인수의 격노검 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt274f870a682ed0ca/60ee11e6855e1f64f143f01a/shurima_cascade_01.jpg',
    location: { lat: 36.362321615174835, lng: 127.35000483225389 },
  },
  {
    id: 21,
    price: 60000,
    placeName: '징수의 총 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: { lat: 37.55227862908755, lng: 126.92280546294998 },
  },
  {
    id: 22,
    price: 80000,
    placeName: '크라켄 학살자 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: { lat: 37.490413948014606, lng: 127.02079678472444 },
  },
  {
    id: 23,
    price: 190000,
    placeName: '도미닉 경의 인사 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: { lat: 35.172358507549596, lng: 126.90545394866643 },
  },
  {
    id: 24,
    price: 150000,
    placeName: '폭풍갈퀴 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: { lat: 35.15474103200252, lng: 129.11827889154455 },
  },
  {
    id: 25,
    price: 130000,
    placeName: '나보리 신속검 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: { lat: 37.516081250973485, lng: 127.02369057166361 },
  },
  {
    id: 26,
    price: 120000,
    placeName: '애쉬 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 35.86835862950247,
      lng: 128.59755089175871,
    },
  },
  {
    id: 27,
    price: 300000,
    placeName: '자이라 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 38.86835862950247,
      lng: 130.59755089175871,
    },
  },
  {
    id: 28,
    price: 250000,
    placeName: '트린다미어 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbrccJW%2Fbtr9C5dlCK2%2FVGEpGkTgTsOIUVkeGIOPWk%2Fimg.jpg',
    location: {
      lat: 38.86835662950247,
      lng: 129.59755089175099,
    },
  },
  {
    id: 29,
    price: 230000,
    placeName: '브랜드 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 33.76835862950247,
      lng: 128.59755089175871,
    },
  },
  {
    id: 30,
    price: 190000,
    placeName: '아펠리오스 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 33.96835862950247,
      lng: 129.59755089175871,
    },
  },
  {
    id: 31,
    price: 140000,
    placeName: '케이틀린 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 35.86835862950247,
      lng: 128.59755089175871,
    },
  },
  {
    id: 32,
    price: 80000,
    placeName: '밀리오 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 36.16835862950247,
      lng: 128.69755089175871,
    },
  },
  {
    id: 33,
    price: 98000,
    placeName: '유미 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://e1.pxfuel.com/desktop-wallpaper/991/865/desktop-wallpaper-artstation-yuumi-lol.jpg',
    location: {
      lat: 36.26835862950247,
      lng: 128.89755089175871,
    },
  },
  {
    id: 34,
    price: 55000,
    placeName: '프렐요드 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 36.36835862950247,
      lng: 128.79755089175871,
    },
  },
  {
    id: 35,
    price: 150000,
    placeName: '레오나 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6wOnh%2Fbtr9CI3wHH1%2FXWr5TCiXlAkUo2uYIIE9w0%2Fimg.jpg',
    location: {
      lat: 36.76835862950247,
      lng: 126.19755089175871,
    },
  },
  {
    id: 36,
    price: 140000,
    placeName: '프렐요드 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbCqfyg%2Fbtr9AatfmKe%2FL9yYTOIyyeMmJKPNoHqTkK%2Fimg.jpg',
    location: {
      lat: 37.86835462950247,
      lng: 122.54755089175871,
    },
  },
  {
    id: 37,
    price: 210000,
    placeName: '바루스 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 35.86835862950247,
      lng: 128.59755089175871,
    },
  },
  {
    id: 38,
    price: 460000,
    placeName: '사미라 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 31.26835862950247,
      lng: 125.59755089175871,
    },
  },
  {
    id: 39,
    price: 70000,
    placeName: '애니 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcGEZMP%2Fbtr9DU3HCey%2F3akVU18ArY2yaveXFWrrZK%2Fimg.jpg',
    location: {
      lat: 32.46835862950247,
      lng: 126.59755089175871,
    },
  },
  {
    id: 40,
    price: 72000,
    placeName: '트위스티드 페이트 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 35.86835862950247,
      lng: 123.59755089175871,
    },
  },
  {
    id: 41,
    price: 175000,
    placeName: '흐웨이 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 36.86835862250247,
      lng: 128.59865089175871,
    },
  },
  {
    id: 42,
    price: 79000,
    placeName: '람머스 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 33.86835862950247,
      lng: 122.59755089175871,
    },
  },
  {
    id: 43,
    price: 68000,
    placeName: '징크스 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 38.26835862950247,
      lng: 126.29755089175871,
    },
  },
  {
    id: 44,
    price: 97000,
    placeName: '미스포츈 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 30.86835833950247,
      lng: 130.52055089175871,
    },
  },
  {
    id: 45,
    price: 51000,
    placeName: '카사딘 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 31.46835862950247,
      lng: 118.59755089175871,
    },
  },
  {
    id: 46,
    price: 77000,
    placeName: '갈리오 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 34.86345862950247,
      lng: 128.59755077175871,
    },
  },
  {
    id: 47,
    price: 56000,
    placeName: '마오카이 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 33.86835862955347,
      lng: 119.59755089175871,
    },
  },
  {
    id: 48,
    price: 41000,
    placeName: '이즈리얼 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBm5dv%2Fbtr9A5rmRFH%2FdcKLxTyKaZoiAGcbYFtF1k%2Fimg.jpg',
    location: {
      lat: 34.86835862955347,
      lng: 128.59755089175871,
    },
  },
  {
    id: 49,
    price: 51000,
    placeName: '말자하 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHwwfDB8fHww',
    location: {
      lat: 33.86835862951247,
      lng: 127.59755089175871,
    },
  },
  {
    id: 50,
    price: 73000,
    placeName: '자르반 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 51,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 52,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 53,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 54,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 55,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 56,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 57,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 58,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 59,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 60,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 61,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 62,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 63,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 64,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 65,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 66,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 67,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 68,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 69,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 70,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 71,
    price: 73000,
    placeName: '호날두 캠핑장',
    address: '서울 영등포구',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsPqY4%2FbtqKSWeazQe%2FOHlHOzmMJnJKT2emnC3QVk%2Fimg.jpg',
    location: {
      lat: 40.86835862950247,
      lng: 138.59755089175871,
    },
  },
  {
    id: 72,
    price: 90000,
    placeName: '세릴다의 원한 캠핑장',
    address: '충남 태안군',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtJ2LU%2FbtqCxPPVM4d%2FSHEc9IremCZSIgRAkN5GXk%2Fimg.jpg',
    location: { lat: 35.13854258261161, lng: 129.1014781294671 },
  },
  {
    id: 73,
    price: 90000,
    placeName: '세릴다의 원한 캠핑장',
    address: '충남 태안군',
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtJ2LU%2FbtqCxPPVM4d%2FSHEc9IremCZSIgRAkN5GXk%2Fimg.jpg',
    location: { lat: 35.13854258261161, lng: 129.1014781294671 },
  },
];

const facilities = [
  '바베큐',
  '모닥불',
  '매점',
  '와이파이',
  '에어컨',
  '전기장판',
  '개인화장실',
  '개인샤워실',
];

function generateRandomNumber(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}

function generateRandomFormat(num1, num2, num3) {
  const part1 = generateRandomNumber(num1);
  const part2 = generateRandomNumber(num2);
  const part3 = generateRandomNumber(num3);

  return `${part1}-${part2}-${part3}`;
}

const owners = ['고민혁', '김진우', '남민섭', '이정윤', '윤대호'];
const campingTypes = [
  '텐트캠핑',
  '카라반',
  '글램핑',
  '오토캠핑',
  '캠프닉',
  '키즈캠핑',
  '애견캠핑',
  '차박',
];

const tags = [
  '깨끗해요',
  '매너 타임을 잘 지켜요',
  '조용해요',
  '사장님이 cs를 양보해요',
  '아늑해요',
];

function generateRandomValuesForTags(tags) {
  return tags.map((tag) => ({
    text: tag,
    count: Math.floor(Math.random() * 2000) + 1,
  }));
}

function getRandomFacilities(facilities, num) {
  const shuffled = facilities.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function generateRandomSites(numberOfSites, types) {
  const facilitiesOptions = [
    '바베큐',
    '모닥불',
    '매점',
    '와이파이',
    '에어컨',
    '전기장판',
    '개인화장실',
    '개인샤워실',
  ];
  const imagesOptions = [
    'https://upload2.inven.co.kr/upload/2017/01/03/bbs/i13963558439.png',
    'https://static.inven.co.kr/column/2019/02/06/news/i14483364038.jpg',
  ];

  const sites = [];

  for (let i = 0; i < numberOfSites; i++) {
    const facilitiesCount =
      Math.floor(Math.random() * facilitiesOptions.length) + 1;
    const selectedFacilities = [];
    while (selectedFacilities.length < facilitiesCount) {
      const facility =
        facilitiesOptions[Math.floor(Math.random() * facilitiesOptions.length)];
      if (!selectedFacilities.includes(facility)) {
        selectedFacilities.push(facility);
      }
    }

    const site = {
      siteId: i + 1,
      name: `사이트 ${i + 1}`,
      type: types[Math.floor(Math.random() * types.length)],
      size: `${(Math.floor(Math.random() * 5) + 4).toFixed(1)}x10m`,
      floor: '파쇄석',
      checkInTime: '23:00',
      checkOutTime: '24:00',
      minStay: '1박',
      allowPet: Math.random() < 0.5,
      parkingLimit: Math.floor(Math.random() * 3) + 1,
      parkingLocation: '텐트 옆 주차',
      allowTrailer: Math.random() < 0.5,
      allowCampingCar: Math.random() < 0.5,
      facilities: selectedFacilities,
      price: Math.floor(Math.random() * (1000000 - 200000 + 1)) + 200000,
      images: imagesOptions,
    };

    sites.push(site);
  }

  return sites;
}

function generateTopSiteWithSubSites(placeName, types) {
  const numberOfSites = Math.floor(Math.random() * 5) + 1;
  const subSites = generateRandomSites(numberOfSites, types);

  const allowTrailerInSubSites = subSites.some((site) => site.allowTrailer);
  const top = [];
  const topSites = Math.floor(Math.random() * 2) + 1;
  for (let i = 0; i < topSites; i++) {
    const facilities = [];
    const topSite = {
      id: i + 1,
      name: `${placeName.slice(Math.random() * placeName.length + 1)}`,
      allowPet: subSites.some((site) => site.allowPet),
      minStay: '1박',
      parkingLimit: Math.max(...subSites.map((site) => site.parkingLimit)),
      parkingLocation: '텐트 옆 주차',
      size: `${(Math.floor(Math.random() * 5) + 4).toFixed(1)}x10m`,
      checkInTime: '23:00',
      checkOutTime: '24:00',
      baseGuests: '성인 2인',
      type: types[Math.floor(Math.random() * types.length)],
      floor: '파쇄석',
      allowTrailer: allowTrailerInSubSites,
      allowCampingCar: subSites.some((site) => site.allowCampingCar),
      facilities: [...new Set(subSites.flatMap((sub) => sub.facilities))],
      extraGuests: Math.floor(Math.random() * 4 + 1),
      area: '하단 구역',
      images: [
        'https://upload2.inven.co.kr/upload/2017/01/03/bbs/i13963558439.png',
        'https://static.inven.co.kr/column/2019/02/06/news/i14483364038.jpg',
      ],
      sites: subSites,
    };
    top.push(topSite);
  }

  return top;
}

function generateRandomReviews(sites, numberOfReviews) {
  const nicknames = ['황족정윤', '미녀기', '갓민섭', '캐리왕진우', '자연인123'];
  const tags = [
    '사장님이 cs를 양보해요',
    '민섭님이 cs를 다 뺏어먹어요',
    '조용해서 좋아요',
    '가족과 함께하기 좋아요',
    '힐링되는 곳',
  ];

  const reviews = [];

  sites.forEach((site) => {
    const review = {
      nickName: nicknames[Math.floor(Math.random() * nicknames.length)],
      createdAt: new Date(
        2024,
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1,
      )
        .toISOString()
        .split('T')[0],
      siteId: site.siteId,
      siteName: site.name,
      group: {
        adult: Math.floor(Math.random() * 4) + 1,
        child: Math.floor(Math.random() * 3),
        pet: Math.floor(Math.random() * 2),
      },
      content: `${site.name} 정말 좋았어요! 다음에 또 방문하고 싶습니다.`,
      score: Math.floor(Math.random() * 5) + 1,
      tag: tags[Math.floor(Math.random() * tags.length)],
    };
    reviews.push(review);
  });

  return {
    totalCount: reviews.length,
    averageScore:
      reviews.reduce((acc, review) => acc + review.score, 0) / reviews.length,
    contents: reviews,
  };
}
const createMockData = () => {
  let mockData = [];
  mapMock.forEach((mock, i) => {
    const types = getRandomFacilities(campingTypes, Math.random() * 8 + 1);
    const sites = generateRandomSites(Math.random() * 5 + 1, types);
    mockData.push({
      id: mock.id,
      placeName: mock.placeName,
      address: mock.address,
      tel: `010-1234-${String(i).padStart(4, '0')}`,
      imgUrl: mock.imgUrl,
      facilities: getRandomFacilities(facilities, Math.random() * 8 + 1),
      location: { lat: mock.location.lat, lng: mock.location.lng },
      planImage: 'https://camping.dpto.or.kr/images/sub/new_map1.jpg',
      mannerTimeStart: '08:00',
      mannerTimeEnd: '09:00',
      openTime: '매월 30일 23시',
      nextOpen: '2024.04.30 오후 11시',
      guide: {
        usage: `<div>문의/상담 운영시간 (09:30 ~ 21:30)</div><div>입실 시 관리실에 방문하여 예약자 확인 및 이용안내 후 입장 가능합니다.</div><div>- 12시부터 14시 사이에는 화장실, 샤워실, 개수대, 쓰레기장 등 캠핑장 청소를 진행하므로 입실이 어렵습니다.</div><br><div># 기준 숙박인원, 차량안내</div> <div>- 사이트 1면 당 정원 4인(성인2/미성년2), 차량 1대</div><div>- 다자녀가족의 경우 예약 시 관리실에 알려주시면 미성년은 추가비용 없이 이용 가능합니다</div><div>- 기준차량 초과 시 1대 당 1만원의 주차요금이 발생됩니다.</div><div># 외부손님(식사초대 등) 방문금지</div><div>- 보안 및 안전관리로 예외없이 금지하며 현장 적발 시 즉각 퇴실조치 합니다.</div><br><div># 차박, 도킹텐트, 텐트 트레일러는 c구역에서만 가능(캠핑카/카라반 이용불가)</div><br><div># 동반캠핑(가족단위, 최대 2팀까지만 가능)</div><div>- 매너타임 동안 잦은 소음발생으로 인한 불편 예방 조치이므로 성인팀은 불가능합니다.</div> <div>- 위반하여 예약 적발 시 예약이 취소되거나 입실이 거부될 수 있습니다.</div><br><div># 매너타임(22:00 ~ 07:00) - 22시 이후 유도등 외 모든 조명이 소등됩니다.</div> <div>- 관리자가 30분 간격으로 순찰합니다. 소음으로 인한 불편발생 시 관리실로 연락주시면 됩니다.</div><br><div># 기타 이용/안전수칙 안내</div> <div>1) 화재발생의 위험이 있는 기구사용 또는 행위 절대금지 </div><div>2) 모닥불은 반드시 화로에 이용하셔야 하며 파쇄석 위에서 바로사용 불가능</div><div> - 사용 후 재는 꼭 수거통에 버려주세요.</div> <div>- 당일 기상상황에 따라 화로 이용이 불가능할 수 있습니다.</div><div>3) 생활쓰레기 배출금지</div> <div>- 고장난 캠핑용품, 우산, 전기장판 등 생활쓰레기는 일반수거가 불가능합니다.</div><div>4) 캠핑장 내 차량이동 시 10km/h 이하로 서행, 18시 이후 안전을 위해 차량통행 제한 </div><div>5) 텐트 내 전기사용량은 안전을 위해 법령기준 600W 이하로 제한 </div><div>- 화재발생 위험이 높은 전열기구의 사용을 절대금지합니다.</div> <div>- 허용용량 초과제픔 사용 또는 위험기구의 사용위반 시 강제조치하며 모든 책임은 이용객에게 있습니다.</div><div>6) 반려동물 동반불가 </div><div>7) 사이트 전 구역 흡연 절대불가, 주차장 가장자리에 흡연구역이 마련되어 있습니다.</div> <div>8) 캠핑장 내 시설물 파손 또는 개인 귀중품 분실 시 모든 책임은 이용객에게 있으므로 유의해주시기 바랍니다. ${mock.placeName} 화이팅</div>`,
        refund: `<div>1. 환불 규정은 입실일(체크인 일자) 기준으로 적용됩니다.</div><div>2. 환불 규정은 예약 당시 고지된 환불 규정의 적용을 받으며, 캠핑장의 환불 규정과 예약 당시의 환불 규정은 상이할 수 있습니다.</div><div>· 예약 당시 환불 규정 확인 경로: 앱 > 예약 내역 > 하단 '예약일 기준 취소 환불 규정' 클릭 시 확인 가능</div><div>1. 취소 환불 규정은 숙박요금에 한해 적용됩니다.※ 숙박금액 적용항목: 사이트 이용금액, 초과 인원 요금</div><div>2. 추가 옵션은 환불 규정 적용 제외 항목이며, 취소수수료 차감 없이 100% 환불 됩니다.</div><div>3. 연박(2일 이상의 숙박) 예약 시 환불 규정은 각 예약 일자와 무관하게 최초 입실일을 기준으로 일괄 적용됩니다.</div><br><div>취소 불가 사항</div><div>입실(체크인) 시각 이후(No show)에는 예약취소 및 환불이 불가능합니다.</div><div>※ No show란 : 사전 연락 없이 예약된 사이트를 이용하지 않는 것을 지칭</div><div>환불 규정 적용 예외 정책</div><div>결제 완료(예약 완료) 시각으로부터 30분 이내 취소 시 100% 환불 취소가 가능합니다.</div> <div>단, 무통장입금 예약 건은 캠핑장 자체 환불 수수료가 공제 될 수 있습니다.</div><div>유의사항</div><div>현장에서 발생된 숙박시설과의 분쟁으로 인한 취소/환불 요청 시 당사는 통신판매중개자로 취소 및 환불 처리에 관여하지 않습니다. 하하하하하 ${mock.placeName} 화이팅</div>`,
      },
      ownerInfo: {
        ownerName: getRandomFacilities(owners, 1)[0],
        placeName: mock.placeName,
        address: mock.address,
        email: `campro${mock.id}@gmail.com`,
        ownerRegistrationNumber: generateRandomFormat(3, 2, 9),
        placeRegistrationNumber: generateRandomFormat(3, 4, 3),
      },
      types: types,
      tag: {
        text: '청결도 만족도가 높은 곳이에요',
        list: generateRandomValuesForTags(tags),
      },
      intro: `${mock.placeName}은 매우 좋습니다 이유는 ${mock.placeName}이기 때문입니다`,
      campingZones: generateTopSiteWithSubSites(mock.placeName, types),
      reviews: generateRandomReviews(sites, Math.random() * 10 + 1),
    });
  });

  return mockData;
};

console.log(JSON.stringify(createMockData()));
