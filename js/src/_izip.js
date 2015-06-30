
const _izip = function ( one , add , sub , mul , imul , div2 , root ) {

	const izip = function ( l , u , ui , um , v , vi , vm ) {

		const z = root( l ) ;

		let w = one( ) ;

		const _vm = vm ;

		while ( vi < _vm ) {

			v[vi] = div2( add( u[ui] , mul( w , u[um] ) ) ) ;
			v[vm] = div2( sub( u[ui] , mul( w , u[um] ) ) ) ;

			w = imul( w , z ) ;

			++um ; ++vm ; ++ui ; ++vi ;

		}

	} ;

	return izip ;

} ;

exports._izip = _izip ;
