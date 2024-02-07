import React from 'react';
import { Config } from '../_constants/ownerListButtons';
import OwnerSelectButton from './OwnerSelectButton';

interface Props {
  config: Config[];
  buttonType?: 'small';
}

function OwnerButtonList({ config, buttonType }: Props) {
  return (
    <>
      {config.map((item) => (
        <OwnerSelectButton
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
