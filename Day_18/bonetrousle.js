var BigNumber = require("bignumber.js");

function sum_of_n(a) {
	return a.times(a.plus(1).dividedBy(2));
}

function processData(input) {
	let lines = input.split("\n");
	let t = parseInt(lines.shift());
	let zero = new BigNumber(0);
	let one = new BigNumber(1);

	for (; t > 0; t -= 1) {
		let line = lines.shift();
		let compound = line.split(" ");

		let n = new BigNumber(compound[0]);
		let k = new BigNumber(compound[1]);
		let b = new BigNumber(compound[2]);

		let triangle = sum_of_n(b);
		if (n.greaterThan(sum_of_n(k).minus(sum_of_n(k.minus(b))))) {
			process.stdout.write("-1\n");
			continue;
		}

		if (n.lessThan(triangle)) {
			process.stdout.write("-1\n");
			continue;
		}

		let solution = "";

		n = n.minus(triangle);

		let h = n.dividedToIntegerBy(b);

		n = n.minus(h.times(b));

		let box_i = new BigNumber(0);
		while (box_i.lessThan(b)) {
			let next_box_i = box_i.plus(one);
			let prefill = b.minus(box_i).plus(h);

			if (!n.equals(zero)) {
				let fill = k.minus(prefill);
				if (n.lessThan(fill)) {
					fill = n;
					n = zero;
				} else {
					n = n.minus(fill);
				}

				k = k.minus(one);

				if (next_box_i.lessThan(b)) {
					solution += prefill.plus(fill).toString() + " ";
				} else {
					solution += prefill.plus(fill).toString() + "\n";
				}
			} else {
				if (next_box_i.lessThan(b)) {
					solution += prefill.toString() + " ";
				} else {
					solution += prefill.toString() + "\n";
				}
			}

			box_i = next_box_i;
		}

		process.stdout.write(solution);

	}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
	_input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});