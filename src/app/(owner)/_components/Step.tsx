import React from 'react';

interface Props {
  step: string;
  title: string;
  description: string;
}

function Step({ step, title, description }: Props) {
  return (
    <div className='flex items-center justify-start px-35pxr'>
      <div className='flex flex-col items-start gap-53pxr'>
        <h2 className='text-40pxr font-medium'>{step}</h2>
        <h1 className='text-88pxr font-medium'>{title}</h1>
        <p className='text-26pxr'>{description}</p>
      </div>
    </div>
  );
}

export default Step;
