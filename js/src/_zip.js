
const _zip = function ( $1 , add , sub , mul , imul , root2n ) {

	const zip = function ( l , u , ui , um , v , vi , vm ) {

		const z = root2n( l ) ;

		let w = $1( ) ;

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
