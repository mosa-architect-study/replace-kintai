# 認証について
当プロジェクトではFirebase Authenticationを利用した認証処理を行います。
サーバーサイドのアプリケーションは`/`以外の全てのアクセスに対して認証フィルタを通しています。

## サーバーアプリケーションにおけるFirebase Authenticationの有効化方法

ローカル開発環境時には以下の2つの方法でFirebase Authenticationを有効にできます。

- 起動時に環境変数`secret.GOOGLE_AUTH_CREDENTIAL_JSON`として秘密鍵JSONを設定する。
- `src/main/resources/secret/GOOGLE_AUTH_CREDENTIAL_JSON.json`に秘密鍵JSONを保存する。

```セキュリティ上、秘密鍵JSONはgit管理していません。秘密鍵JSONはSlackで共有しています。```

### ローカル実行時にFirebase Authenticationを有効にしなかった場合の挙動について

上記の方法でFirebase Authenticationを有効にしなかった場合、HTTPヘッダーに`Authorization`が**付与されているかどうか**のみで、APIの検証を行います。`Authorization`ヘッダーが付与されていない場合にAPIはアクセスを拒否します。

## ローカルでのクライアントとサーバーサイドを通じたFirebase Authenticationの検証方法

ローカルでFirebase Authenticationを利用した認証を検証します。

### アプリケーションの起動
#### サーバーサイド
上記方法でサーバーを立ち上げます。

#### クライアントサイド
`npm run local`コマンドでサーバーを立ち上げます。

### 検証
- http://localhost:3000 を開きます。
- `Login With Google`ボタンを押し、リダイレクトログインをします。
- サーバーサイドのログでログインしたアカウントのemailアドレスが表示されれば成功です。

## 自分のIDトークンを取得する
curlやその他ツールからトークン入りでAPI接続テストを行いたい場合、自分でトークンを取得する必要があるので、その手順です。

- 開発環境でもローカルで立ち上げたWEBサイトでもいいので、クライアントのページをブラウザで開きます。
- ログインしていない場合はログインを行います。
- 検証ツールでConsoleを確認し、`token↓`とあるすぐ下の文字列がIDトークンです。

