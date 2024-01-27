'use client';

import { IconLocation } from '@/public/svgs';
import { useState } from 'react';
import Dropdown from '../Dropdown';

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

function LocationInput({
  field: { onBlur, ...field },
  locations,
}: Props): JSX.Element {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur(event);
    setIsDropdownVisible(false);
  };

  return (
    <>
      <div className='relative flex w-full flex-110'>
        <div className='flex w-full flex-110 gap-4pxr'>
          <IconLocation className='absolute left-16pxr top-16pxr ' />
          <input
            {...field}
            onClick={handleClick}
            onBlur={handleBlur}
            placeholder='어디로 갈까요?'
            className=' whitespace-nowrap w-full rounded-lg bg-gray100 py-16pxr pl-44pxr pr-16pxr text-black placeholder-gray500 outline-none font-body2-semibold placeholder:font-body2'
          />
        </div>
        {isDropdownVisible && <Dropdown items={locations} />}
      </div>
    </>
  );
}

export default LocationInput;
