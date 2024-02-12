interface SearchParamsType {
  searchParams: {
    [key: string]: string;
  };
}
import getFormattedDate from './getFormattedDate';

export default function getSearchBarValue({ searchParams }: SearchParamsType) {
  const {
    location,
    checkIn,
    checkOut,
    adult = '0',
    child = '0',
    pet = '0',
  } = searchParams;
  return (location && checkIn && checkOut) || adult || child || pet
    ? `${location}, ${getFormattedDate([new Date(checkIn), new Date(checkOut)])}, 성인 ${adult}명, 아동 ${child}명, 펫 ${pet}마리`
    : '';
}
