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

// Complete the equalizeArray function below.
function equalizeArray(arr) {
    const map = new Map();
    //STORING EACH UNIQUE ELEMENT WITH FREQUENCY, IN MAP
    arr.forEach((item)=>{
        if(!map.has(item)) {
            map.set(item, 1);
        } else {
            map.set(item, map.get(item)+1);
        }
    });
    let max=0;
    //GET THE ELEMENT WITH MAXIMUM FREQUENCY
    map.forEach((value)=>{
        if(value > max) {
            max = value;
        }
    });
    //TOTAL DELETE OPERATIONS TO BE PERFORMED = TOTAL_ELEMENT-MAX
    return arr.length-max;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10)); 

    let result = equalizeArray(arr);

    ws.write(result + "\n");

    ws.end();
}
