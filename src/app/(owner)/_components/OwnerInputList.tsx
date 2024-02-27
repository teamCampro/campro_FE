import React from 'react';
import {
  CommonInput,
  ErrorMessage,
  InputContainer,
  Label,
} from '@/components/index';
import { ownerValidate } from '../../_constants/inputValidate';
import {
  handleChangeOwnerInputValue,
  handleOwnerInputDefaultValue,
} from '../_utils/inputValueStorageHandler';

interface ListData {
  label: string;
  name: string;
}

interface Props {
  listData: ListData[];
}

function OwnerInputList({ listData }: Props) {
  return (
    <div className='flex flex-col gap-23pxr'>
      {listData.map((input) => (
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
            className='!h-65pxr !rounded-[16px] !border-2 border-black !text-18pxr focus:border-2 focus:border-black'
            rules={ownerValidate}
            onBlur={(e) => handleChangeOwnerInputValue(e, input.name)}
            defaultValue={handleOwnerInputDefaultValue(input.name)}
          />
          <ErrorMessage name={input.name} />
        </InputContainer>
      ))}
    </div>
  );
}

export default OwnerInputList;
