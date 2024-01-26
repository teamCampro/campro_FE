function formatDate(dateString: string): string {
  if (!dateString) return '';

  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  };

  const formattedDate = date.toLocaleDateString('ko-KR', options);
  const [month, dayWithWeekday] = formattedDate.split('. ');
  const [day, weekday] = dayWithWeekday.split(' ');

  return `${month}.${day}(${weekday})`;
}

export default formatDate;
