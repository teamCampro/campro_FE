import React, { useState } from 'react';
import { MapSizeType } from '../../(header)/search/page';
import {
  IconList,
  IconListAndMap,
  IconMap,
  IconNavigationDown,
  IconNavigationUp,
} from '@/public/svgs';

interface FloatingButtonContent {
  name: string;
  type: MapSizeType;
}

interface Props {
  onMapResize: (size: MapSizeType) => void;
}

const MAP_SIZE_NAME = {
  listAndMap: '목록+지도',
  list: '목록만',
  map: '지도만',
};

let floatingButtonContents: FloatingButtonContent[] = [
  { name: '목록+지도', type: 'half' },
  { name: '목록만', type: 'list' },
  { name: '지도만', type: 'map' },
];

function MapFloatingButton({ onMapResize }: Props) {
  const [toggleFloating, setToggleFloating] = useState(false);
  const [currentButton, setCurrentButton] =
    useState<FloatingButtonContent | null>(floatingButtonContents[0]);
  const [insideButtons, setInsideButtons] = useState<
    FloatingButtonContent[] | undefined
  >();

  const handleFloatingButtonClick = () => {
    setToggleFloating(!toggleFloating);

    const insideButtons = floatingButtonContents.filter(
      (contents) => contents !== currentButton,
    );

    setInsideButtons(insideButtons);
  };

  const handleInsideFloatingButtonClick = (button: FloatingButtonContent) => {
    setToggleFloating(!toggleFloating);
    setCurrentButton(button);

    if (button.name === MAP_SIZE_NAME.map) {
      onMapResize('map');
      return;
    }

    if (button.name === MAP_SIZE_NAME.list) {
      onMapResize('list');
      return;
    }

    onMapResize('half');
  };

  const extractButtonImage = (MapSize: MapSizeType) => {
    switch (MapSize) {
      case 'half':
        return <IconListAndMap />;
      case 'list':
        return <IconList />;
      case 'map':
        return <IconMap />;
    }
  };

  return (
    <div className='flex-center fixed bottom-24pxr z-10 w-full'>
      <button
        className={`pr-14px flex w-127pxr items-center gap-4pxr rounded-full border  bg-white py-12pxr pl-20pxr ${toggleFloating ? 'border-primary100' : 'border-gray400'}`}
        onClick={() => handleFloatingButtonClick()}
      >
        <div className='flex-center'>
          <span
            className={`w-65pxr font-medium font-body2 ${toggleFloating ? 'text-primary100 font-body2-semibold' : 'text-gray600'}`}
          >
            {currentButton?.name}
          </span>
        </div>
        {toggleFloating ? (
          <IconNavigationDown />
        ) : (
          <IconNavigationUp className='text-gray500' />
        )}
      </button>
      {toggleFloating && (
        <div className='absolute -top-116pxr flex flex-col gap-8pxr'>
          {insideButtons?.map((button) => (
            <button
              className='flex w-127pxr items-center gap-4pxr rounded-full border border-gray400 bg-white py-12pxr pl-20pxr pr-14pxr hover:text-primary100'
              onClick={() => handleInsideFloatingButtonClick(button)}
            >
              <div className='flex-center'>
                <span className='w-65pxr font-medium text-gray600 font-body2'>
                  {button.name}
                </span>
              </div>
              {extractButtonImage(button.type)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default MapFloatingButton;
