'use client';

import { ModalOutside, ModalPortal } from '../..';
import { IconArrowRightNon, IconPeople } from '@/public/svgs';
import { USER_OPTIONS } from './HeaderDropdown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderModalType {
  handleModal: () => void;
  profile: (
    | {
        id: number;
        list: string;
        link: string;
        isDone: boolean;
      }
    | {
        id: number;
        list: string;
        isDone: boolean;
        link?: undefined;
      }
  )[];
  handleClick: (id: number) => void;
}

function HeaderModal({ handleModal, profile, handleClick }: HeaderModalType) {
  const pathName = usePathname();
  const isPath = (link: string) => {
    return pathName.split('/')[2]
      ? link.includes(pathName.split('/')[2])
      : link === '/profile';
  };

  return (
    <ModalPortal>
      <ModalOutside
        onClose={handleModal}
        custom='fixed flex-center justify-end !left-0pxr top-0pxr z-[1000] overflow-hidden bg-black-50'
      >
        <section className='h-screen w-242pxr bg-white'>
          <div className='flex-center justify-start gap-10pxr border-b border-gray200 px-16pxr py-12pxr'>
            <div className='h-24pxr w-24pxr'>
              <IconPeople
                width='100%'
                height='100%'
                viewBox='0 0 24 24'
                fill='black'
              />
            </div>
            <h2 className='text-black font-body2-bold'>홍길동님</h2>
          </div>
          <ul className='flex flex-col gap-24pxr px-24pxr py-12pxr'>
            {profile.map((option) => {
              return option.link ? (
                <li key={option.id} onClick={() => handleClick(option.id)}>
                  <Link href={option.link} className='flex justify-between'>
                    <h3
                      className={`${option.isDone || isPath(option.link) ? 'text-black' : 'text-gray500 '} font-body1-bold`}
                    >
                      {option.list}
                    </h3>
                    <IconArrowRightNon
                      fill='#949494'
                      className='text-gray500'
                    />
                  </Link>
                </li>
              ) : (
                <li
                  key={option.id}
                  className='flex cursor-pointer justify-between'
                  onClick={() => handleClick(option.id)}
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
        </section>
      </ModalOutside>
    </ModalPortal>
  );
}

export default HeaderModal;
