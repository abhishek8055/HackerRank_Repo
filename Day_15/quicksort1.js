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

// Complete the quickSort function below.
function quickSort(ar) {
    var temp=0;
    var pivot=ar[0];
    var pIndex=ar.length-1;
    for(var i=ar.length-1;i>=1;i--){
        if(ar[i]>=pivot){
            temp=ar[i];
            ar[i]=ar[pIndex];
            ar[pIndex]=temp;
            pIndex-=1;
        }
    }
    temp=ar[pIndex];
    ar[pIndex]=ar[0];
    ar[0]=temp;
    
    return ar;  
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = quickSort(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
