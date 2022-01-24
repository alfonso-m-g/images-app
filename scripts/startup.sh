#!/bin/bash
sudo docker stop nginx && sudo docker rm nginx
sudo docker run -d -it -p 8080:80 -v /home/ubuntu/app/images-app:/usr/share/nginx/html --name nginx nginx:latest

sudo docker stop rest-api && sudo docker rm rest-api
sudo docker run -d -it -p 8081:80 -v /home/ubuntu/api/rest-api-gui:/usr/share/nginx/html --name rest-api nginx:latest

./rok.sh
