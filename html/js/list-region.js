$(document).ready(function () {
    $.getJSON("/json/regions.json", function (json) {
        json.regions.forEach(region => {
            var createLi = document.createElement('li');
            createLi.className = 'list-region';
            var createPLi = document.createElement('p');
            var createTextRegion = document.createTextNode("Maine coon à donner " + region);
            var createP = document.createElement('p');
            var createImg = document.createElement("img");
            var createTextNode = document.createTextNode('Aucun Maine à donner en ' + region);
            var createIcon = document.createElement('img');

            createIcon.type = "image/x-icon";
            createIcon.rel = "icon";
            createIcon.src = '/assets/add.png';
            createIcon.className = "rotate";
            createIcon.style.width = "21px";
            createIcon.style.float = "right";
            createIcon.style.marginRight = "3%";

            createImg.setAttribute('src', '/assets/tefel/sad.gif');
            createImg.style.display = 'block';
            createImg.style.width = "15%";
            createImg.style.margin = 'auto';

            createP.append(createImg)
            createP.append(createTextNode);

            createP.style.margin = '0 0 5% 0';
            createP.style.textAlign = "center";
            createP.style.display = 'none';

            createPLi.style.color = "white";
            createPLi.style.padding = '12px 0 15px 0';

            createLi.onclick = function () { loadRegionContent(createP, createIcon); }
            createLi.style.cursor = 'pointer';

            createPLi.append(createTextRegion);
            createPLi.append(createIcon);

            createLi.append(createPLi);


            $("#liste-region").append(createLi)
            $("#liste-region").append(createP)
        });
    });

    function loadRegionContent(p, icon) {
        // icon.style.WebkitTransitionDuration = "0.1s";
        // icon.style.webkitTransform = "rotate(360deg)";
        p.style.display = p.style.display == 'block' ? 'none' : 'block';
        icon.src = icon.src.split("/")[icon.src.split("/").length - 1] == 'add.png' ? "/assets/minus.png" : "/assets/add.png";
    }
});





