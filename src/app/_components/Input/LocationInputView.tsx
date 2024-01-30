'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import { IconLocation } from '@/public/svgs';
import { useState } from 'react';
import { Button } from '..';
import Dropdown from '../Dropdown';
import ModalForMobile from '../Modal/ModalForMobile';

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
  field: { onBlur, onChange, value, ...field },
  locations,
}: Props): JSX.Element {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : false;

  const handleClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur(event);
    setIsDropdownVisible(false);
  };

  const handleSelectLocation = (item: string) => {
    const event = {
      target: {
        value: item,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(event);
    if (!isMobile) setIsDropdownVisible(false);
  };

  const handleCloseModal = () => setIsDropdownVisible(false);

  return (
    <>
      <div className='relative flex w-full flex-110'>
        <div className='flex w-full flex-110 gap-4pxr'>
          <IconLocation
            onClick={handleClick}
            className='absolute left-16pxr top-16pxr '
          />
          <input
            {...field}
            value={value}
            onChange={onChange}
            onBlur={handleBlur}
            placeholder='어디로 갈까요?'
            className=' w-full whitespace-nowrap rounded-lg bg-gray100 py-16pxr pl-44pxr pr-16pxr text-black placeholder-gray500 outline-none font-body2-semibold placeholder:font-body2'
          />
        </div>
        {isDropdownVisible && (
          <ModalForMobile
            headerContent='지역'
            footerContent={
              <Button.Round
                size='md'
                custom='bg-primary100 text-white max-w-[335px] flex w-full'
                onClick={handleCloseModal}
              >
                적용
              </Button.Round>
            }
            onClose={handleCloseModal}
          >
            <Dropdown items={locations} onSelect={handleSelectLocation} />
          </ModalForMobile>
        )}
      </div>
    </>
  );
}

export default LocationInputView;
