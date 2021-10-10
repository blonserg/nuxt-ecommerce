const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
  "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
];

export default function formatDate(unformattedDate) {
    const date = new Date(Date.parse(unformattedDate));
    var day = date.getDate();
    if (day < 10) day = '0' + day;
  
    var month = monthNames[date.getMonth()];
  
    var year = date.getFullYear();
    if (year < 10) year = '0' + year;

    return `${day}, ${month}, ${year}`;
  }