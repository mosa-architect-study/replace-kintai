#!/bin/bash
touch .netrc
docker run -it --rm \
    -v $PWD/mosakin-backend/database/sql:/sql \
    -v $PWD/.netrc:/root/.netrc \
    -v $PWD/scripts:/scripts \
    hagaitski/heroku-psql-cli \
    /bin/bash -c 'sh scripts/heroku-login.sh && /bin/bash'
