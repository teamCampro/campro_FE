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
    icon: <IconSink />,
    order: 1,
  },
  화장실: {
    icon: <IconPublicToilet />,
    order: 2,
  },
  내부화장실: {
    icon: <IconPersonalToilet />,
    order: 2,
  },
  샤워실: {
    icon: <IconCampShower />,
    order: 3,
  },
  내부샤워실: {
    icon: <IconPersonalShower />,
    order: 3,
  },
  와이파이: {
    icon: <IconCampWifi />,
    order: 4,
  },
  바베큐: {
    icon: <IconBbq />,
    order: 5,
  },
  취사도구: {
    icon: <IconCooking />,
    order: 6,
  },
  매점: {
    icon: <IconStore />,
    order: 7,
  },
  애견동반: {
    icon: <IconPet className='fill-gray100' />,
    order: 8,
  },
  침대: {
    icon: <IconCampBed />,
    order: 9,
  },
  전기: {
    icon: <IconElectricity />,
    order: 10,
  },
  에어컨: {
    icon: <IconAirConditional />,
    order: 11,
  },
  난방기구: {
    icon: <IconHeating />,
    order: 12,
  },
  TV: {
    icon: <IconTv />,
    order: 13,
  },
  산책로: {
    icon: <IconWalkingPath />,
    order: 14,
  },
  운동시설: {
    icon: <IconExercise />,
    order: 15,
  },
  놀이시설: {
    icon: <IconPlay />,
    order: 16,
  },
  물놀이: {
    icon: <IconWaterPlay />,
    order: 16,
  },
  트램플린: {
    icon: <IconTrampoline />,
    order: 16,
  },
  장비대여: {
    icon: <IconRental />,
    order: 16,
  },
};

export default FACILITIES;
