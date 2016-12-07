import _fft from './_fft' ;
import _izip from './_izip' ;
import unzip from './unzip' ;

export default function ifft ( $1 , add , sub , mul , imul , div2 , iroot2n ) {

	return _fft( unzip , _izip( $1 , add , sub , mul , imul , div2 , iroot2n ) ) ;

}
