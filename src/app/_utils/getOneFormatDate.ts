const getOneFormatDate = (dateString: string, isYear: boolean = false) => {
  /* isYear가 ture면 2024.02.20(화) 01:24  false면 02.20(화)  */
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  const dayOfWeek = days[date.getDay()];
  if (isYear) {
    return `${year}.${month}.${day}(${dayOfWeek}) ${time}`;
  }
  return `${month}.${day}(${dayOfWeek})`;
};

export default getOneFormatDate;
