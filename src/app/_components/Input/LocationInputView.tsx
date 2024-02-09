'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import { IconLocation } from '@/public/svgs';
import { useState } from 'react';
import { Button, ModalForMobile, LocationDropdown } from '..';
import * as Hangul from 'hangul-js';
interface Field {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
  name: string;
  ref: React.Ref<any>;
}

interface Props {
  field: Field;
  locations: string[];
  onRenderButton?: () => void;
}

function LocationInputView({
  field: { onChange, value, ...field },
  locations,
  onRenderButton,
}: Props): JSX.Element {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const [filteredLocations, setFilteredLocations] = useState(locations);
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : false;

  const handleClick = () => {
    setIsDropdownVisible(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    if (event.target.value) {
      setFilteredLocations(
        locations.filter(
          (location) => Hangul?.search(location, event.target.value) !== -1,
        ),
      );
    } else {
      setFilteredLocations(locations);
    }
  };

  const handleSelectLocation = (item: string) => {
    const event = {
      target: {
        value: item,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(event);
    setIsDropdownVisible(false);
  };

  const handleChangeItem = (item: string) => {
    isMobile ? handleSelectLocationForMobile(item) : handleSelectLocation(item);
  };

  const handleSelectLocationForMobile = (item: string) => setSelectedItem(item);

  const handleClose = () => setIsDropdownVisible(false);

  return (
    <>
      <div onClick={handleClick} className='relative flex w-full flex-110'>
        <div className=' flex w-full  gap-4pxr'>
          <IconLocation className='absolute left-16pxr top-16pxr ' />
          <input
            onClick={onRenderButton}
            readOnly={mobileMediaQuery && mobileMediaQuery}
            autoComplete='off'
            {...field}
            onChange={handleInputChange}
            value={value}
            placeholder='어디로 갈까요?'
            className=' w-full cursor-pointer whitespace-nowrap rounded-lg bg-gray100 py-16pxr pl-44pxr pr-16pxr text-black placeholder-gray500 outline-none font-body2-semibold placeholder:font-body2'
          />
        </div>
        {isDropdownVisible && (
          <ModalForMobile
            headerContent='지역'
            footerContent={
              <Button.Round
                size='md'
                custom='bg-primary100 relative z-99 text-white max-w-[335px] flex w-full'
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.stopPropagation();
                  handleSelectLocation(selectedItem as string);
                }}
              >
                적용
              </Button.Round>
            }
            onClose={handleClose}
          >
            <LocationDropdown
              isMobile={isMobile as boolean}
              items={isMobile ? locations : filteredLocations}
              onSelect={handleChangeItem}
              activeItem={selectedItem}
              onClose={handleClose}
            />
          </ModalForMobile>
        )}
      </div>
    </>
  );
}

export default LocationInputView;
