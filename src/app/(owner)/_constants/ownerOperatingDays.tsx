import { IconAllTime, IconDay, IconWeekend } from "@/public/svgs";

const daysConfig = [
  {
    Image: <IconDay />,
    buttonText: '평일',
  },
  {
    Image: <IconWeekend />,
    buttonText: '주말',
  },
  {
    Image: <IconAllTime />,
    buttonText: '평일 + 주말',
  },
];

export default daysConfig