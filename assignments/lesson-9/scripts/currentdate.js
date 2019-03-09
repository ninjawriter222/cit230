var date = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var dayname = days[date.getDay()];
var monthname = months[date.getMonth()];

document.getElementById("currentdate").innerHTML = dayname + ", " + date.getDate() + " " + monthname + " " + date.getFullYear();