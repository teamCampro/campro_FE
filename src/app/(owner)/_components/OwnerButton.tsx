import React, { Suspense } from 'react';

export type OwnerButtonType = 'prev' | 'next' | 'done';

interface Props {
  type: OwnerButtonType;
}

function OwnerButton({ type }: Props) {
  const primaryClassName =
    'text-28pxr w-130pxr py-10pxr px-20pxr flex-center rounded-2xl bg-gray700 text-white hover:bg-black transition ease-in-out active:py-5pxr active:px-15pxr active:w-115pxr duration-200';
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

  return <button className={className}>{text}</button>;
}

export default OwnerButton;
