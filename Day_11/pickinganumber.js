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

//Complete the pickingNumbers function below.
function pickingNumbers(a) {
    a.sort((x,y)=>{return x-y});
    let diff;
    let max = Number.MIN_VALUE;
    for(let i=0; i<a.length; i++) {
        var count=0;
        for(var j=i;j<a.length;j++) {
            diff = Math.abs(a[i]-a[j]);
            if(diff <= 1) {
                count++;
            }       
        }
        if(count > max) {
            max=count;
        }          
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10); 

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = pickingNumbers(a);

    ws.write(result + "\n");

    ws.end();
}
