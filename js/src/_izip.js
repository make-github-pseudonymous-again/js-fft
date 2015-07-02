
const _izip = function ( $1 , add , sub , mul , imul , div2 , root2n ) {

	const izip = function ( l , u , ui , um , v , vi , vm ) {

		const z = root2n( l ) ;

		let w = $1( ) ;

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
