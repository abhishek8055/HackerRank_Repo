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

// Complete the closestNumbers function below.
function closestNumbers(arr) {
    let res = [];
    let n = arr.length;
    let diff;
    let min = Number.MAX_VALUE;
    for(let i=0; i<n-1; i++) {
        for(let j=i+1; j<n; j++) {
            diff = Math.abs(arr[i]-arr[j]);
            if(diff< min) {
                min = diff;
            }
        }
    }
    for(let i=0; i<n-1; i++) {
        for(let j=i+1; j<n; j++) {
            let difference = Math.abs(arr[i]-arr[j]);
            if(difference == min) {
                res.push(arr[i]);
                res.push(arr[j]);
            }
        }
    }
    res.sort((a,b)=>{return a-b});
    return res;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = closestNumbers(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
