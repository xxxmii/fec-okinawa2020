## できること
- ejs
- scss
- typescriptのコンパイル
- browserSync
- 画像の圧縮
- コードの整形
- 公開時の不要ファイルの削除、圧縮

## 準備
package-lock.json から依存関係をインストール
```
npm ci
```

## 使用
- コンパイル
```
npm run watch:all
```
- 整形
```
npm run format:all
```
- 公開用の不要ファイル削除、圧縮
```
prepare:all
```