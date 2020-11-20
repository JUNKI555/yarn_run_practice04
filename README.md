# yarn_run_practice04
- build TypeScript and PostCSS with yarn
- use Unbrella JS
- video player

## build and start a static file server
`yarn build`

## build, watch tsc and start a static file server
`yarn dev`

## Reference sources
- 2020/11版：TypeScript+UmbrellaJS+PostCSSの開発環境を yarn で構築する
  - https://zenn.dev/junki555/articles/8f411ca2b33f7f355062
- Umbrella JS
  - Tiny library for DOM manipulation and events
  - https://umbrellajs.com/
- Umbrella JSドキュメント翻訳 | Umbrella - にほんご。
  - 最終更新2018年でちょっと古いけどにほんご
  - https://tr.you84815.space/umbrella/index.html
- TypeScript未対応のモジュールをimportするときのエラー対策 | Qiita
  - https://qiita.com/ichironagata/items/58855c5108f2cbcd18b7
- Suggestion: Interface extend generic type #2225 | microsoft / TypeScript | GitHub ISSUE
  - https://github.com/microsoft/TypeScript/issues/2225
- ts-transform-import-path-rewrite | yarnpkg
  - https://yarnpkg.com/?q=ts-transform-import-path-rewrite
- cpy-cli | yarnpkg
  - https://yarnpkg.com/?q=cpy-cli
- javascript - Rename file with NPM - Stack Overflow
  - https://stackoverflow.com/questions/35258871/rename-file-with-npm

### FetchAPI References
- Fetch API - Web API | MDN
	- https://developer.mozilla.org/ja/docs/Web/API/Fetch_API
- JavaScriptのFetch API について | Qiita
	- https://qiita.com/sotasato/items/31be24d6776f3232c0c0
- まだXMLHttpRequestを使ってるの？　fetchのすすめ | Qiita
	- https://qiita.com/uhyo/items/91649e260165b35fecd7
- jQuery.ajax()の代替としてFetch APIをざっくり使ってみる | tacamy--blog
	- https://tacamy.hatenablog.com/entry/2016/10/16/182658

## video player uses hls.js References
- 2020/11版：超強引にTypeScript+hls.jsでChromeでもvideoタグでHLS再生できるページ作る
  - https://zenn.dev/junki555/articles/aff287dc815ff8b6a605
- Examples | HTTP Live Streaming | Apple Developer
  - https://developer.apple.com/streaming/examples/
- API.md | video-dev / hls.js | GitHub
  - https://github.com/video-dev/hls.js/blob/master/docs/API.md
- hls.js demo
  - https://hls-js.netlify.app/demo/
- AWS+hls.jsでストリーミング再生（その２） | Qiita
  - https://qiita.com/spring_i/items/a617bfec4781f48e5501
- hls.jsで実装する動画ストリーミングの分かりやすい解説 | YukiPress
  - https://mat0401.info/blog/brief-hlsjs1/
- hls.js のコントリビューターになろう | ART OF LIFE
  - https://art-of-life.jp/posts/hlsjs-contributor/
- Hls.jsが超便利。 | 株式会社デジタルファーム
  - https://www.digital-farm.com/staffblog/1615/
- おすすめhls web player hls.jsを使ってみる | オレンジの国
  - https://techlive.tokyo/archives/4295
