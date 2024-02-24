import {
  IconBadminton,
  IconBbq,
  IconBoardGame,
  IconCooking,
  IconNothing,
  IconSoccerField,
  IconTrampoline,
  IconWalkingPath,
  IconWaterPlay,
} from '@/public/svgs';

const CAMPING_ACTIVITIES = [
  {
    image: <IconWaterPlay />,
    buttonText: '물놀이',
  },
  {
    image: <IconWalkingPath />,
    buttonText: '산책',
  },
  {
    image: <IconTrampoline />,
    buttonText: '트램펄린',
  },
  {
    image: <IconBadminton />,
    buttonText: '배드민턴',
  },
  {
    image: <IconSoccerField />,
    buttonText: '풋살/족구',
  },
  {
    image: <IconCooking />,
    buttonText: '요리',
  },
  {
    image: <IconBbq />,
    buttonText: '바베큐',
  },
  {
    image: <IconBoardGame />,
    buttonText: '보드게임',
  },
  {
    image: <IconNothing />,
    buttonText: '없음',
  },
];

export default CAMPING_ACTIVITIES;
