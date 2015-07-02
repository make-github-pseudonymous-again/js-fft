

const compile = function ( {

	$1 ,
	add , sub , mul , imul ,
	div2 ,
	root2n , iroot2n

} ) {

	return {


		fft : fft( $1 , add , sub , mul , imul , root2n ) ,

		ifft : ifft( $1 , add , sub , mul , imul , div2 , iroot2n )

	} ;

} ;


exports.compile = compile ;


