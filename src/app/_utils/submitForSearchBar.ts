import { FieldValues } from 'react-hook-form';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const formatDate = (date: Date) =>
  new Date(date.toLocaleDateString('fr-CA')).toISOString().slice(0, 10);

export const submitForSearch = (
  data: FieldValues,
  router: AppRouterInstance,
  pathName: string,
  Key?: string,
  stay?: string,
) => {
  if (Array.isArray(data.date) && data.date.length === 2) {
    const locationOrPlace = Key && data[Key];
    const [checkInDate, checkOutDate] = data.date;
    const checkIn = formatDate(checkInDate);
    const checkOut = formatDate(checkOutDate);

    const groupObject =
      typeof data.group === 'object' ? data.group : JSON.parse(data.group);

    let queryString =
      Key && locationOrPlace
        ? `${Key}=${encodeURIComponent(locationOrPlace)}&`
        : '';
    queryString += `checkIn=${checkIn}&checkOut=${checkOut}&adult=${groupObject.adult}&child=${groupObject.child}&pet=${groupObject.pet}`;

    if (stay) {
      queryString += stay ? `&stay =${stay}` : '';
    }

    router.push(`/${pathName}?${queryString}`);
  }
};

export const submitForSearchAndFilter = (
  data: FieldValues,
  router: AppRouterInstance,
  pathName: string,
  Key?: string,
  stay?: string,
) => {
  if (Array.isArray(data.date) && data.date.length === 2) {
    const locationOrPlace = Key && data[Key];
    const [checkInDate, checkOutDate] = data.date;
    const checkIn = formatDate(checkInDate);
    const checkOut = formatDate(checkOutDate);

    const groupObject =
      typeof data.group === 'object' ? data.group : JSON.parse(data.group);

    const params = new URLSearchParams(window.location.search);

    if (Key && locationOrPlace) {
      params.set(Key, locationOrPlace);
    }
    params.set('checkIn', checkIn);
    params.set('checkOut', checkOut);
    params.set('adult', groupObject.adult.toString());
    params.set('child', groupObject.child.toString());
    params.set('pet', groupObject.pet.toString());

    const queryString = params.toString();

    router.push(`/${pathName}?${queryString}`);
  }
};
