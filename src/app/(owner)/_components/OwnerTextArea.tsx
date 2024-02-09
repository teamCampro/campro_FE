'use client';
import React, { ChangeEvent } from 'react';
import { handleChangeOwnerInputValue } from '../_utils/inputValueStorageHandler';

interface Props {
  name: string;
  title: string;
  placeholder: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}

function OwnerTextArea({
  name,
  title,
  placeholder,
  defaultValue,
  onChange,
  value,
}: Props) {
  const localStorageData = () => {
    if (typeof window !== undefined) {
      const data = localStorage.getItem(name);
      return data || '';
    }

    return '';
  };

  const isSaveLocalStorage = !!localStorageData();

  return (
    <div className='flex w-1060pxr flex-col gap-13pxr'>
      <span className='flex text-20pxr font-semibold '>{title}</span>
      <textarea
        placeholder={placeholder}
        className='h-333pxr w-full rounded-2xl border border-gray500 px-35pxr py-43pxr text-18pxr focus:border-2 focus:border-black focus:px-34pxr focus:py-42pxr focus:outline-none'
        defaultValue={isSaveLocalStorage ? localStorageData() : defaultValue}
        onChange={onChange}
        onBlur={(e) => handleChangeOwnerInputValue(e, name)}
        value={value}
      />
    </div>
  );
}

export default OwnerTextArea;
