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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    var map = new Map();
    ar.forEach( (item)=>{
        //IF ITEM IS NOT PRESENT IN MAP
        if(map.get(item) == null) {
            //INSERT THE ITEM AS KEY WITH VALUE EQUALS TO FREQUENCY OF ITEM I.E 1
            map.set(item, 1);
        }
        else {
            //IF ITEM(KEY) IS ALREADY PRESENT IN MAP, JUST INCREMENT THE FREQUENCY
            map.set(item, map.get(item)+1);
        }
    });
    var count=0;
    map.forEach((value)=>{
        count += Math.floor(value/2);
    });
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
