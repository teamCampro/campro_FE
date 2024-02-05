import { IconSearchHalf, IconSearchList, IconSearchMap } from '@/public/svgs';
import { ReactNode } from 'react';
import { MapSizeType } from '../(header)/search/page';

const MAP_SIZES: {
  text: string;
  mobileText: string;
  mapSize: MapSizeType;
  icon: ReactNode;
}[] = [
  {
    text: '목록+지도',
    mobileText: '목록만',
    mapSize: 'half',
    icon: <IconSearchHalf />,
  },
  {
    text: '목록만',
    mobileText: '목록만',
    mapSize: 'list',
    icon: <IconSearchList />,
  },
  {
    text: '지도만',
    mobileText: '지도만',
    mapSize: 'map',
    icon: <IconSearchMap />,
  },
];

export default MAP_SIZES;
