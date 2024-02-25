import {
  IconCampingCar,
  IconCampnic,
  IconChabak,
  IconGlamping,
  IconKidsCamping,
  IconPet,
  IconTent,
} from '@/public/svgs';
import { formatDate } from '../_utils/formatDate';

function createQueryString(text: string) {
  return `location=전체&checkIn=${formatDate(new Date())}&checkOut=${formatDate(new Date(Date.now() + 1000 * 60 * 60 * 24))}&adult=2&child=0&pet=0&stay=${encodeURIComponent(text)}`;
}
const LINKS = [
  {
    id: 1,
    href: `/search?${createQueryString('텐트')}`,
    text: '텐트',
    icon: <IconTent fill='#555555' />,
  },
  {
    id: 2,
    href: `/search?${createQueryString('카라반')}`,
    text: '카라반',
    icon: <IconGlamping fill='#555555' />,
  },
  {
    id: 3,
    href: `/search?${createQueryString('글램핑')}`,
    text: '글램핑',
    icon: <IconGlamping fill='#555555' />,
  },
  {
    id: 4,
    href: `/search?${createQueryString('오토캠핑')}`,
    text: '오토캠핑',
    icon: <IconCampingCar fill='#555555' />,
  },
  {
    id: 5,
    href: `/search?${createQueryString('캠프닉')}`,
    text: '캠프닉',
    icon: <IconCampnic fill='#555555' />,
  },
  {
    id: 6,
    href: `/search?${createQueryString('키즈 캠핑')}`,
    text: '키즈 캠핑',
    icon: <IconKidsCamping fill='#555555' />,
  },
  {
    id: 7,
    href: `/search?${createQueryString('애견캠핑')}`,
    text: '애견캠핑',
    icon: <IconPet fill='#555555' />,
  },
  {
    id: 8,
    href: `/search?${createQueryString('차박')}`,
    text: '차박',
    icon: <IconChabak fill='#555555' />,
  },
];

export default LINKS;
