
const fft = function ( one , add , sub , mul , imul , root ) {

	return _fft( unzip , _zip( one , add , sub , mul , imul , root ) ) ;

} ;

exports.fft = fft ;
