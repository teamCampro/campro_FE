import React from 'react';
import OwnerButton, { OwnerButtonType } from './OwnerButton';
import { usePathname } from 'next/navigation';

interface Props {
  buttonType: OwnerButtonType;
}

function OwnerBottomController({ buttonType }: Props) {
  const pathName = usePathname();
  const isFirstPage = pathName.includes('first_step');
  const isLastPage = pathName.includes('last');

  return (
    <div>
      {isFirstPage ? (
        <OwnerButton type={buttonType} />
      ) : (
        <>
          <OwnerButton type='prev' />
          <OwnerButton type={buttonType} />
        </>
      )}
    </div>
  );
}

export default OwnerBottomController;
