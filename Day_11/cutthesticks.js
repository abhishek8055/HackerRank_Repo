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

// Complete the cutTheSticks function below.
//

//FUNCTION WHICH RETURNS THE MINIMUM ELEMENT OF ARRAY
function findMin(arr) {
    let min=1001;
    arr.forEach(item=>{
        if(item < min) {
            min = item;
        }
    });
    return min;
}
//MAIN FUNCTION STARTS
function cutTheSticks(arr) {
    const res = [];
    res.push(arr.length);
    while(arr.length > 0) {
        let min = findMin(arr);
        //REMOVING ALL THE ELEMENTS FORM ARRAY WITH MINIMUM VALUE OF MIN.
        while(arr.includes(min)) {
            let idx = arr.indexOf(min);
            arr.splice(idx, 1);
        }
        //REDUCING SIZE OF REST OF  THE STICKS
        arr.forEach((item, index)=>{
            item = item-min; 
        });
        if(arr.length != 0) {
            res.push(arr.length);
        }     
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = cutTheSticks(arr);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
