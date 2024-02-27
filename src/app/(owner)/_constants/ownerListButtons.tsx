import {
  IconFireplace,
  IconPets,
  IconJumpingPerson,
  IconInstagram,
} from '@/public/svgs';

export interface Config {
  image: JSX.Element;
  buttonText: string;
}

const themeConfig = [
  { image: <IconFireplace />, buttonText: '아늑한' },
  { image: <IconPets />, buttonText: '자연적' },
  { image: <IconJumpingPerson />, buttonText: '활기찬' },
  { image: <IconInstagram />, buttonText: '감성적' },
];

export default themeConfig;
