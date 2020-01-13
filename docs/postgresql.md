# PostgreSQL

## PostgreSQLを動かす

### Dockerの起動
ローカルでPostgreSQL DBを利用する場合は、
`mosakin-backend/database`に移動し、`docker-compose up`を起動してください。

```bash
cd mosakin-backend/database
# PostgresqlのDockerコンテナの起動 -dはバックグラウンドモード
docker-compose up -d 
# DBにサンプルデータが挿入されていることを確認
docker-compose exec postgres bash -c 'psql -U postgres -c "select * from m_user"' 
# DockerコンテナのStop
docker-compose stop 
# Dockerコンテナの削除
docker-compose rm -f
```

### ローカルのKotlinアプリケーションのデータソースをDockerで起動したPostgreSQLに切り替える

Spring BootのProfileを`dev`に設定すると、データソースの向き先がDockerで起動したPostgreSQLになります。

```bash
./gradlew bootRun --args='--spring.profiles.active=dev'
```

## Heroku上にあるPostgreSQL DBに対してDockerコンテナからSQLを発行する。

Heroku上のDBに対してSQLを発行するにはHeroku CLIとPostgreSQL CLIが必要です。
環境を汚したくない人のためにコンテナからDBの操作が可能なDockerfileを用意しました。

```bash
cd moskain-backend/database
## hagaitski/heroku-psql-cliイメージはherokuコマンドとpsqlコマンドが使えるDocker Image
## sqlディレクトリの内容をコンテナにマウントしつつコンテナを起動し、bashを起動。
docker run -it --rm -v $PWD/sql:/sql hagaitski/heroku-psql-cli /bin/bash

## Dockerコンテナ内
heroku login -i # herokuログイン
export HEROKU_APP=mosakin-ktln-trial # ターゲットのアプリ名を設定
## SQLを実行したりできる
heroku pg:psql -c 'select * from m_user;'
heroku pg:psql -c '\i /sql/02_sampledata.sql;' #マウントしたSQLファイルを実行できる
```

面倒なコマンド入力をしたくない人のためにshファイル作ってます。
コンテナ内のHerokuログイン情報をホスト側に保存することでコンテナに出たり入ったりしてもログインしたままで操作が可能です。

```bash
cd moskain-backend/database
./scripts/heroku_psql.sh
```
