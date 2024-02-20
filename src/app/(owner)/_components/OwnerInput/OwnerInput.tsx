import React, { FocusEvent, HTMLInputTypeAttribute, ReactNode } from 'react';

interface Props {
  inputType?: HTMLInputTypeAttribute;
  type?: 'default' | 'small' | 'flexible';
  value?: string | number;
  placeholder?: string;
  unit?: string;
  inputName?: string;
  readOnly?: boolean;
  onFocus?: () => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onChange: () => void;
  children?: ReactNode;
}

function OwnerInput({
  inputType = 'text',
  type = 'default',
  value,
  placeholder,
  unit,
  inputName,
  readOnly = false,
  onFocus,
  onBlur,
  onChange,
  children,
}: Props) {
  const widthClassName = () => {
    switch (type) {
      case 'default':
        return 'w-500pxr';

      case 'small':
        return 'w-230pxr';

      case 'flexible':
        return 'w-full';
    }
  };

  return (
    <div className={`flex flex-col gap-7pxr ${widthClassName()}`}>
      <label className='text-20pxr font-semibold leading-8' htmlFor={inputName}>
        {inputName}
      </label>
      <div className='relative w-full'>
        <input
          type={inputType}
          id={inputName}
          className='h-74pxr w-full rounded-[20px] border-2 pl-20pxr pr-40pxr text-18pxr leading-8 focus:border-black focus:outline-none'
          value={value}
          min={0}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={(e) => {
            if (onBlur) {
              onBlur(e);
            }
          }}
          placeholder={placeholder}
          readOnly={readOnly}
        />
        {unit && (
          <p className='absolute right-20pxr top-[50%] -translate-y-[50%] text-20pxr font-semibold leading-8'>
            {unit}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

export default OwnerInput;
