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
    mobileIcon: <IconSearchList />,
    icon: <IconSearchHalf />,
  },
  {
    text: '목록만',
    mapSize: 'list',
    icon: <IconSearchList />,
  },
  {
    text: '지도만',
    mapSize: 'map',
    icon: <IconSearchMap />,
  },
];

export default MAP_OPTIONS;
