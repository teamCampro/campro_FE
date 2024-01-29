'use client';

import { IconPeople } from '@/public/svgs';
import { useState } from 'react';
import GroupDropdown from '../Dropdown/GroupDropdown';
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
  group: { adult: number; child: number; pet: number };
}

function GroupCountInputView({
  field: { onBlur, onChange, value, ...field },
  group,
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
          value={value}
          name='groupCount'
          placeholder='참여 그룹을 설정해주세요'
          className=' w-full cursor-pointer whitespace-nowrap rounded-[8px] bg-gray100 py-16pxr pl-44pxr pr-16pxr text-black placeholder-gray500 outline-none font-body2-semibold placeholder:font-body2'
          readOnly
        />
      </div>
      {isDropdownVisible && <GroupDropdown group={group} />}
    </div>
  );
}

export default GroupCountInputView;
