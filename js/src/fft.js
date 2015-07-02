
const fft = function ( $1 , add , sub , mul , imul , root2n ) {

	return _fft( unzip , _zip( $1 , add , sub , mul , imul , root2n ) ) ;

} ;

exports.fft = fft ;
