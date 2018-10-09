'use strict';

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

// Complete the kaprekarNumbers function below.

function isKaprekar(num) {
    const square = parseInt(Math.pow(num, 2)).toString();
    if(square.length > 1) {
        //LEFT SUBPART OF NUMBER
        const l = parseInt(square.substring(0, square.length / 2));
        //RIGHT SUBPART OF NUMBER
        const r = parseInt(square.substring(square.length / 2));
        return (l + r) === num;
    } else {
        return parseInt(square) === num;
    }
}

function kaprekarNumbers(p, q) {
    let count=0;
    let res = [];
    for(let i=p; i<=q; i++) {
        if(isKaprekar(i)) {
            res.push(i);
            count++
        }
    }
    if(count==0) {
        console.log("INVALID RANGE");
    } else {
        console.log(...res);
    } 
}



function main() {
    const p = parseInt(readLine(), 10);

    const q = parseInt(readLine(), 10);

    kaprekarNumbers(p, q);
}
