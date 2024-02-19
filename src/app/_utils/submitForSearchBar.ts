import { FieldValues } from 'react-hook-form';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const formatDate = (date: Date) =>
  new Date(date.toLocaleDateString('fr-CA')).toISOString().slice(0, 10);

export const submitForSearch = (
  data: FieldValues,
  router: AppRouterInstance,
  pathName: string,
  Key?: string,
  campType?: string,
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

    if (campType) {
      queryString += campType ? `&campType=${campType}` : '';
    }

    router.push(`/${pathName}?${queryString}`);
  }
};
