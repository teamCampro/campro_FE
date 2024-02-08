import React from 'react';
import { Config } from '../_constants/ownerListButtons';
import OwnerSelectButton, { ButtonPageType } from './OwnerSelectButton';

interface Props {
  pageName: ButtonPageType;
  config: Config[];
  buttonType?: 'small';
}

function OwnerButtonList({ pageName, config, buttonType }: Props) {
  return (
    <>
      {config.map((item) => (
        <OwnerSelectButton
          pageName={pageName}
          key={item.buttonText}
          buttonText={item.buttonText}
          type={buttonType}
        >
          {item.Image}
        </OwnerSelectButton>
      ))}
    </>
  );
}

export default OwnerButtonList;
