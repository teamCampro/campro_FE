import { useState } from 'react';
import { ButtonPageType } from '../_components/OwnerButton/OwnerSelectButton';
import { SelectedButtonsType } from '../_components/OwnerButtonList';

function useSelectedButtons() {
  const [selectedButtons, setSelectedButtons] = useState<SelectedButtonsType>({
    operating_period: [],
    operating_days: [],
    environment: [],
    amenities: [],
    categories: [],
    ownerOnboarding: [],
    activities: [],
    stayTerm: [],
    uploadImages: [],
    uploadSiteImage: [],
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
