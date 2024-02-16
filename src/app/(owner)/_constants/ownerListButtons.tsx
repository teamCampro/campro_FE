import {
  IconFireplace,
  IconPets,
  IconJumpingPerson,
  IconInstagram,
} from '@/public/svgs';

export interface Config {
  Image: JSX.Element;
  buttonText: string;
}

const themeConfig = [
  { Image: <IconFireplace />, buttonText: '아늑한' },
  { Image: <IconPets />, buttonText: '반려동물 출입 가능' },
  { Image: <IconJumpingPerson />, buttonText: '활기찬' },
  { Image: <IconInstagram />, buttonText: '감성적' },
];

export default themeConfig;
