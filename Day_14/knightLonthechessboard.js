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

function asdf(n, i, j) {
    var moves = Array.from(Array(n+1)).map(() => Array.from(Array(n+1)));
    var q = [[1, 1]];
    var seen = {};

    moves[1][1] = 0;

    while (q.length) {
        var cur = q.shift();

        if (cur[0] === n && cur[1] === n) {
            return moves[cur[0]][cur[1]];
        }

        for (let a of [[i, j], [-i, j], [i, -j], [-i, -j], [j, i], [-j, i], [j, -i], [-j, -i]]) {
            const next = [cur[0] + a[0], cur[1] + a[1]];

            if (next[0] > n || next[1] > n || next[0] < 1 || next[1] < 1) {
                continue;
            }

            if (!seen[next.join(',')]) {
                seen[next.join(',')] = true;
                moves[next[0]][next[1]] = moves[cur[0]][cur[1]] + 1;
                q.push(next);
            }
        }
    }

    return -1;
}

function main() {
    var n = parseInt(readLine());
    var ans = Array.from(Array(n)).map(() => Array.from(Array(n)));

    for (var i = 1; i < n; i++) {
        for (var j = 1; j < n; j++) {
            ans[i][j] = ans[j][i] || asdf(n, i, j);
        }
    }

    ans.slice(1).map(row => console.log(row.slice(1).join(' ')));
}