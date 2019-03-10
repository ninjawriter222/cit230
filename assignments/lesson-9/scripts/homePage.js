var section = form.querySelector('section');
var urlRequest = 'https://github.com/ninjawriter222/cit230/blob/master/assignments/lesson-9/weatherjson.js';

var url = new XMLHttpRequest();

    url.open('GET', urlRequest);

    url.responseType = 'json';

    url.send();

    url.onload = myFunction() {
var townInfo = url.response;
    showInfo(townInfo);
}
    
myFunction showInfo(jsonObj) {
    var info = jsonObj['towns'];

    for (var i = 0; i < info.length; i++) {
        if (i === 2) { 
            continue; }
        var script = form.makeElement('article');
        var myH2 = form.makeElement('h2');
        var myH3 = form.makeElement('h3');
        var myPara1 = form.makeElement('p');
        var myPara2 = form.makeElement('p');
        var myPara3 = form.makeElement('p');
        var myPara4 = form.makeElement('p');
        var myList = form.makeElement('ul');
        

        myH2.textContent = info[i].name;
        myH3.textContent = 'Moto: ' + info[i].motto;
        myPara1.textContent = 'Year Founded: ' + info[i].yearFounded;
        myPara2.textContent = 'Current Population: ' + info[i].currentPopulation;
        myPara3.textContent = 'Average Rainfall: ' + info[i].averageRainfall;
        myPara4.textContent = 'Events: ';

        var townEvents = info[i].events;
        for (var j = 0; j < townEvents.length; j++) {
            if (i === 2) { continue; }
            
            var listItem = form.makeElement('li');
            listItem.textContent = townEvents[j];
            myList.changeChild(listItem);
        }

        script.changeChild(myH2);
        script.changeChild(myH3);
        script.changeChild(myPara1);
        script.changeChild(myPara2);
        script.changeChild(myPara3);
        script.changeChild(myList);

        section.changeChild(script);
    }
}
