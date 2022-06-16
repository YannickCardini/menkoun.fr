$(document).ready(function () {

    $.getJSON("/json/articles.json", function (json) {
        json.articles.forEach(article => {
            var createDiv = document.createElement('div');
            var createA = document.createElement('a');
            var createAP = document.createElement('a');
            var createH3 = document.createElement('h3');
            var createH4 = document.createElement('h4');
            var createH5 = document.createElement('h5');
            var createP = document.createElement('p');
            var br = document.createElement("br");

            var createH3Text = document.createTextNode(article.name);
            var createH4Text = document.createTextNode(article.subtitle);
            var createH5Text = document.createTextNode(article.date);
            var createAPText = document.createTextNode("Lire la suite");
            var createPText = document.createTextNode(article.description);

            createDiv.setAttribute('class', "sidebar");
            createA.setAttribute('href', article.href);
            createAP.setAttribute('href', article.href);

            createH3.append(createH3Text);
            createH4.append(createH4Text);
            createH5.append(createH5Text);
            createP.append(createPText);
            createAP.append(br);
            createAP.append(createAPText);

            createP.append(createAP)
            createA.append(createH3);

            createDiv.append(createA);
            createDiv.append(createH4);
            createDiv.append(createH5);
            createDiv.append(createP);

            $('#sidebar_container').append(createDiv);
        });
    });
});
