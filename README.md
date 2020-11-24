:butterfly: [@aureooms/js-fft](https://aureooms.github.io/js-fft)
==

<p align="center">
<img src="https://cdn.rawgit.com/aureooms/js-fft/main/media/sketch.svg" width="500">
</p>

Fast Fourier Transform algorithm for JavaScript.
See [docs](https://aureooms.github.io/js-fft).
Parent is [@aureooms/js-algorithms](https://github.com/aureooms/js-algorithms).

```js
fft( l , m , _u , 0 , n , u , 0 , n ) ;  // O(n log n)
fft( l , m , _v , 0 , n , v , 0 , n ) ;  // O(n log n)
convolution( u , 0 , n , v , 0 , n ) ;   // O(n)
ifft( l , m , u , 0 , n , _u , 0 , n ) ; // O(n log n)
```

[![License](https://img.shields.io/github/license/aureooms/js-fft.svg)](https://raw.githubusercontent.com/aureooms/js-fft/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-fft.svg)](https://www.npmjs.org/package/@aureooms/js-fft)
[![Build](https://img.shields.io/travis/aureooms/js-fft/main.svg)](https://travis-ci.org/aureooms/js-fft/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-fft.svg)](https://david-dm.org/aureooms/js-fft)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-fft.svg)](https://david-dm.org/aureooms/js-fft?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-fft.svg)](https://github.com/aureooms/js-fft/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-fft.svg)](https://www.npmjs.org/package/@aureooms/js-fft)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-fft.svg)](https://codeclimate.com/github/aureooms/js-fft/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-fft.svg)](https://codeclimate.com/github/aureooms/js-fft/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-fft/main.svg)](https://codecov.io/gh/aureooms/js-fft)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-fft.svg)](https://codeclimate.com/github/aureooms/js-fft/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-fft/badge.svg)](https://aureooms.github.io/js-fft/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-fft)](https://bundlephobia.com/result?p=@aureooms/js-fft)

## :dancing_women: Related
  - [@aureooms/js-fft-integer](https://github.com/aureooms/js-fft-integer)
  
## :scroll: References
  - [Some python code with good comments](https://github.com/aureooms-research/fft/blob/main/code/polynomials.py#L4)
