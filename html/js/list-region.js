$(document).ready(function () {
    $.getJSON("/json/regions.json", function (json) {
        json.regions.forEach(region => {
            var createLi = document.createElement('li');
            createLi.className = 'list-region';
            var createA = document.createElement('a');
            var createh2 = document.createElement('h2');
            var createTextRegion = document.createTextNode("Maine coon à donner " + region);
            var createP = document.createElement('p');
            createP.append(document.createTextNode('Aucun Maine à donner en région ' + region));
            createP.style.margin = '5%';
            createP.style.textAlign = "center";
            createh2.append(createTextRegion);
            createA.append(createh2);
            createLi.append(createA);
            $("#liste-region").append(createLi)
            $("#liste-region").append(createP)
        });
    });
});





