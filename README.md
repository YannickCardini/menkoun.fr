#  A Mainecoon Simple Website :cat:

I feel that the simpler the better, both from a developer and a user standpoint.
This light website use JavaScript/HTML/CSS/JQuery/PHP/MySQL.

## How to get started :stars:

Just open [index.html](src/index.html) with a browser or run it on docker.

## Docker :whale:

```
docker build -t menkoun .
docker run --name=menkoun -p 3400:80 menkoun
```
### Transfer to a VPS :computer:

after build it:
```
docker save menkoun | gzip > menkoun.tar.gz
scp menkoun.tar.gz ubuntu@51.79.255.217:~/Documents/docker/menkoun.tar.gz && rm menkoun.tar.gz
```

### On the VPS server :computer:

```
docker load < /home/ubuntu/Documents/docker/menkoun.tar.gz && rm /home/ubuntu/Documents/docker/menkoun.tar.gz
docker run -d --name=menkoun -p 80:80 menkoun
```

## TODO

- ~~button error/success page~~
- ~~loading animation adoption~~
- ~~check security fail sql input/php poster une annonce~~ (OSEF)
- ~~change logo mainecoonclick -> menkoun.fr~~
- ~~faire la page annonce.html~~
- ~~réécrire les url~~
- ~~do the credits page~~
- add autodelete script for annonce
- design annonce php
- ~~optimise loading page~~
- faire un jeu mainecoon
- refaire design page d'acceuil
- ~~dispay too small phone error/success page~~

&nbsp;
&nbsp;
&nbsp;
Thanks to [Alan Delvin](https://github.com/AlanDevlin) for the base project :man: 
