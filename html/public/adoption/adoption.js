$(document).ready(function () {
    
    var liste_region = document.getElementById("liste-region"); 
    liste_region.style.display = 'none';

    $.getJSON('adoption.php', function (data) {
        $.getJSON("/json/regions.json", function (json) {
            json.regions.forEach(region => {
                var createLi = document.createElement('li');
                createLi.className = 'list-region';
                var createPLi = document.createElement('p');
                var createTextRegion = document.createTextNode("Maine coon à donner en " + region);
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

                $("#liste-region").append(createLi);
                $("#liste-region").append(createSpan);
            });
            disappear();
        });
    });

    function disappear() {
        var id = null;
        var elem = document.getElementById("loading");   
        var opacity = 100;
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
          if (opacity == 0) {
            clearInterval(id);
            elem.remove();
            appear();
          } else {
            opacity--; 
            elem.style.opacity = opacity + '%'; 
          }
        }
      }

      function appear() {
        var id = null;
        var elem = document.getElementById("liste-region"); 
        var opacity = 0;
        elem.style.opacity = opacity + '%';  
        elem.style.display = 'block' 
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
          if (opacity == 100) {
            clearInterval(id);
          } else {
            opacity++; 
            elem.style.opacity = opacity + '%'; 
          }
        }
      }


    function displayContent(span, icon) {
        icon.src = icon.src.split("/")[icon.src.split("/").length - 1] == 'add.png' ? "/assets/minus.png" : "/assets/add.png";
        span.style.display = span.style.display == 'none' ? 'block' : 'none';
    }

    function loadRegionContent(region, data) {

        var createSpan = document.createElement('span');
        createSpan.style.display = 'none';

        for (let i = 0; i < data.length; i++) {
            const donation = data[i];
            if (donation.region == region) {
                createSpan.append(createCard(donation));
            }
        }
        if (!createSpan.firstChild)
            createSpan.append(createNoneContent(region));
        return createSpan;

    }

    function createNoneContent(region) {

        var createTextNode = document.createTextNode('Aucun Maine à donner en ' + region);
        var createImg = document.createElement("img");
        var createP = document.createElement('p');

        createImg.setAttribute('src', '/assets/tefel/sad.gif');
        createImg.style.display = 'block';
        createImg.style.width = "17%";
        createImg.style.margin = 'auto';
        createImg.style.minWidth = '160px';

        createP.append(createImg)
        createP.append(createTextNode);
        createP.style.margin = 'auto';
        createP.style.textAlign = "center";

        return createP;
    }

    function createCard(donation) {

        var createCard = document.createElement('div');
        var createContainer = document.createElement('div');
        var createImg = document.createElement('img');
        var createH3 = document.createElement('h3');
        var createH4 = document.createElement('h4');
        var createP = document.createElement('p');
        var createPBot = document.createElement('p');
        var createButton = document.createElement('button');
        var top = document.createElement('div');
        var bot = document.createElement('div');
        var subContainer = document.createElement('div');
        var botLeft = document.createElement('div');
        var botRight = document.createElement('div');
        var createPemail = document.createElement('p');
        var createPphone = document.createElement('p');
        var contactH4 = document.createElement('h4');
        var iconEmail = document.createElement('img');
        var iconPhone = document.createElement('img');

        createCard.onclick = function () { location.href = "/public/annonce.php?id=" + donation.id; }

        iconEmail.src = "/assets/email.png";
        iconEmail.alt = "Round Icon email";
        iconPhone.src = "/assets/phone.png";
        iconPhone.alt = "Round Icon phone number";
        createPemail.append(iconEmail);
        createPphone.append(iconPhone);

        createButton.append(document.createTextNode('Voir l\'annonce'));
        createButton.click = function () { location.href = "/public/annonce.php?id=" + donation.id; }

        createCard.className = "card";

        createImg.src = donation.img ? donation.img : "/assets/tefel/lying.gif";
        createImg.alt = "Avatar";
        createImg.style.width = "300px";
        createImg.style.height = "300px";

        createContainer.className = "container";

        createH3.append(document.createTextNode(donation.catname));
        createH3.style.fontWeight = "bold";

        createH4.append(document.createTextNode(donation.dateposted));
        createH4.style.fontStyle = "italic";

        contactH4.append(document.createTextNode("Contact"));
        contactH4.style.fontStyle = "italic";

        var descriEmpty = "Le propriétaire de ce chat n'a pas laissé de description."
        createP.append(document.createTextNode(donation.descri ? donation.descri : descriEmpty));

        var annonceDelete = "Cette annonce sera supprimée dans une semaine.";
        createPBot.append(document.createTextNode(annonceDelete));
        createPBot.className = "annonceDelete";

        createPemail.append(document.createTextNode(donation.email));

        descriEmpty = "Non renseigné";
        createPphone.append(document.createTextNode(donation.phone ? donation.phone : descriEmpty));

        top.className = "top";
        bot.className = "bot";
        subContainer.className = "subContainer";
        botLeft.className = "botLeft";
        botRight.className = "botRight";
        createPemail.className = "email";

        botLeft.append(contactH4);
        botLeft.append(createPemail);
        botLeft.append(createPphone);
        botRight.append(createButton);
        subContainer.append(botLeft);
        subContainer.append(botRight);
        top.append(createH3);
        top.append(createH4)
        top.append(createP);
        bot.append(subContainer);
        bot.append(createPBot);
        createContainer.append(top);
        createContainer.append(bot);
        createCard.append(createImg);
        createCard.append(createContainer);

        return createCard;
    }
});




