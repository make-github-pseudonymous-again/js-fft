import test from 'ava' ;

import { __absepsilon__ } from '@aureooms/js-algorithms' ;
const compare = __absepsilon__( 0.0001 ) ;

import { alloc , copy } from '@aureooms/js-array' ;
import { randfloat } from '@aureooms/js-random' ;

import * as number from '@aureooms/js-number' ;
import complex from '@aureooms/js-complex' ;
const kernel = complex.cartesian.kernel.compile( number , "i" ) ;
const cartesian = complex.cartesian.array.compile( kernel ) ;
const _ = cartesian.complex ;


import fft from '../../src' ;
const $ = fft.compile( cartesian ) ;

test( "both" , t => {

	const n = Math.pow( 2 , 10 ) | 0 ;
	const l = Math.log2( n ) | 0 ;
	const m = n >>> 1 ;

	const u = alloc( n ) ;
	const v = alloc( n ) ;
	const w = alloc( n ) ;


	for ( let i = 0 ; i < n ; ++i ) {
		u[i] = _( randfloat( -1000 , 1000 ) , randfloat( -1000 , 1000 ) ) ;
	}

	copy( u , 0 , n , w , 0 ) ;

	$.fft( l , m , u , 0 , n  , v , 0 , n ) ;

	$.ifft( l , m , v , 0 , n  , u , 0 , n ) ;

	for ( var j = 0 ; j < n ; ++j ) {

		t.deepEqual( compare( u[j][0] , w[j][0] ) , 0 , [ u[j][0] , w[j][0] ] ) ;
		t.deepEqual( compare( u[j][1] , w[j][1] ) , 0 , [ u[j][1] , w[j][1] ] ) ;

	}

} ) ;
