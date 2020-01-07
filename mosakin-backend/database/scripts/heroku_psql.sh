#!/bin/bash
touch .netrc
docker run -it --rm \
    -v $PWD/sql:/sql \
    -v $PWD/.netrc:/root/.netrc \
    -v $PWD/scripts:/scripts \
    hagaitski/heroku-psql-cli \
    /bin/bash -c 'sh scripts/heroku_login.sh && /bin/bash'
