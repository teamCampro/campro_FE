'use client';

import { USER_OPTIONS } from '@/components/Header/_components/HeaderDropdown';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { IconArrowRightNon } from '@/public/svgs';
import { setProfileState } from '@/src/app/_utils/profileState';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SideLists() {
  const pathName = usePathname();
  const profile = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  const handleClick = (id: number) => {
    dispatch(setProfileState(id));
  };
  console.log(pathName.split('/')[2]);

  const isPath = (link: string) => {
    return pathName.split('/')[2]
      ? link.includes(pathName.split('/')[2])
      : link === '/profile';
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
                className={`${option.isDone || isPath(option.link) ? 'text-black' : 'text-gray500 '} font-body1-bold`}
              >
                {option.list}
              </h3>
              <IconArrowRightNon fill='#949494' className='text-gray500' />
            </Link>
          </li>
        ) : (
          <li
            key={option.id}
            className='flex cursor-pointer justify-between px-24pxr py-16pxr'
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
