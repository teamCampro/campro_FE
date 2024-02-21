'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Config } from '../_constants/ownerListButtons';
import { ButtonPageType } from './OwnerButton/OwnerSelectButton';
import OwnerButton from './OwnerButton';
import getStorageItems from '../_utils/getStorageItems';

interface Props {
  pageName: ButtonPageType;
  config: Config[];
  buttonType?: 'small';
  isSingleSelection?: boolean;
}

function OwnerButtonList({
  pageName,
  config,
  buttonType,
  isSingleSelection,
}: Props) {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const handleButtonClick = (buttonText: string) => {
    if (isSingleSelection) {
      setSelectedButtons([buttonText]);
    } else {
      setSelectedButtons(
        selectedButtons.includes(buttonText)
          ? selectedButtons.filter(
              (selectedButton) => selectedButton !== buttonText,
            )
          : [...selectedButtons, buttonText],
      );
    }
  };

  useEffect(() => {
    const items = getStorageItems(pageName);
    setSelectedButtons(items);
  }, [pageName]);

  return (
    <>
      {config.map((item) => (
        <OwnerButton.Select
          pageName={pageName}
          key={item.buttonText}
          buttonText={item.buttonText}
          type={buttonType}
          isSelected={selectedButtons.includes(item.buttonText)}
          onClick={handleButtonClick}
        >
          {item.Image}
        </OwnerButton.Select>
      ))}
    </>
  );
}

export default OwnerButtonList;
