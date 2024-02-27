import {
  IconAirConditional,
  IconBbq,
  IconCampBed,
  IconCampShower,
  IconCampWifi,
  IconCooking,
  IconElectricity,
  IconExercise,
  IconHeating,
  IconPersonalShower,
  IconPersonalToilet,
  IconPet,
  IconPlay,
  IconPublicToilet,
  IconRental,
  IconSink,
  IconStore,
  IconTrampoline,
  IconTv,
  IconWalkingPath,
  IconWaterPlay,
} from '@/public/svgs';

const FACILITIES = {
  개수대: {
    icon: <IconSink className='fill-gray600' />,
    order: 1,
  },
  화장실: {
    icon: <IconPublicToilet className='fill-gray600' />,
    order: 2,
  },
  내부화장실: {
    icon: <IconPersonalToilet className='fill-gray600' />,
    order: 2,
  },
  샤워실: {
    icon: <IconCampShower className='fill-gray600' />,
    order: 3,
  },
  내부샤워실: {
    icon: <IconPersonalShower className='fill-gray600' />,
    order: 3,
  },
  와이파이: {
    icon: <IconCampWifi className='fill-gray600' />,
    order: 4,
  },
  바베큐: {
    icon: <IconBbq className='fill-gray600' />,
    order: 5,
  },
  취사도구: {
    icon: <IconCooking className='fill-gray600' />,
    order: 6,
  },
  매점: {
    icon: <IconStore className='fill-gray600' />,
    order: 7,
  },
  애견동반: {
    icon: <IconPet className='fill-gray600' />,
    order: 8,
  },
  침대: {
    icon: <IconCampBed className='fill-gray600' />,
    order: 9,
  },
  전기: {
    icon: <IconElectricity className='fill-gray600' />,
    order: 10,
  },
  에어컨: {
    icon: <IconAirConditional className='fill-gray600' />,
    order: 11,
  },
  난방기구: {
    icon: <IconHeating className='fill-gray600' />,
    order: 12,
  },
  TV: {
    icon: <IconTv className='fill-gray600' />,
    order: 13,
  },
  산책로: {
    icon: <IconWalkingPath className='fill-gray600' />,
    order: 14,
  },
  운동시설: {
    icon: <IconExercise className='fill-gray600' />,
    order: 15,
  },
  놀이시설: {
    icon: <IconPlay className='fill-gray600' />,
    order: 16,
  },
  물놀이: {
    icon: <IconWaterPlay className='fill-gray600' />,
    order: 16,
  },
  트램플린: {
    icon: <IconTrampoline className='fill-gray600' />,
    order: 16,
  },
  장비대여: {
    icon: <IconRental className='fill-gray600' />,
    order: 16,
  },
};

export default FACILITIES;
