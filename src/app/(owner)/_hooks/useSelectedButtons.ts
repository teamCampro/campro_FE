import { useState } from 'react';
import { SelectedButtonsType } from '../owner/registration/operating-period/page';
import { ButtonPageType } from '../_components/OwnerButton/OwnerSelectButton';

function useSelectedButtons() {
  const [selectedButtons, setSelectedButtons] = useState<SelectedButtonsType>({
    operating_period: [],
    operating_days: [],
    theme: [],
    amenities: [],
  });

  const handleSelectedButtons = (
    pageName: ButtonPageType,
    buttons: string[],
  ) => {
    setSelectedButtons((prev) => ({ ...prev, [pageName]: buttons }));
  };

  return {
    selectedButtons,
    handleSelectedButtons,
  };
}

export default useSelectedButtons;
