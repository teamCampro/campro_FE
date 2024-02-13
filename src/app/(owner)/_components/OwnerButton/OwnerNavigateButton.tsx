import React from 'react';

export type OwnerButtonType = 'prev' | 'next' | 'done';

interface Props {
  type: OwnerButtonType;
}

function OwnerNavigateButton({ type }: Props) {
  const primaryClassName =
    'text-28pxr w-130pxr py-10pxr px-20pxr flex-center rounded-2xl bg-gray700 text-white hover:bg-black transition ease-in-out active:py-5pxr active:px-15pxr active:w-115pxr duration-400';
  const prevClassName =
    'text-28pxr font-semibold w-130pxr py-10pxr flex-center';

  const buttonConfig = () => {
    switch (type) {
      case 'prev':
        return { text: '뒤로', className: prevClassName };

      case 'next':
        return { text: '다음', className: primaryClassName };

      case 'done':
        return { text: '완료', className: primaryClassName };
    }
  };

  const { text, className } = buttonConfig();

  return (
    <div className='flex-center w-130pxr'>
      <button className={className}>{text}</button>
    </div>
  );
}

export default OwnerNavigateButton;
