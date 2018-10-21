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

function anotherMinimaxProblem(a, n) {
    // Complete this function
    b = findDifferentBit(a, n);
    if (b == 0) return 0;
    let tempA = a.map((x, idx) => [Math.floor(x / b) % 2, idx]);

    tempA.sort((x, y) => x[0] - y[0]);
    let idx = tempA.findIndex((x) => x[0] == 1);

    let min = 10000000000;
    let i, j;
    for (i = 0; i < idx; i++) {
      for (j = idx; j < n; j++) {
        min = Math.min(min, a[tempA[i][1]] ^ a[tempA[j][1]]);
      }
    }
    return min;
}

function findDifferentBit(a, n) {
  let m = Math.pow(2, 30);
  let diff, k;
  while (m > 0) {

    diff = Math.floor(a[0] / m) % 2;
    for (k = 1; k < n; k++) {
      if (diff != (Math.floor(a[k] / m) % 2)) {
        return m;
      }
    }
    m = Math.floor(m / 2);
  }
  return m;
}
function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var result = anotherMinimaxProblem(a, n);
    process.stdout.write("" + result + "\n");

}