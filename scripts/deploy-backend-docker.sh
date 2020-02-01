#!/bin/bash
source ./scripts/setup-backend.sh 
echo Deploy Backend App...
echo Version: $BACKEND_VERSION 

touch .netrc
docker run -it --rm \
    -v $PWD/mosakin-backend/build:/build \
    -v $PWD/scripts:/scripts \
    -v $PWD/.netrc:/root/.netrc \
    -e HEROKU_APP=mosakin-ktln-trial \
    -e BACKEND_VERSION=$BACKEND_VERSION \
    hagaitski/heroku-java-cli \
    bash -c './scripts/heroku-login.sh && heroku jar:deploy build/libs/kintai-$BACKEND_VERSION.jar'
