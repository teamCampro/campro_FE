'use client';

import { USER_OPTIONS } from '@/components/Header/_components/HeaderDropdown';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { IconArrowRightNon } from '@/public/svgs';
import { setProfileState } from '@/src/app/_utils/profileState';
import Link from 'next/link';

function SideLists() {
  const profile = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  const handleClick = (id: number) => {
    dispatch(setProfileState(id));
  };
  return (
    <ul className='flex flex-col py-40pxr pl-40pxr pr-24pxr'>
      {profile.map((option) => {
        return option.link ? (
          <li key={option.id} onClick={() => handleClick(option.id)}>
            <Link
              href={option.link}
              className='flex justify-between px-24pxr py-16pxr'
            >
              <h3
                className={`${option.isDone ? 'text-black' : 'text-gray500 '} font-body1-bold`}
              >
                {option.list}
              </h3>
              <IconArrowRightNon fill='#949494' className='text-gray500' />
            </Link>
          </li>
        ) : (
          <li
            key={option.id}
            className='flex justify-between px-24pxr py-16pxr'
          >
            <h3
              className={`${option.isDone ? 'text-black' : 'text-gray500 '} font-body1-bold`}
            >
              {option.list}
            </h3>
            <IconArrowRightNon fill='#949494' className='text-gray500' />
          </li>
        );
      })}
    </ul>
  );
}

export default SideLists;
