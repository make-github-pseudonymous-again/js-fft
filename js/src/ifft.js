
const ifft = function ( one , add , sub , mul , imul , div2 , root ) {

	return _fft( unzip , _izip( one , add , sub , mul , imul , div2 , root ) ) ;

} ;

exports.ifft = ifft ;
