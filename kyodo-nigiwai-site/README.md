# 経堂駅前にぎわいプロジェクト サイト

穴掘りイベントとは別ブランド・別サイトとして運用するための静的サイトです。

## 公開想定

Cloudflare Pages で、このディレクトリ `kyodo-nigiwai-site` を公開対象にします。

候補URL例：

- `kyodo-nigiwai.pages.dev`
- `kyodo-station-front.pages.dev`
- 独自ドメイン取得後は `kyodo-nigiwai.jp` など

## 必要な差し替え

### フォームURL

`index.html` 内の `FORM_URL_HERE` を、賛同・応援フォームのURLに差し替えます。

### LINE URL

`index.html` 内の `LINE_URL_HERE` を、LINE公式アカウントの友だち追加URLに差し替えます。

### 画像

以下の画像を `assets/` に配置します。

- `future-living-room.jpg`：未来イメージ・hero背景
- `current-station.jpg`：現在の経堂駅前写真
- `michiasobi-mood.jpg`：当日の雰囲気画像
- `movie-poster.jpg`：動画サムネイル
- `ogp.jpg`：SNS共有用画像

## 方針

- 穴掘りイベントとは世界観・導線・URLを混ぜない
- 「署名活動」ではなく「賛同・応援フォーム」として柔らかく見せる
- 住所の番地は取得しない
- LINEで継続的につながる導線を置く
- 画像に文字を入れず、日付・場所・説明はHTML側で管理する
- お絵描きプロジェクト `https://enomachi.pages.dev` を当日コンテンツとして組み込む

## 公開前チェック

- 実URLを開いて確認
- 画像が表示されること
- 動画サムネイルが表示されること
- 賛同フォームURLが正しいこと
- LINE URLが正しいこと
- `https://enomachi.pages.dev` へのリンクが開くこと
- スマホ固定ボタンが邪魔にならないこと
- 穴掘りイベントサイトに影響がないこと
