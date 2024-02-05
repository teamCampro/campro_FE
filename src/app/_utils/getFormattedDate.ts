const getFormattedDate = (selectedDates: Date[]) => {
  const formatDate = (date: Date) =>
    date
      ? date.toLocaleDateString('ko-KR', {
          month: '2-digit',
          day: '2-digit',
          weekday: 'short',
        })
      : '';

  let newValue = '';
  if (selectedDates) {
    if (selectedDates[0] && selectedDates[1]) {
      newValue = `${formatDate(selectedDates[0])} - ${formatDate(selectedDates[1])}`;
    } else if (selectedDates[0]) {
      newValue = formatDate(selectedDates[0]);
    }
  }

  return newValue;
};

export default getFormattedDate;
