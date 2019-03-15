var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var daysnames = days[d.getDay()];
var monthsnames = months[d.getMonth()];

document.getElementById("currentdate").innerHTML = daysnames + ", " + d.getDate() + " " + monthsnames + " " + d.getFullYear();