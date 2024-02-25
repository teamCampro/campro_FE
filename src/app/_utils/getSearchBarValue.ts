interface SearchParamsType {
  searchParams: {
    [key: string]: string;
  };
  page?: string;
  place?: string;
}
import getFormattedDate from './getFormattedDate';
import { formatDate } from './formatDate';
export default function getSearchBarValue({
  searchParams,
  page,
  place,
}: SearchParamsType) {
  const {
    location = '전체',

    checkIn = formatDate(new Date()),
    checkOut = formatDate(new Date(Date.now() + 1000 * 60 * 60 * 24)),
    adult = '2',
    child = '0',
    pet = '0',
  } = searchParams;
  return (location && checkIn && checkOut) || adult || child || pet
    ? `${page === 'search' ? location : place}, ${getFormattedDate([new Date(checkIn), new Date(checkOut)])}, 성인 ${adult}명, 아동 ${child}명, 애견 ${pet}마리`
    : '';
}
