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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    arr.sort(function(a,b){return a - b});
    var mini=0, max=0;
    for(var i=0; i<arr.length; i++) {
        if(i != arr.length-1) {
            mini = mini+arr[i];
        }
        if(i != 0) {
            max = max+arr[i];
        }
    }
    var arr = [mini, max];
    console.log(...arr);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
