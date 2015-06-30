[js-fft](http://aureooms.github.io/js-fft)
==

Fast Fourier Transform code bricks for JavaScript

[![NPM license](http://img.shields.io/npm/l/aureooms-js-fft.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-fft/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-fft.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-fft)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-fft.svg?style=flat)](http://bower.io/search/?q=aureooms-js-fft)
[![Build Status](http://img.shields.io/travis/aureooms/js-fft.svg?style=flat)](https://travis-ci.org/aureooms/js-fft)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-fft.svg?style=flat)](https://coveralls.io/r/aureooms/js-fft)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-fft.svg?style=flat)](https://david-dm.org/aureooms/js-fft#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-fft.svg?style=flat)](https://david-dm.org/aureooms/js-fft#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-fft.svg?style=flat)](https://codeclimate.com/github/aureooms/js-fft)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-fft.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-fft)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-fft.svg?style=flat)](https://github.com/aureooms/js-fft/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-fft.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-fft)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-fft
# or
jspm install npm:aureooms-js-fft
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-fft
```

### bower
```terminal
bower install aureooms-js-fft
```

### ender
```terminal
ender add aureooms-js-fft
```

### jam
```terminal
jam install aureooms-js-fft
```

### spm
```terminal
spm install aureooms-js-fft --save
```

### npm
```terminal
npm install aureooms-js-fft --save
```

## Require
### jspm
```js
let fft = require( "github:aureooms/js-fft" ) ;
// or
import fft from 'aureooms-js-fft' ;
```
### duo
```js
let fft = require( "aureooms/js-fft" ) ;
```

### component, ender, spm, npm
```js
let fft = require( "aureooms-js-fft" ) ;
```

### bower
The script tag exposes the global variable `fft`.
```html
<script src="bower_components/aureooms-js-fft/js/dist/fft.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-fft" ] , function ( fft ) { ... } ) ;
```