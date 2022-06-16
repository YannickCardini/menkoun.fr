
var createA = document.createElement('a');
var createImg = document.createElement('img');
var createPFlatIcon = document.createElement('p');
var createAFlatIcon = document.createElement('a');
var createTextFlatIcon = document.createTextNode('Pokémon icônes créées par Roundicons Freebies - Flaticon');
var createP = document.createElement('p');
var createImgCopyright = document.createElement('img');
var createTextP = document.createTextNode('Copyright ');
var createTextP2 = document.createTextNode(' 2022 - All Rights Reserved.');

createP.append(createTextP);
createImgCopyright.setAttribute('src', '/assets/Copyright.svg');
createImgCopyright.setAttribute('alt', 'copyright logo');
createImgCopyright.style.width = '11px';
createP.append(createImgCopyright);
createP.append(createTextP2);

createAFlatIcon.setAttribute('href', 'https://www.flaticon.com/fr/icones-gratuites/pokemon')
createAFlatIcon.setAttribute('title', 'pokémon icônes')
createAFlatIcon.append(createTextFlatIcon);
createPFlatIcon.append(createAFlatIcon);
createImg.setAttribute('alt', '/logo de maine coon click');
createImg.setAttribute('src', '/assets/logo.png')
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
    $('#footer').append(createPFlatIcon);
    $('#footer').append(createP);

    $('#links-head').find("span:last").remove();


});
