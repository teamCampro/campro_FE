import { IconMinus, IconPlus } from '@/public/svgs';
import { useEffect, useRef, useState } from 'react';
interface Props {
  group: string;

  onChangeGroup: (updatedGroup: string) => void;
  onClose: () => void;
  isMobile?: boolean;
}

function GroupDropdown({ group, onChangeGroup, onClose, isMobile }: Props) {
  const groupObject = JSON.parse(group);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !isMobile
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, isMobile]);

  const handleIncrease = (name: 'adult' | 'child' | 'pet') => {
    const updatedGroup = { ...groupObject, [name]: groupObject[name] + 1 };
    onChangeGroup(JSON.stringify(updatedGroup));
  };

  const handleDecrease = (name: 'adult' | 'child' | 'pet') => {
    if (groupObject[name] > 0) {
      const updatedGroup = { ...groupObject, [name]: groupObject[name] - 1 };
      onChangeGroup(JSON.stringify(updatedGroup));
    }
  };

  return (
    <div
      ref={dropdownRef}
      className='absolute right-0pxr top-71pxr z-[100] flex w-407pxr flex-col items-start gap-24pxr rounded-[20px] bg-white px-40pxr py-32pxr shadow-searchBar mobile:relative mobile:top-0pxr mobile:flex mobile:w-full  mobile:rounded-[0]'
    >
      <div className='flex w-full flex-col items-start gap-16pxr'>
        <div className='flex w-full items-center justify-between'>
          <div className=' flex w-full flex-222  flex-col items-start'>
            <p className='flex w-full text-black font-title3-semibold'>성인</p>
            <p className='flex w-full text-gray-500 font-caption1'>18세 이상</p>
          </div>
          <div className='flex w-full flex-105 items-center'>
            <div className='flex w-full items-center justify-end gap-16pxr'>
              <IconMinus
                onClick={() => handleDecrease('adult')}
                fill={groupObject.adult === 0 ? '#949494' : '#000000'}
              />
              <p className='flex-center flex w-25pxr font-title3-semibold'>
                {groupObject.adult}
              </p>
              <IconPlus onClick={() => handleIncrease('adult')} />
            </div>
          </div>
        </div>
        <div className='flex w-full items-center justify-between'>
          <div className=' flex w-full flex-222  flex-col items-start'>
            <p className='flex w-full text-black font-title3-semibold'>아동</p>
            <p className='flex w-full text-gray-500 font-caption1'>
              0 ~ 17세 이하
            </p>
          </div>

          <div className='flex w-full flex-105 items-center'>
            <div className='flex w-full items-center justify-end gap-16pxr'>
              <IconMinus
                onClick={() => handleDecrease('child')}
                fill={groupObject.child === 0 ? '#949494' : '#000000'}
              />
              <p className='flex-center flex w-25pxr font-title3-semibold'>
                {groupObject.child}
              </p>
              <IconPlus onClick={() => handleIncrease('child')} />
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full  items-center justify-between'>
        <div className='flex w-full  text-black font-title3-semibold'>
          애완동물
        </div>
        <div className='flex w-full  items-center justify-end gap-16pxr'>
          <IconMinus
            fill={groupObject.pet === 0 ? '#949494' : '#000000'}
            onClick={() => handleDecrease('pet')}
          />
          <p className='flex-center flex w-25pxr font-title3-semibold'>
            {groupObject.pet}
          </p>
          <IconPlus onClick={() => handleIncrease('pet')} />
        </div>
      </div>
    </div>
  );
}

export default GroupDropdown;
