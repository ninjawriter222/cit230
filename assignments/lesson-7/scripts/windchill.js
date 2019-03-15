var high =90;
var low =65;
var wSpeed =5;
var tempaverage= ((high + low) /2);

var windChill= 35.74 + 0.6215 * tempaverage - 35.75 * Math.pow(wSpeed, 0.16) + 0.4275 * tempaverage * Math.pow(wSpeed, 0.16);
windChill= Math.round(windChill)  +  "&deg;F";


document.getElementById ("windChill").innerHTML= windChill;