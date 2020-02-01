# デプロイ

## Github Actionsによる自動デプロイ
デプロイ方法としてGithub Actionsによる自動デプロイを採用しています。
デプロイのトリガーにはタグのpublishを設定しており、Githubにてタグをpublishすることによってデプロイが実行されます。  
[https://github.com/mosa-architect-study/replace-kintai/releases/new](https://github.com/mosa-architect-study/replace-kintai/releases/new)

## ローカルからの手動デプロイ
バックエンドのアプリケーションについてはローカルのデプロイも可能です。  
Heroku環境でアプリケーションを検証したい場合に利用してください。  

### 手順
```bash
# Docker及びJavaをローカルにインストールしておく必要があります。
./scripts/deploy-backend-docker.sh
```

