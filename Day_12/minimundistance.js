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

// Complete the minimumDistances function below.
function minimumDistances(a) {
    var map = new Map();
    // STORING EACH VALUE AS INDEX AND COUNT AS VALUE IN MAP
    a.forEach((value, index)=>{
        if(!map.has(value)) {
            map.set(value, index);
        } else {
            //IF ITEM IS REPEATED, STORING AS NEGATIVE VALUE
            map.set(value, -(index-map.get(value)));
        }     
    });
    
    let min = Number.MAX_VALUE;
    
    let flag = false;
    map.forEach((value)=>{
        //FINDING DISTANCE B/W ELEMENTS
        if(value < 0) {
            value = -value;
            if(value < min) {
                min = value;
            }
            flag=true;
        }
    });
    
    if(flag) {
        return min; 
    } else {
        return -1;
    }
   
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = minimumDistances(a);

    ws.write(result + "\n");

    ws.end();
}
