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

function printShortestPath(n, i1, j1, i2, j2) {
    var i = i1 - i2, j = j1 - j2;
    if (i % 2 === 1 || (i / 2 + j) % 2 === 1) {
        process.stdout.write("Impossible");
        return;
    }
    i /= 2;
    if (j >= i && i >= 0) {
        process.stdout.write((i+j)/2 + "\n");
        process.stdout.write(("UL ".repeat(i) + "L ".repeat((j - i) / 2)).slice(0, -1));
        return;
    }
    if (i >= j && i >= -j) {
        process.stdout.write(i + "\n");
        process.stdout.write(("UL ".repeat((i + j) / 2) + "UR ".repeat((i - j)/2)).slice(0,-1));
        return;
    }
    if (i >= 0 && i <= -j) {
        process.stdout.write((i-j)/2 + "\n");
        process.stdout.write(("UR ".repeat(i) + "R ".repeat(-(i+j)/2)).slice(0,-1));
        return;
    }
    if (j <= i && i <= 0) {
        process.stdout.write(-(i+j)/2 + "\n");
        process.stdout.write(("R ".repeat((i-j)/2) + "LR ".repeat(-i)).slice(0,-1));
        return;
    }
    if (i <= j && i <= -j) {
        process.stdout.write(-i + "\n");
        process.stdout.write(("LR ".repeat(-(i+j)/2) + "LL ".repeat((j-i)/2)).slice(0,-1));
        return;
    }
    if (i <= 0 && i >= -j) {
        process.stdout.write((j-i)/2 + "\n");
        process.stdout.write(("LL ".repeat(-i) + "L ".repeat((i+j)/2)).slice(0,-1));
        return;
    }
}

function main() {
    var n = parseInt(readLine());
    var i_start_temp = readLine().split(' ');
    var i_start = parseInt(i_start_temp[0]);
    var j_start = parseInt(i_start_temp[1]);
    var i_end = parseInt(i_start_temp[2]);
    var j_end = parseInt(i_start_temp[3]);
    printShortestPath(n, i_start, j_start, i_end, j_end);

}