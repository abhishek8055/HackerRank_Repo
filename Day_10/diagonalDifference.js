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

function diagonalDifference(arr) {
    var nRows = arr.length;
    var nCols = arr[0].length;
    var pDiagonal=0, sDiagonal=0;
    for(var row=0; row<nRows; row++) {
        for(var col=0; col<nCols; col++) {
            if(row == col) {
                pDiagonal += arr[row][col];
            }
            if(col == (nRows-row-1)) {
                sDiagonal += arr[row][col];
            }
        }
    }
    return Math.abs(pDiagonal-sDiagonal);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
