[![Netlify Status](https://api.netlify.com/api/v1/badges/dfaaa7e1-63a9-48d4-abb4-243ec1782b13/deploy-status)](https://app.netlify.com/sites/statuesque-dragon-e12b5e/deploys)

## 初めに

APIキーは下記に保存しています。（.env.development.local, .env.local）

作業開始前にダウンロードしアプリケーションのルートディレクトリに設置して下さい。

https://drive.google.com/drive/folders/1XDIwZG3DX90kOSpwIAWjvzuWXA59PIVR?usp=share_link

その後下記コマンドを実行。

```bash
npm run dev
# or
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、結果が表示されます。

`src/pages/index.tsx` を変更してページを編集することができます。ファイルを編集すると、ページが自動的に更新されます。

## CSSについて

本プロジェクトではCSS in JSであるstyled-componentを採用しています。

全体共通の設定ファイルは`src/theme/setting` にあります。

ページ毎・コンポーネント毎のスタイルはtsxに記載してあるので、適宜変更して下さい。

## CMSについて

ヘッドレスCMSとしてmicroCMSを採用しています。

ログイン方法はBacklogに記載があるので、参照下さい。