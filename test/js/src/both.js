
var algo = require( "aureooms-js-algo" ) ;
var array = require( "aureooms-js-array" ) ;
var random = require( "aureooms-js-random" ) ;
var number = require( "aureooms-js-number" ) ;
var complex = require( "aureooms-js-complex" ) ;

var kernel = complex.cartesian.kernel.compile( number , "i" ) ;
var cartesian = complex.cartesian.array.compile( kernel ) ;

var $ = fft.compile( cartesian ) ;
var _ = cartesian.complex ;

var compare = algo.__absepsilon__( 0.0001 ) ;

test( "both" , function ( ) {

	var n = Math.pow( 2 , 10 ) | 0 ;
	var l = Math.log2( n ) | 0 ;
	var m = n >>> 1 ;

	var u = array.alloc( n ) ;
	var v = array.alloc( n ) ;
	var w = array.alloc( n ) ;


	for ( var i = 0 ; i < n ; ++i ) {
		u[i] = _( random.randfloat( -1000 , 1000 ) , random.randfloat( -1000 , 1000 ) ) ;
	}

	array.copy( u , 0 , n , w , 0 ) ;

	$.fft( l , m , u , 0 , n  , v , 0 , n ) ;

	$.ifft( l , m , v , 0 , n  , u , 0 , n ) ;

	for ( var j = 0 ; j < n ; ++j ) {

		deepEqual( compare( u[j][0] , w[j][0] ) , 0 , [ u[j][0] , w[j][0] ] ) ;
		deepEqual( compare( u[j][1] , w[j][1] ) , 0 , [ u[j][1] , w[j][1] ] ) ;

	}

} ) ;
