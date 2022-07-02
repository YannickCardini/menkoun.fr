$(document).ready(function () {
    $.getJSON('adoption.php', function (data) {
        $.getJSON("/json/regions.json", function (json) {
            console.log(data);
            json.regions.forEach(region => {
                var createLi = document.createElement('li');
                createLi.className = 'list-region';
                var createPLi = document.createElement('p');
                var createTextRegion = document.createTextNode("Maine coon à donner " + region);
                var createIcon = document.createElement('img');
                var createSpan = loadRegionContent(region, data);

                createIcon.type = "image/x-icon";
                createIcon.rel = "icon";
                createIcon.src = '/assets/add.png';
                createIcon.className = "rotate";
                createIcon.style.width = "21px";
                createIcon.style.float = "right";
                createIcon.style.marginRight = "3%";

                createPLi.style.color = "white";
                createPLi.style.padding = '12px 0 15px 0';

                createLi.onclick = function () { displayContent(createSpan, createIcon); }
                createLi.style.cursor = 'pointer';

                createPLi.append(createTextRegion);
                createPLi.append(createIcon);

                createLi.append(createPLi);
                console.log(createLi, createSpan);

                $("#liste-region").append(createLi);
                $("#liste-region").append(createSpan);
            });
        });

        function displayContent(span, icon) {
            icon.src = icon.src.split("/")[icon.src.split("/").length - 1] == 'add.png' ? "/assets/minus.png" : "/assets/add.png";
            span.style.display = span.style.display == 'none' ? 'block' : 'none';
        }

        function loadRegionContent(region, data) {

            for (let i = 0; i < data.length; i++) {
                const donation = data[i];
                if (donation.region == region) {
                    return createCard(donation);
                }
            }
            return createNoneContent(region);

        }

        function createNoneContent(region) {

            var createSpan = document.createElement('span');
            var createTextNode = document.createTextNode('Aucun Maine à donner en ' + region);
            var createImg = document.createElement("img");
            var createP = document.createElement('p');

            createImg.setAttribute('src', '/assets/tefel/sad.gif');
            createImg.style.display = 'block';
            createImg.style.width = "15%";
            createImg.style.margin = 'auto';

            createP.append(createImg)
            createP.append(createTextNode);
            createP.style.margin = '0 0 5% 0';
            createP.style.textAlign = "center";

            createSpan.style.display = 'none';
            createSpan.append(createP);

            return createSpan;
        }

        function createCard(donation) {

            var createSpan = document.createElement('span');
            var createCard = document.createElement('div');
            var createContainer = document.createElement('div');
            var createImg = document.createElement('img');
            var createH4 = document.createElement('h4');
            var createP = document.createElement('p');

            createCard.className = "card";

            createImg.src = donation.img ? donation.img : "/assets/tefel/lying.gif";
            createImg.alt = "Avatar";
            createImg.style.width = "100%";

            createContainer.className = "container";

            createH4.append(document.createTextNode(donation.catname));
            createH4.style.fontWeight = "bold";

            var descriEmpty = "Le propriétaire de ce chat n'a pas laissé de description."
            createP.append(document.createTextNode(donation.descri ? donation.descri : descriEmpty));

            createContainer.append(createH4);
            createContainer.append(createP);
            createCard.append(createImg);
            createCard.append(createContainer);
            createSpan.append(createCard);

            return createSpan;
        }


    });
});




