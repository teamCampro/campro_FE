'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import { IconLocation } from '@/public/svgs';
import { useState } from 'react';
import { Button, ModalForMobile, LocationDropdown } from '..';
import { usePathname } from 'next/navigation';

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
}

function LocationInputView({
  field: { value, ...field },
  locations,
}: Props): JSX.Element {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : false;

  const handleClick = () => {
    setIsDropdownVisible(true);
  };

  const handleSelectLocation = (item: string) => {
    const event = {
      target: {
        value: item,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    field.onChange(event);
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
            autoComplete='off'
            {...field}
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
              items={locations}
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
