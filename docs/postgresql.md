## PostgreSQLの利用

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