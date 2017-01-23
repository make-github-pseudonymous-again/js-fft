[@aureooms/js-fft](https://aureooms.github.io/js-fft)
==

<img src="https://cdn.rawgit.com/aureooms/js-fft/master/media/sketch.svg" width="864">

Fast Fourier Transform algorithm for JavaScript.
See [docs](https://aureooms.github.io/js-fft).
Parent is [@aureooms/js-algorithms](https://github.com/aureooms/js-algorithms).

```js
fft( l , m , _u , 0 , n , u , 0 , n ) ;  // O(n log n)
fft( l , m , _v , 0 , n , v , 0 , n ) ;  // O(n log n)
convolution( u , 0 , n , v , 0 , n ) ;   // O(n)
ifft( l , m , u , 0 , n , _u , 0 , n ) ; // O(n log n)
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-fft.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-fft/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-fft.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-fft)
[![Build Status](http://img.shields.io/travis/aureooms/js-fft.svg?style=flat)](https://travis-ci.org/aureooms/js-fft)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-fft.svg?style=flat)](https://coveralls.io/r/aureooms/js-fft)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-fft.svg?style=flat)](https://david-dm.org/aureooms/js-fft#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-fft.svg?style=flat)](https://david-dm.org/aureooms/js-fft#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-fft.svg?style=flat)](https://codeclimate.com/github/aureooms/js-fft)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-fft.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-fft)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-fft.svg?style=flat)](https://github.com/aureooms/js-fft/issues)
[![Documentation](https://aureooms.github.io/js-fft/badge.svg)](https://aureooms.github.io/js-fft/source.html)
