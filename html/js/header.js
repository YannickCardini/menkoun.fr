var createDivLogo = document.createElement('div');
var createATitle = document.createElement('a');
var createH1 = document.createElement('h1');
var createDivSlogan = document.createElement('div');
var createASlogan = document.createElement('a');
var createImg = document.createElement('img');

createImgH1.style.width = '40px';
createImg.setAttribute('src','/assets/logo.png');
createImg.setAttribute('alt','Logo');
createASlogan.append(createImg);
createASlogan.setAttribute('href','/');
createDivSlogan.append(createASlogan);
createDivSlogan.setAttribute('class','slogan');
createDivLogo.append(createDivSlogan);

createH1.append(document.createTextNode('Mainecoon.click'));
createATitle.append(createH1);
createATitle.setAttribute('href','/');
createDivLogo.append(createATitle);

createDivLogo.setAttribute('id','logo');

$('#header').append(createDivLogo);