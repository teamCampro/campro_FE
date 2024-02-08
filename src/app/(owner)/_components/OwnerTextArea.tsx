import React from 'react';

interface Props {
  title: string;
  placeholder: string;
  defaultValue: string;
}

function OwnerTextArea({ title, placeholder, defaultValue }: Props) {
  return (
    <div className='flex w-1060pxr flex-col gap-13pxr'>
      <span className='flex text-20pxr font-semibold '>{title}</span>
      <textarea
        placeholder={placeholder}
        className='h-333pxr w-full rounded-2xl border border-gray500 px-35pxr py-43pxr text-18pxr focus:border-2 focus:border-black focus:px-34pxr focus:py-42pxr focus:outline-none'
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default OwnerTextArea;
