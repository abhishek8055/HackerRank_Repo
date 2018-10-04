'use strict';

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

function plusMinus(arr) {
    var len=arr.length;
    var pCount=0, nCount=0, zCount=0;
    arr.forEach(check);
    function check(item) {
        if(item >0) {
            pCount++;
        } else if(item < 0 ) {
            nCount++;
        } else {
            zCount++;
        }
    }
    console.log((pCount/len).toFixed(6));
    console.log((nCount/len).toFixed(6));
    console.log((zCount/len).toFixed(6));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
