process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
	input_stdin += data;
});

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split("\n");
	main();
});

function readLine() {
	return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function solve( n, c, p ) {

	const best_dist = function( a, b ) {
		const diff = Math.abs( a - b ) ;
		const c_diff = c - diff ;
		const [small, large] =  diff < c_diff ? [ diff, c_diff ] : [ c_diff, diff ] ;
		const best = Math.floor( Math.max(small / 2 , Math.min( small, large / 3) ) ) ;
		return best ;
	} ;

	const pair_dist = function( a, b ) {
		const diff = Math.abs( a - b ) ;
		const c_diff = c - diff ;
		return Math.min( diff, c_diff ) ;
	} ;

	const dists = p.map( pair => ( { d: best_dist( ...pair ), pair } ) ) ;
	dists.sort( ( a, b ) => b.d - a.d )  ;

	let max_dist = 0 ;

	for( let i = 0 ; i < n-1 ; i++ ) {
		const pi = dists[i] ;

		if( pi.d <= max_dist ) { break ; }

		for( let j = i+1 ; j < n ; j++ ) {
			const pj = dists[j] ;

			if( pj.d <= max_dist ) { break ; }

			const [ ai, bi ] = pi.pair ;
			const [ aj, bj ] = pj.pair ;

			const dist = Math.min(
				pair_dist( ai, aj ),
				pair_dist( bi, bj ),
				pair_dist( ai, bj ),
				pair_dist( aj, bi ),
				pair_dist( ai, bi ),
				pair_dist( aj, bj )
			) ;

			if( dist > max_dist ) {
				max_dist = dist ;
			}
		}
	}

	console.log( max_dist ) ;
}

function main() {
	var n_temp = readLine().split(' ');
	var n = parseInt(n_temp[0]);
	var c = parseInt(n_temp[1]);
	var points = [];
	for( let points_i = 0; points_i < n; points_i++ ) {
		points[points_i] = readLine().split(' ');
		points[points_i] = points[points_i].map(Number);
	}

	solve( n, c, points ) ;

}