import {
  IconAirconditioner,
  IconBarbecue,
  IconBoat,
  IconConvenientStore,
  IconElectricBlanket,
  IconRestRoom,
  IconShower,
  IconSink,
  IconWifi,
} from '@/public/svgs';

const AMENITIES_CONFIG = [
  { Image: <IconConvenientStore />, buttonText: '매점' },
  { Image: <IconShower />, buttonText: '샤워장' },
  { Image: <IconRestRoom />, buttonText: '화장실' },
  { Image: <IconBarbecue />, buttonText: '바베큐장' },
  { Image: <IconSink />, buttonText: '개수대' },
  { Image: <IconAirconditioner />, buttonText: '에어컨' },
  { Image: <IconElectricBlanket />, buttonText: '전기장판' },
  { Image: <IconBoat />, buttonText: '레저' },
  { Image: <IconWifi />, buttonText: '와이파이' },
];

export default AMENITIES_CONFIG;
