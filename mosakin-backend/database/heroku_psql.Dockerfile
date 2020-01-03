FROM ubuntu:18.04 
RUN apt update
RUN apt install -y curl
RUN curl https://cli-assets.heroku.com/install.sh | sh
## postgresql-11はないっぽい
RUN apt install -y postgresql-10
CMD /bin/bash