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

// Complete the candies function below.
function candies(n, arr) {
    var solution = [];
    for(var i = 0; i < n; i++) {
        solution[i] = 1;    
    }
    for(var i = 1; i < n; i++) {
        if(arr[i] > arr[i-1]) {
            solution[i] = solution[i-1] + 1;
        }
    }
    for(var i = n-1; i >0; i--) {
        if(arr[i-1] > arr[i]) {
            solution[i-1] = Math.max(solution[i] + 1, solution[i-1]);
        }
    }
    var result = 0;
    for(var i = 0; i < n; i ++) {
        result = result + solution[i];
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = parseInt(readLine(), 10);
        arr.push(arrItem);
    }

    const result = candies(n, arr);

    ws.write(result + '\n');

    ws.end();
}
