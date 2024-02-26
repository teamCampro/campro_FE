import { IconSearchHalf, IconSearchList, IconSearchMap } from '@/public/svgs';
import { ReactNode } from 'react';
import { MapSizeType } from '../(header)/search/page';

const MAP_OPTIONS: {
  text: string;
  mapSize: MapSizeType;
  mobileIcon?: ReactNode;
  icon: ReactNode;
}[] = [
  {
    text: '목록+지도',
    mapSize: 'half',
    mobileIcon: <IconSearchList fill='#555555' />,
    icon: <IconSearchHalf fill='#555555' />,
  },
  {
    text: '목록만',
    mapSize: 'list',
    icon: <IconSearchList fill='#555555' />,
  },
  {
    text: '지도만',
    mapSize: 'map',
    icon: <IconSearchMap fill='#555555' />,
  },
];

export default MAP_OPTIONS;
