
const ifft = function ( $1 , add , sub , mul , imul , div2 , iroot2n ) {

	return _fft( unzip , _izip( $1 , add , sub , mul , imul , div2 , iroot2n ) ) ;

} ;

exports.ifft = ifft ;
