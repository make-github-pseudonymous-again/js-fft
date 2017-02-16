```js
/**
 * Initialization with complex numbers in double precision.
 */

import * as number from "@aureooms/js-number" ;
import * as complex from "@aureooms/js-complex" ;

const kernel = complex.cartesian.kernel.compile( number , "i" ) ;
const cartesian = complex.cartesian.array.compile( kernel ) ;

const $ = fft.compile( cartesian ) ;

// ...

/**
 * Fast multiplication of two polynomials u and v in C[x]
 * ( little endian , double precision )
 */

import * as array from "@aureooms/js-array" ;

const l = Math.ceil( Math.log2( Math.max( u.length , v.length ) ) ) ;
const m = Math.pow( 2 , l ) | 0 ;
const n = m << 1 ;

const _u = array.alloc( n ) ;
array.copy( u , 0 , u.length , _u , 0 ) ;
array.fillfn( _u , u.length , n , cartesian.$0 ) ;

const _v = array.alloc( n ) ;
array.copy( v , 0 , v.length , _v , 0 ) ;
array.fillfn( _v , v.length , n , cartesian.$0 ) ;

const $u = array.alloc( n ) ;
const $v = array.alloc( n ) ;

$.fft( l , m , _u , 0 , n , $u , 0 , n ) ; // O(n log n)
$.fft( l , m , _v , 0 , n , $v , 0 , n ) ; // O(n log n)

for ( let i = 0 ; i < n ; ++i ) $u[i] = cartesian.imul( $u[i] , $v[i] ) ; // O(n)

$.ifft( l , m , $u , 0 , n , _u , 0 , n ) ; // O(n log n)
```
