
// uj - ui = 2 ( vm - vi )

const unzip = function ( u , ui , uj , v , vi , vm ) {

	while ( ui < uj ) {

		v[vi] = u[ui] ;

		++ui ; ++vi ;

		v[vm] = u[ui] ;

		++ui ; ++vm ;

	}

} ;

exports.unzip = unzip ;
