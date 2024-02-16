export interface ReserveListType {
  orderId: number;
  placeName: string;
  address: string;
  tel: string;
  max_people: string;
  site: {
    campingZoneId: number;
    campingZoneName: string;
    siteName: string;
    siteId: number;
    planImage: string;
  };
  group: GroupType;
  options: {
    options: OptionType[];
  };
  orderInfo: OrderInfoType;
  reviews: ReviewsType;
  carInfo: string;
  check_state: number;
  start_day: string;
  end_day: string;
  image: string;
}

interface GroupType {
  [key: string]: number;
  adult: number;
  child: number;
  pet: number;
}

interface OptionType {
  optionId: number;
  option: string;
  price: number;
  count: number;
}

interface OrderInfoType {
  time: string;
  type: string;
  payment: string;
}

interface ReviewsType {
  score: string;
  totalCount: number;
}
