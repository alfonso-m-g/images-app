#!/bin/bash
./ngrok http 8080 > /dev/null &
echo "$(curl http://localhost:4040/api/tunnels | jq ".tunnels[0].public_url")" > /home/ubuntu/url.txt
cat /home/ubuntu/url.txt
