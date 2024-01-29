'use client';

import { IconPeople } from '@/public/svgs';
import { useState } from 'react';
import GroupDropdown from '../Dropdown/GroupDropdown';
import ModalForMobile from '../Modal/ModalForMobile';
import { Button } from '..';
interface Field {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  value: { adult: number; child: number; pet: number };
  disabled?: boolean;
  name: string;
  ref: React.Ref<any>;
}

interface Props {
  field: Field;
}

function GroupCountInputView({
  field: { onBlur, onChange, value, ...field },
}: Props) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleRenderDropdown = () => setIsDropdownVisible(true);

  return (
    <div className='relative flex w-full flex-123'>
      <div className='flex w-full gap-4pxr'>
        <IconPeople className='absolute left-16pxr top-16pxr ' />
        <input
          {...field}
          onClick={handleRenderDropdown}
          onBlur={onBlur}
          value={`성인 ${value?.adult}명, 아동 ${value?.child}명, 펫 ${value?.pet}마리`}
          name='groupCount'
          placeholder='참여 그룹을 설정해주세요'
          className=' w-full cursor-pointer whitespace-nowrap rounded-[8px] bg-gray100 py-16pxr pl-44pxr pr-16pxr text-black placeholder-gray500 outline-none font-body2-semibold placeholder:font-body2'
          readOnly
        />
      </div>
      {isDropdownVisible && (
        <ModalForMobile
          headerContent='인원'
          footerContent={
            <Button.Round
              size='md'
              custom='bg-primary100 relative z-99 text-white max-w-[335px] flex w-full'
            >
              적용
            </Button.Round>
          }
          onClose={() => setIsDropdownVisible(false)}
        >
          <GroupDropdown
            group={value && JSON.stringify(value)}
            onChangeGroup={onChange}
          />
        </ModalForMobile>
      )}
    </div>
  );
}

export default GroupCountInputView;
