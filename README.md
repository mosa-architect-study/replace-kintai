# replace-kintai

## Docs
- [認証について](/docs/authentication.md)
- [PostgreSQL](/docs/postgresql.md)

## /mosakin-frontend
フロントのプロジェクトです。  

### 必要ツール
- Visual Studio Code  
- ESLintプラグイン  
    lintを実行するために`/mosakin-frontend`ディレクトリでVSCodeを開くこと
- Node.js(12系)

### 開発手順
```bash
#cd mosakin-frontend
npm i
npm run dev #devサーバーの立ち上げ（向いてるサーバーAPIのホストがHerokuになる。）
npm run local #devサーバーの立ち上げ（向いてるサーバーAPIのホストがlocalhost:8080になる）
npm run build #プロジェクトのビルド
npm run storybook #storybookの立ち上げ
```

## /mosakin-backend  
バックエンドのプロジェクトです。  

### 必要ツール
- IntelliJ IDEA (Community Edition)  
以下 `IDE`
- Java 11

### IDE環境構築手順
- IDEを開く
- `import Project`
- /mosakin-backendをOpen
- `import project from external model` -> `Gradle`

### サーバーの起動

```bash
 ./gradlew bootRun
```

#### 確認方法

http://localhost:8080 にアクセスすること



