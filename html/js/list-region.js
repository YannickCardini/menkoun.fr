listRegion = [
    "Alsace",
    "Aquitaine",
    "Auvergne",
    "Basse-Normandie",
    "Bourgogne",
    "Bretagne",
    "Centre",
    "Champagne-Ardenne",
    "Corse",
    "Franche-Comté",
    "Haute-Normandie",
    "Île-de-France",
    "Languedoc-Roussillon",
    "Limousin",
    "Lorraine",
    "Midi-Pyrénées",
    "Nord-Pas-de-Calais",
    "Pays de la Loire",
    "Picardie",
    "Poitou-Charentes",
    "Provence-Alpes-Côte d'Azur",
    "Rhône-Alpes"
];


for (let i = 0; i < listRegion.length; i++) {
    const region = listRegion[i];
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
}

