#!/bin/bash

if heroku auth:whoami > /dev/null 2>&1; then 
    echo "ログイン済みだよ！" 
else 
    echo "ログインしなきゃね！"
    heroku login -i
fi
