import { IconGlamping, IconTent } from '@/public/svgs';
import { formatDate } from '../_utils/formatDate';

function createQueryString(text: string) {
  return `location=전체&checkIn=${formatDate(new Date())}&checkOut=${formatDate(new Date(Date.now() + 1000 * 60 * 60 * 24))}&adult=2&child=0&pet=0&campType=${encodeURIComponent(text)}`;
}
const LINKS = [
  {
    id: 1,
    href: `/search?${createQueryString('텐트')}`,
    text: '텐트',
    icon: <IconTent className='fill-black' />,
  },
  {
    id: 2,
    href: `/search?${createQueryString('카라반')}`,
    text: '카라반',
    icon: <IconGlamping />,
  },
  {
    id: 3,
    href: `/search?${createQueryString('글램핑')}`,
    text: '글램핑',
    icon: <IconGlamping />,
  },
  {
    id: 4,
    href: `/search?${createQueryString('오토캠핑')}`,
    text: '오토캠핑',
    icon: <IconGlamping />,
  },
  {
    id: 5,
    href: `/search?${createQueryString('캠프닉')}`,
    text: '캠프닉',
    icon: <IconGlamping />,
  },
  {
    id: 6,
    href: `/search?${createQueryString('키즈 캠핑')}`,
    text: '키즈 캠핑',
    icon: <IconGlamping />,
  },
  {
    id: 7,
    href: `/search?${createQueryString('애견캠핑')}`,
    text: '애견캠핑',
    icon: <IconGlamping />,
  },
  {
    id: 8,
    href: `/search?${createQueryString('차박')}`,
    text: '차박',
    icon: <IconGlamping />,
  },
];

export default LINKS;
