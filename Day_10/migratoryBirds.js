'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    var cTable = [0,0,0,0,0];
    arr.forEach(findCount);
    function findCount(bird) {
        if(bird == 1) {
            cTable[0] += 1;
        }
        if(bird == 2) {
            cTable[1] += 1;
        }
        if(bird == 3) {
            cTable[2] += 1;
        }
        if(bird == 4) {
            cTable[3] += 1;
        }
        if(bird == 5) {
            cTable[4] += 1;
        }
    }
    var max = cTable[0];
    var index=0;
    for(var i=1; i<5; i++) {
        if(cTable[i] > max) {
            max = cTable[i];
            index = i;
        }
    }
    return index+1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
