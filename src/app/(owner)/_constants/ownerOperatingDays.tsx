import { IconAllTime, IconDay, IconWeekend } from '@/public/svgs';

const daysConfig = [
  {
    image: <IconDay />,
    buttonText: '평일',
  },
  {
    image: <IconWeekend />,
    buttonText: '주말',
  },
  {
    image: <IconAllTime />,
    buttonText: '평일 + 주말',
  },
];

export default daysConfig;
