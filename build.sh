#! /bin/bash

echo 'Building production image...'
sleep 1

git stash
sudo rm -rf node_modules

PROD_IMAGE_NAME=${PWD##*/}
docker build --rm \
    -t r.halohalolabs.com/${PROD_IMAGE_NAME} \
    .
docker image prune -f
docker push r.halohalolabs.com/${PROD_IMAGE_NAME}

git stash pop

echo 'Done!'
echo "Image name: ${PROD_IMAGE_NAME}"