export const numberFormatter = (value: string) => {
  const replaceNumber = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return replaceNumber;
};
