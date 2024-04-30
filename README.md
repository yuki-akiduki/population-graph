# 都道府県別 人口推移グラフアプリ
RESAS APIで取得した人口推移データをグラフで表示するアプリケーションです。
各都道府県を選択することで、グラフが表示されます。

## 使用技術
### フロント
- node.js
- Next.js
- TypeScript

### インフラ
- Docker

### その他
- Git
- Emotion
- Highcharts
- esLint
- prettier

## スタート
リポジトリクローン後、`npm install`をして以下のコマンドNextを立ち上げてください。
```
npm run dev
```
立ち上げ後、[http://localhost:3000/](http://localhost:3000/)でサーバーが立ち上がります。

## APIについて
人口データはRESAS APIで取得をして管理しております。  
グラフを表示させるために、[RESAS API](https://opendata.resas-portal.go.jp/)で利用登録をし、APIの取得をお願いします。  
API取得後は`.env`ファイルで管理を行ってください。

## 各種lintについて
### lint
lintはNext標準のlintを使用しております。  
lintをチェックしたい場合は、`npm run lint`でチェックをお願いします。

### format
コードフォーマットは{js,ts,jsx,tsx}に対して、prettierを使用して、フォーマットを行います。
コードフォーマットを行う場合は`npm run format`でお願いします。
