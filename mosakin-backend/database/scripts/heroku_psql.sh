#!/bin/bash

NAME_IMAGE='heroku-psql'

if [ "$(docker image ls -q ${NAME_IMAGE})" ]; then
    echo "すでにある ${NAME_IMAGE} イメージを利用するよ。"
else
    echo "${NAME_IMAGE} イメージがないからビルドするよ。"
    echo 'Now building image ...'
    docker build . -t ${NAME_IMAGE} -f ./heroku_psql.Dockerfile
fi

touch .netrc
docker run -it --rm \
    -v $PWD/sql:/sql \
    -v $PWD/.netrc:/root/.netrc \
    -v $PWD/scripts:/scripts \
    ${NAME_IMAGE} \
    /bin/bash -c 'sh scripts/heroku_login.sh && /bin/bash'
