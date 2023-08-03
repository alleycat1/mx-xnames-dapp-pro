#!/bin/sh

ssh -o StrictHostKeyChecking=no ubuntu@$STAGING_SERVER << 'ENDSSH'
  cd /home/ubuntu/staging/xnames-dapp-stg
  aws ecr get-login-password --region eu-west-2 | docker login --username AWS --password-stdin 782057639577.dkr.ecr.eu-west-2.amazonaws.com  
  aws --version
  docker info
  docker --version
  docker pull 782057639577.dkr.ecr.eu-west-2.amazonaws.com/xnames-dapp-stg:latest
  docker rm -f xnames-dapp-stg
  docker run -itd --name xnames-dapp-stg -p 5030:80 782057639577.dkr.ecr.eu-west-2.amazonaws.com/xnames-dapp-stg:latest
ENDSSH
