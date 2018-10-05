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

// Complete the countingValleys function below.
function countingValleys(n, s) {
    var steps = s.split('');
    var slvl=0, vCount=0;
    //WATCH EVERY STEP
    steps.forEach((step)=>{
        if(step == 'U') {
            slvl++;
        } else {
            slvl--;
        }
        //IF GRAY IS AT SEA LEVEL AND NEXT STEP IS UP, I.E HE IS GOING TO CLIMB A VALLEY
        if(slvl==0 &&  step=='U') {
            vCount++;
        }
    });
    return vCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
