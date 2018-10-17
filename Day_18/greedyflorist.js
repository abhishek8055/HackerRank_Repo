'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
    var n = c.length;
    var multiply = 0;
    var total = 0;
    c.sort(function(a, b) {
        return Number(b) - Number(a);
    });
    for (let i = 0; i<n; i++) {
        if(i%k == 0) multiply++;
        total += c[i] * multiply;
    }
    return total;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    const minimumCost = getMinimumCost(k, c);

    ws.write(minimumCost + '\n');

    ws.end();
}
