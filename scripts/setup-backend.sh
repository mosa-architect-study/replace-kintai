if [ -z "$BACKEND_VERSION" ]; then
  BACKEND_VERSION=NO_VERSION_SPECIFIED
fi
bash -c "cd mosakin-backend && ORG_GRADLE_PROJECT_VERSION=$BACKEND_VERSION ./gradlew build"