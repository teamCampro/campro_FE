'use client';

import { USER_OPTIONS } from '@/components/Header/_components/HeaderDropdown';
import { IconArrowRightNon } from '@/public/svgs';

function SideLists() {
  return (
    <ul className='flex flex-col py-40pxr pl-40pxr pr-24pxr'>
      {USER_OPTIONS.map((option) => {
        return (
          <li
            key={option.id}
            className='flex justify-between px-24pxr py-16pxr'
          >
            <h3 className='text-gray500 font-body1-bold'>{option.list}</h3>
            <IconArrowRightNon fill='#949494' className='text-gray500' />
          </li>
        );
      })}
    </ul>
  );
}

export default SideLists;
