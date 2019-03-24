var weatherRequest = new XMLHttpRequest();
var apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=359088d7b05e1104fa3b9bcab78eb037'

weatherRequest.open('GET','apiURL', true);

weatherRequest.send();

weatherRequest.onload = function() {
   var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);
    
    document.getElementById('name').innerHTML = weatherinfo.main.name;
    document.getElementById('current').innerHTML = weatherInfo.main.temp;
    document.getElementById('description').innerHTML = weatherInfo.weather["0"].description;
    document.getElementById('hightemp').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowtemp').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('windspeed').innerHTML = weatherInfo.wind.speed;
   
    var icon = '//openweathermap.org/img/w/' + weatherInfo.weather["0"].icon + '.png';
    document.getElementById('weatherimage').src = icon;
}