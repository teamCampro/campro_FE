import React, { ChangeEvent } from 'react';
import OwnerButton from './OwnerButton';
import OwnerInput from './OwnerInput/OwnerInput';
import { IconExitX } from '@/public/svgs';
import { Id } from 'react-toastify';
import { AddtionalOptionType } from '../owner/site-registration/page';

interface Props {
  onChange: (
    e: ChangeEvent<HTMLInputElement>,
    key: 'optionName' | 'optionPrice',
  ) => void;
  onClickAddButton: () => Id | undefined;
  onClickRemoveButton: (optionName: string) => void;
  additionalOptions: AddtionalOptionType[];
}

function OwnerAddAdditionalOption({
  onChange,
  onClickAddButton,
  onClickRemoveButton,
  additionalOptions,
}: Props) {
  return (
    <div className='col-span-2 w-full rounded-2xl border border-gray200 p-30pxr'>
      <div className='flex justify-between gap-45pxr'>
        <div className='flex flex-col gap-7pxr'>
          <OwnerInput
            inputName='추가 옵션'
            onChange={(e) => onChange(e, 'optionName')}
            placeholder='ex)바베큐 세트(숯, 그릴)'
          />
          <OwnerInput
            inputType='number'
            onChange={(e) => onChange(e, 'optionPrice')}
            placeholder='1개 기준 가격을 입력 해 주세요.'
            unit='원'
          />
          <OwnerButton.Navigate
            type='registration'
            customWidth='w-500pxr'
            custom='w-full h-50pxr py-8pxr px-20pxr rounded-[20px] bg-white !text-black !text-18pxr border-2 border-gray300 hover:bg-white hover:text-black hover:border-black'
            onClick={onClickAddButton}
          />
        </div>
        <div className='w-full space-y-8pxr'>
          <h2 className='text-20pxr font-semibold leading-8'>옵션 내역</h2>
          <ul className='space-y-8pxr'>
            {additionalOptions.map((option, index) => (
              <li key={index} className='flex justify-between'>
                <p className='text-20pxr leading-6 text-gray600'>
                  {option.optionName}
                </p>
                <div className='flex gap-8pxr'>
                  <p className='text-20pxr font-medium leading-6 text-black	'>
                    {Number(option.optionPrice).toLocaleString()}원
                  </p>
                  <button
                    onClick={() => onClickRemoveButton(option.optionName)}
                  >
                    <IconExitX />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OwnerAddAdditionalOption;
