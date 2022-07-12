
var createA = document.createElement('a');
var createImg = document.createElement('img');
var createP = document.createElement('p');
var createCreditsA = document.createElement('a');
var createCreditsP = document.createElement('p');
var createImgCopyright = document.createElement('img');
var createTextP = document.createTextNode('Copyright ');
var createTextP2 = document.createTextNode(' 2022 - All Rights Reserved.');


createCreditsP.append(document.createTextNode("Crédits"));
createCreditsA.append(createCreditsP);
createCreditsA.href = "/credits";

createP.append(createTextP);
createImgCopyright.setAttribute('src', '/img/Copyright.svg');
createImgCopyright.setAttribute('alt', 'copyright logo');
createImgCopyright.style.width = '11px';
createP.append(createImgCopyright);
createP.append(createTextP2);

createImg.setAttribute('alt', '/logo de maine coon click');
createImg.setAttribute('src', '/img/logo.png')
createA.setAttribute('href', '/');
createA.append(createImg);


var createLinksHead = document.createElement('p');
createLinksHead.setAttribute('id', 'links-head');


$.getJSON("/json/articles.json", function (json) {
    json.articles.forEach(article => {
        var createA = document.createElement('a');
        var createAText = document.createTextNode(article.name);
        createA.setAttribute('href', article.href);
        createA.append(createAText);
        createLinksHead.append(createA);
        var createSpan = document.createElement('span');
        createSpan.append(document.createTextNode(" | "));
        createLinksHead.append(createSpan);
    });

    $('#footer').append(createA);
    $('#footer').append(createLinksHead);
    $('#footer').append(createP);
    $('#footer').append(createCreditsA);

    $('#links-head').find("span:last").remove();


});
