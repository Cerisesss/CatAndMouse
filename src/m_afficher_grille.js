const grille = function(x, y, c_x, c_y, s_x, s_y) {
	for(let i; i < x; i++) {
		for(let j; j < y; j++) {
			if(i === (c_x - 1) && j === (c_y - 1)) {
				process.stdout.write("c ");
			} else if(i === (s_x - 1) && j === (s_y - 1)) {
				process.stdout.write("s ");
			} else {
				process.stdout.write(". ");
			}
		}
		console.log();
	}
};

module.exports = grille;
