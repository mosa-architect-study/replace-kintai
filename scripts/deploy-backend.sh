#!/bin/bash
source ./scripts/setup-backend.sh 
echo Deploy Backend App...
echo Version: $BACKEND_VERSION 
heroku jar:deploy ./mosakin-backend/build/libs/kintai-$BACKEND_VERSION.jar