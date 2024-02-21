const getOneFormatDate = (dateString: Date) => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const dayOfWeek = days[date.getDay()];
  return `${month}/${day}(${dayOfWeek})`;
};

export default getOneFormatDate;
