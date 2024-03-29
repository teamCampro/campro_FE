import {
  IconAirConditional,
  IconBbq,
  IconCampBed,
  IconCampShower,
  IconCampSink,
  IconCampWifi,
  IconCooking,
  IconElectricity,
  IconExercise,
  IconHeating,
  IconPersonalShower,
  IconPersonalToilet,
  IconPlay,
  IconPublicToilet,
  IconRental,
  IconStore,
  IconTrampoline,
  IconTv,
  IconWalkingPath,
  IconWaterPlay,
} from '@/public/svgs';

const AMENITIES_CONFIG = [
  { image: <IconStore fill={'#000'} />, buttonText: '매점' },
  { image: <IconCampWifi fill={'#000'} />, buttonText: '와이파이' },
  { image: <IconPlay fill={'#000'} />, buttonText: '놀이시설' },
  { image: <IconWaterPlay fill={'#000'} />, buttonText: '물놀이' },
  { image: <IconBbq fill={'#000'} />, buttonText: '바베큐' },
  { image: <IconRental fill={'#000'} />, buttonText: '장비대여' },
  { image: <IconTrampoline fill={'#000'} />, buttonText: '트램플린' },
  { image: <IconCampSink fill={'#000'} />, buttonText: '개수대' },
  { image: <IconPublicToilet fill={'#000'} />, buttonText: '화장실' },
  { image: <IconCampShower fill={'#000'} />, buttonText: '샤워실' },
  { image: <IconPersonalShower fill={'#000'} />, buttonText: '개인샤워실' },
  { image: <IconPersonalToilet fill={'#000'} />, buttonText: '개인화장실' },
  { image: <IconTv fill={'#000'} />, buttonText: 'TV' },
  { image: <IconHeating fill={'#000'} />, buttonText: '난방기구' },
  { image: <IconWalkingPath fill={'#000'} />, buttonText: '산책로' },
  { image: <IconAirConditional fill={'#000'} />, buttonText: '에어컨' },
  { image: <IconExercise fill={'#000'} />, buttonText: '운동시설' },
  { image: <IconElectricity fill={'#000'} />, buttonText: '전기' },
  { image: <IconCooking fill={'#000'} />, buttonText: '취사도구' },
  { image: <IconCampBed fill={'#000'} />, buttonText: '침대' },
];

export default AMENITIES_CONFIG;
