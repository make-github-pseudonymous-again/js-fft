export default function _fft ( unzip , zip ) {

	const fft = function ( l , m , u , ui , uj , v , vi , vj ) {

		if ( l === 0 ) {

			v[vi] = u[ui] ;
			return ;

		}

		unzip( u , ui , uj , v , vi , vi + m ) ;

		fft( l - 1 , m >>> 1 , v , vi , vi + m , u , ui , ui + m ) ;
		fft( l - 1 , m >>> 1 , v , vi + m , vj , u , ui + m , uj ) ;

		zip( l , u , ui , ui + m , v , vi , vi + m ) ;

	} ;

	return fft ;

}
