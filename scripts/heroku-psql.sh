#!/bin/bash
touch .netrc
docker run -it --rm \
    -v $PWD/mosakin-backend/database/sql:/sql \
    -v $PWD/.netrc:/root/.netrc \
    -v $PWD/scripts:/scripts \
    -e HEROKU_APP=mosakin-ktln-trial \
    hagaitski/heroku-psql-cli \
    /bin/bash -c 'sh scripts/heroku-login.sh && /bin/bash'
