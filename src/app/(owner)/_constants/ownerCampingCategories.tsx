import {
  IconAutoCamping,
  IconCampingCar,
  IconChabak,
  IconGlamping,
  IconKidsCamping,
  IconPet,
  IconPets,
  IconTent,
} from '@/public/svgs';

const CAMPING_CATEGORIES = [
  {
    image: <IconTent className='scale-[2] fill-black' />,
    buttonText: '텐트캠핑',
  },
  {
    image: <IconGlamping className='scale-[2]' />,
    buttonText: '글램핑',
  },
  {
    image: <IconCampingCar className='scale-[2]' />,
    buttonText: '카라반',
  },
  {
    image: <IconAutoCamping className='scale-[2]' />,
    buttonText: '오토 캠핑',
  },
  {
    image: <IconGlamping className='scale-[2]' />,
    buttonText: '캠프닉',
  },
  {
    image: <IconKidsCamping />,
    buttonText: '키즈 캠핑',
  },
  {
    image: <IconPet className='fill-black' />,
    buttonText: '애견 캠핑',
  },
  {
    image: <IconChabak className='scale-[2]' />,
    buttonText: '차박 ',
  },
];

export default CAMPING_CATEGORIES;
