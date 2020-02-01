cd mosakin-backend
echo deploy-dev-backend $BACKEND_VERSION 
echo deploy.version=$BACKEND_VERSION > ./src/main/resources/.deploy.properties
ORG_GRADLE_PROJECT_VERSION=$BACKEND_VERSION ./gradlew build
heroku jar:deploy build/libs/kintai-$BACKEND_VERSION.jar