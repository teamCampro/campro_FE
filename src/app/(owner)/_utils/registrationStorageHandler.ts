import { ButtonPageType } from '../_components/OwnerSelectButton';
import getStorageItems from './getStorageItems';

interface Props {
  pageName: ButtonPageType;
  buttonText: string;
  isClicked: boolean;
}

function registrationStorageHandler({
  pageName,
  buttonText,
  isClicked,
}: Props) {
  switch (pageName) {
    case 'theme':
      const themeItems = getStorageItems('theme');

      if (isClicked) {
        localStorage.setItem(
          'theme',
          JSON.stringify(themeItems.filter((value) => buttonText !== value)),
        );
        return;
      }

      localStorage.setItem(
        'theme',
        JSON.stringify([...themeItems, buttonText]),
      );
      return;

    case 'amenities':
      const amenityItems = getStorageItems('amenities');

      if (isClicked) {
        localStorage.setItem(
          'amenities',
          JSON.stringify(amenityItems.filter((value) => buttonText !== value)),
        );
        return;
      }

      localStorage.setItem(
        'amenities',
        JSON.stringify([...amenityItems, buttonText]),
      );
      return;

    case 'operating_period':
      const periodItems = getStorageItems('operating_period');

      if (isClicked) {
        localStorage.setItem(
          'operating_period',
          JSON.stringify(periodItems.filter((value) => buttonText !== value)),
        );
        return;
      }

      localStorage.setItem(
        'operating_period',
        JSON.stringify([...periodItems, buttonText]),
      );
      return;

    case 'operating_days':
      const daysItems = getStorageItems('operating_days');

      if (isClicked) {
        localStorage.setItem(
          'operating_days',
          JSON.stringify(daysItems.filter((value) => buttonText !== value)),
        );
        return;
      }

      localStorage.setItem(
        'operating_days',
        JSON.stringify([...daysItems, buttonText]),
      );
      return;
  }
}

export default registrationStorageHandler;
