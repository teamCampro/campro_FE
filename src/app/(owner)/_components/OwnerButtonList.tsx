import React from 'react';
import { Config } from '../_constants/ownerListButtons';
import OwnerSelectButton, {
  ButtonPageType,
} from './OwnerButton/OwnerSelectButton';
import OwnerButton from './OwnerButton';

interface Props {
  pageName: ButtonPageType;
  config: Config[];
  buttonType?: 'small';
}

function OwnerButtonList({ pageName, config, buttonType }: Props) {
  return (
    <>
      {config.map((item) => (
        <OwnerButton.Select
          pageName={pageName}
          key={item.buttonText}
          buttonText={item.buttonText}
          type={buttonType}
        >
          {item.Image}
        </OwnerButton.Select>
      ))}
    </>
  );
}

export default OwnerButtonList;
