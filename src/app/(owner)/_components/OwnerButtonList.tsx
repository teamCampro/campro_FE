'use client';
import React, { useEffect } from 'react';
import { Config } from '../_constants/ownerListButtons';
import { ButtonPageType } from './OwnerButton/OwnerSelectButton';
import OwnerButton from './OwnerButton';
import getStorageItems from '../_utils/getStorageItems';
import { SelectedButtonsType } from '../owner/registration/operating-period/page';

interface Props {
  pageName: ButtonPageType;
  config: Config[];
  buttonType?: 'small';
  isSingleSelection?: boolean;
  selectedButtons: SelectedButtonsType;
  onClick: (pageName: ButtonPageType, buttons: string[]) => void;
}

function OwnerButtonList({
  pageName,
  config,
  buttonType,
  isSingleSelection,
  selectedButtons,
  onClick,
}: Props) {
  const handleButtonClick = (buttonText: string) => {
    if (isSingleSelection) {
      onClick(pageName, [buttonText]);
    } else {
      onClick(
        pageName,
        selectedButtons[pageName].includes(buttonText)
          ? selectedButtons[pageName].filter(
              (selectedButton) => selectedButton !== buttonText,
            )
          : [...selectedButtons[pageName], buttonText],
      );
    }
  };

  useEffect(() => {
    const items = getStorageItems(pageName);
    onClick(pageName, items);
  }, [pageName]);

  return (
    <>
      {config.map((item) => (
        <OwnerButton.Select
          pageName={pageName}
          key={item.buttonText}
          buttonText={item.buttonText}
          type={buttonType}
          isSelected={selectedButtons[pageName].includes(item.buttonText)}
          onClick={handleButtonClick}
        >
          {item.Image}
        </OwnerButton.Select>
      ))}
    </>
  );
}

export default OwnerButtonList;
