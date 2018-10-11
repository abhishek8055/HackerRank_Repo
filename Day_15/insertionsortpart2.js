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

// Complete the insertionSort2 function below.
function insertionSort2(n, arr) {
    for (let i = 1; i < n; i++) { 
        let key = arr[i]; 
        let j = i-1; 
        while (j >= 0 && arr[j] > key) { 
            arr[j+1] = arr[j]; 
            j = j-1; 
        } 
        arr[j+1] = key;
        console.log(...arr);
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}
