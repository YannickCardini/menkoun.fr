$(document).ready(function () {
    $.getJSON("/json/regions.json", function (json) {
        json.regions.forEach(region => {
            var createOpt = document.createElement('option');
            createOpt.setAttribute('value',region);
            createOpt.append(document.createTextNode(region));
            $("#regions").append(createOpt);
        });
    });
});
