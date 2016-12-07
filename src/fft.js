import _fft from './_fft' ;
import _zip from './_zip' ;
import unzip from './unzip' ;

export default function fft ( $1 , add , sub , mul , imul , root2n ) {

	return _fft( unzip , _zip( $1 , add , sub , mul , imul , root2n ) ) ;

}
