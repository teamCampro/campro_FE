import React from 'react';

function formattedDate(date: string) {
  const convertDate = new Date(date);
  const formattedMonth = (convertDate.getMonth() + 1)
    .toString()
    .padStart(2, '0');
  const formattedDay = convertDate.getDate().toString().padStart(2, '0');
  const formattedWeek = ['일', '월', '화', '수', '목', '금', '토'][
    convertDate.getDay()
  ];

  const formattedDate = `${formattedMonth}/${formattedDay}(${formattedWeek})`;
  return formattedDate;
}

export default formattedDate;
