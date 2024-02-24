import React from 'react';
import { HandleChangeInputValuesPropsType } from '../owner/site-registration/page';

interface Props {
  onChange: ({
    e,
    key,
    value,
    valueType,
  }: HandleChangeInputValuesPropsType) => void;
}

function OwnerPetsAvailableRadioInput({ onChange }: Props) {
  return (
    <div className='flex w-500pxr flex-col gap-35pxr'>
      <label className='text-20pxr font-semibold leading-8'>
        반려동물 가능 여부
      </label>
      <div className='flex gap-150pxr'>
        <div className='flex items-center gap-26pxr'>
          <span className='text-20pxr font-semibold leading-8'>예</span>
          <input
            className='flex-center h-32pxr w-32pxr cursor-pointer appearance-none rounded-full border-2 border-black checked:after:block checked:after:h-18pxr checked:after:w-18pxr checked:after:rounded-full checked:after:bg-black'
            type='radio'
            name='pets'
            value='yes'
            defaultChecked
            onChange={(e) =>
              onChange({
                e,
                key: 'petYN',
                value: 1,
                valueType: 'number',
              })
            }
          />
        </div>
        <div className='flex items-center gap-26pxr'>
          <span className='text-20pxr font-semibold leading-8'>아니요</span>
          <input
            className='flex-center h-32pxr w-32pxr cursor-pointer appearance-none rounded-full border-2 border-black checked:after:block checked:after:h-18pxr checked:after:w-18pxr checked:after:rounded-full checked:after:bg-black'
            type='radio'
            name='pets'
            value='no'
            onChange={(e) =>
              onChange({
                e,
                key: 'petYN',
                value: 0,
                valueType: 'number',
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default OwnerPetsAvailableRadioInput;
