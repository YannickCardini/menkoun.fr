#  A Mainecoon Simple Website :cat:

I feel that the simpler the better, both from a developer and a user standpoint.
This light website use JavaScript/HTML/CSS/JQuery.

## How to get started :stars:

Just open [index.html](src/index.html) with a browser or run it on docker.

## Docker :whale:

```
docker build -t mainecoon-click .
docker run --name=mainecoonclick -p 3400:80 mainecoon-click
```
### Transfer to a VPS :computer:

after build it:
```
docker save mainecoon_click | gzip > mainecoon_click.tar.gz
scp mainecoon_click.tar.gz ubuntu@51.79.255.217:~/Documents/docker/mainecoon_click.tar.gz && rm mainecoon_click.tar.gz
```

### On the VPS server :computer:

```
docker load < /home/ubuntu/Documents/docker/mainecoon_click.tar.gz && rm /home/ubuntu/Documents/docker/mainecoon_click.tar.gz
docker run -d --name=mainecoonclick -p 80:80 mainecoon_click
```

## TODO

- button error/success page
- loading animation adoption
- check security fail sql input/php poster une annonce

&nbsp;
&nbsp;
&nbsp;
Thanks to [Alan Delvin](https://github.com/AlanDevlin) for the base project :man: 
