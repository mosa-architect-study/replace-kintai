### Firebase Authenticationの検証方法

- 秘密鍵JSONを取得し、`frontend/secret`ディレクトリにファイル名は適当でいいので保存する。（検証用のものはSlackで配ります。）  
- 別々のターミナルから以下のコマンドを実行 
  - `npm run server`
  - `npm run dev`
- [http://localhost:3000/](http://localhost:3000/)に移動し、Loginボタンを押下しGoogleアカウントでログイン
- サーバーのログに以下のように出たら成功
```
Verify... 2019-11-05T18:09:46.587Z
Verified! 2019-11-05T18:09:46.762Z hogehogehogehoge
```