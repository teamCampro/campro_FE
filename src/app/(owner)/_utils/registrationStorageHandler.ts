import { ButtonPageType } from '../_components/OwnerButton/OwnerSelectButton';
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
    case 'activities':
      const activitiesItems = getStorageItems('activities');

      if (isClicked) {
        localStorage.setItem(
          'activities',
          JSON.stringify(
            activitiesItems.filter((value) => buttonText !== value),
          ),
        );
        return;
      }

      localStorage.setItem(
        'activities',
        JSON.stringify([...activitiesItems, buttonText]),
      );
      return;

    case 'categories':
      const categoriesItems = getStorageItems('categories');

      if (isClicked) {
        localStorage.setItem(
          'categories',
          JSON.stringify(
            categoriesItems.filter((value) => buttonText !== value),
          ),
        );
        return;
      }

      localStorage.setItem(
        'categories',
        JSON.stringify([...categoriesItems, buttonText]),
      );
      return;

    case 'stayTerm':
      const stayTermItems = getStorageItems('stayTerm');

      if (isClicked) {
        localStorage.setItem(
          'stayTerm',
          JSON.stringify(stayTermItems.filter((value) => buttonText !== value)),
        );
        return;
      }

      localStorage.setItem('stayTerm', JSON.stringify([buttonText]));
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

    case 'environment':
      const environmentItems = getStorageItems('environment');

      if (isClicked) {
        localStorage.setItem(
          'environment',
          JSON.stringify(
            environmentItems.filter((value) => buttonText !== value),
          ),
        );
        return;
      }

      localStorage.setItem('environment', JSON.stringify([buttonText]));
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
        localStorage.setItem('operating_days', JSON.stringify([buttonText]));
        return;
      }

      localStorage.setItem('operating_days', JSON.stringify([buttonText]));
      return;
  }
}

export default registrationStorageHandler;
