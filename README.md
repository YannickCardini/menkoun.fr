# Simple Design Website :cool:

I feel that the simpler the better, both from a developer and a user standpoint.
This light website use JavaScript/HTML/CSS/JQuery.

## How to get started :stars:

Just open [index.html](src/index.html) with a browser or run it on docker.

## Docker :whale:

```
docker build -t simple-website .
docker run -d --name=simplewebsite -p 3400:80 simple-website
```
### Transfer to a VPS

after build it:
```
docker save simple-website | gzip > simple-website.tar.gz
scp simple-website.tar.gz ubuntu@51.79.255.217:~/Documents/docker/simple-website.tar.gz && rm simple-website.tar.gz
```

### On the VPS server

```
docker load < /home/ubuntu/Documents/docker/simple-website.tar.gz && rm /home/ubuntu/Documents/docker/simple-website.tar.gz
docker run -d --name=simplewebsite -p 3400:80 simple-website
```



&nbsp;
&nbsp;
&nbsp;
Thanks to [Alan Delvin](https://github.com/AlanDevlin) for the base project :man: 
