import { IconADay, IconAWeek, IconThreeDays } from '@/public/svgs';

const STAY_TERM = [
  {
    image: <IconADay />,
    buttonText: '당일치기',
  },
  {
    image: <IconThreeDays />,
    buttonText: '2~3일',
  },
  {
    image: <IconAWeek />,
    buttonText: '장박(1주일 이상)',
  },
];

export default STAY_TERM;
