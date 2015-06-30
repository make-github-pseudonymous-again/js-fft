
const _zip = function ( one , add , sub , mul , imul , root ) {

	const zip = function ( l , u , ui , um , v , vi , vm ) {

		const z = root( l ) ;

		let w = one( ) ;

		const _vm = vm ;

		while ( vi < _vm ) {

			v[vi] = add( u[ui] , mul( w , u[um] ) ) ;
			v[vm] = sub( u[ui] , mul( w , u[um] ) ) ;

			w = imul( w , z ) ;

			++um ; ++vm ; ++ui ; ++vi ;

		}

	} ;

	return zip ;

} ;

exports._zip = _zip ;
