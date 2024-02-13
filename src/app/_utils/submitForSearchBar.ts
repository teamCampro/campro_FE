import { FieldValues } from 'react-hook-form';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { AppDispatch } from '../_store/store';
import { setReserveInfo } from '../_slices/reserveInfo';
import getFormattedDate from './getFormattedDate';

const formatDate = (date: Date) =>
  new Date(date.toLocaleDateString('fr-CA')).toISOString().slice(0, 10);

export const submitForSearch = (
  data: FieldValues,
  dispatch: AppDispatch,
  router: AppRouterInstance,
  pathName: string,
) => {
  if (Array.isArray(data.date) && data.date.length === 2) {
    const { location, group } = data;
    const [checkInDate, checkOutDate] = data.date;

    const checkIn = formatDate(checkInDate);
    const checkOut = formatDate(checkOutDate);
    const groupObject = JSON.parse(data.group);
    const queryString = `location=${encodeURIComponent(location)}&checkIn=${checkIn}&checkOut=${checkOut}&adult=${groupObject.adult}&child=${groupObject.child}&pet=${groupObject.pet}`;

    router.push(`/${pathName}?${queryString}`);

    dispatch(
      setReserveInfo({
        dates: getFormattedDate([new Date(checkIn), new Date(checkOut)]),
        ...groupObject,
      }),
    );
  }
};
