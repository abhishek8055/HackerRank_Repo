'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the pylons function below.
function pylons(k, arr) {
    let backtracker = 0;
    let i = k-1;
    let c = 0;
    while(i < arr.length + k - 1){
        if(i >= arr.length) {
            i = arr.length - 1;
        }
        else if(arr[i] == 1) {
            backtracker = i;
            i += 2*k-1;
            c++;
        }
        else if(backtracker > i) {
            return -1;
        }
        else {
            i--;
        }
    }
    return c;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = pylons(k, arr);

    ws.write(result + "\n");

    ws.end();
}
