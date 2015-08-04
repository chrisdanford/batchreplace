# batchreplace [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Efficiently replace a batch of strings all at once


## Install

```sh
$ npm install --save batchreplace
```


## Usage

```js
var batchreplace = require('batchreplace');

var replacer = batchreplace.mapReplacer({a: 1, b: 2});
console.log(replacer('a b c')); // '1 2 c'
```

## License

MIT © [Chris Danford](https://www.chrisdanford.com)


[npm-image]: https://badge.fury.io/js/batchreplace.svg
[npm-url]: https://npmjs.org/package/batchreplace
[travis-image]: https://travis-ci.org/chrisdanford/batchreplace.svg?branch=master
[travis-url]: https://travis-ci.org/chrisdanford/batchreplace
[daviddm-image]: https://david-dm.org/chrisdanford/batchreplace.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/chrisdanford/batchreplace
[coveralls-image]: https://coveralls.io/repos/chrisdanford/batchreplace/badge.svg
[coveralls-url]: https://coveralls.io/r/chrisdanford/batchreplace
