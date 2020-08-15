# tumblr-theme

`theme*`のディレクトリ構造について。

```
theme*
├── index.html // ローカルでテーマを作るときに使ってる
├── src
│   ├── css
│   │   └── main.css  // scssのコンパイル後ファイル
│   └── sass
│       └── main.scss  // ローカルでテーマを作るときに使ってる
└── theme.html // tumblr用の書式を適用したもの。コピペで使える。
```

新しくテーマを作る時は、`gulpfile.js`の`theme`を変更してください。sassのコンパイル時、ディレクトリを指定するのに使用します。

## theme 1
最初に作ったやつ。

![theme1](./images/theme1.png)

## theme 2
次に作ったやつ。ページネーションが死んでいる...( ˘ω˘ )

![theme2](./images/theme2.png)

## theme 3
2020/08/15現在メインで使ってるやつ。Disqusコメント対応。

![theme3](./images/theme3.png)

## markdown用のcssの適用
htmlで、`.post-body`ってクラスの下ならば、適用できます。

```
<div class="post-body">
  {Body}
</div>
```