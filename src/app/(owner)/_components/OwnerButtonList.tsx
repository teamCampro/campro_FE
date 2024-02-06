import React from 'react';
import { Config } from '../_constants/ownerListButtons';
import OwnerSelectButton from './OwnerSelectButton';

interface Props {
  config: Config[];
}

function OwnerButtonList({ config }: Props) {
  return (
    <>
      {config.map((item) => (
        <OwnerSelectButton key={item.buttonText} buttonText={item.buttonText}>
          {item.Image}
        </OwnerSelectButton>
      ))}
    </>
  );
}

export default OwnerButtonList;
