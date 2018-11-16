var showdown  = require('showdown'),
converter = new showdown.Converter();
// html      = converter.makeHtml(text);


export function addslashes( str ) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

export function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

export function convTime (value) {
    if (!value) return ''
    value = value.toString()
    var dt = new Date(value);
    return formatDate(dt);
}

export function markdownToHTML (value) {
    if (!value) return ''
    value = value.toString()
    return converter.makeHtml(value);
}