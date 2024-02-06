import React from 'react';
import OWNER_INFORMATION_INPUTS from '../_constants/ownerInformationInputs';
import {
  CommonInput,
  ErrorMessage,
  InputContainer,
  Label,
} from '@/components/index';
import { ownerValidate } from '../../_constants/inputValidate';

function OwnerInputList() {
  return (
    <div className='flex flex-col gap-23pxr'>
      {OWNER_INFORMATION_INPUTS.map((input) => (
        <InputContainer
          key={input.label}
          className='flex w-700pxr flex-col gap-6pxr'
        >
          <Label
            className='flex w-full text-black font-body2-semibold'
            htmlFor={input.name}
          >
            {input.label}
          </Label>
          <CommonInput
            name={input.name}
            className='!h-65pxr !rounded-[16px] !text-18pxr focus:border-2 focus:border-black'
            rules={ownerValidate}
          />
          <ErrorMessage name={input.name} />
        </InputContainer>
      ))}
    </div>
  );
}

export default OwnerInputList;
