import { ButtonPageType } from '../_components/OwnerButton/OwnerSelectButton';

function getStorageItems(pageName: ButtonPageType) {
  const data = localStorage.getItem(pageName);
  const items: string[] = data ? JSON.parse(data) : [];
  return items;
}

export default getStorageItems;
