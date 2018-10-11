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

// Complete the isValid function below.
function isValid(s) {
    let map = new Map();
    s.split('').forEach(alpha=>{
        if(!map.has(alpha)) {
            map.set(alpha, 1);
        } else {
            map.set(alpha, map.get(alpha)+1);
        }
    });
    
    let arr = [];
    let frequencies = map.values();
    for(let frequency of frequencies) {
        arr.push(frequency);
    }
    let map2 = new Map();
    arr.forEach(alpha=>{
        if(!map2.has(alpha)) {
            map2.set(alpha, 1);
        } else {
            map2.set(alpha, map2.get(alpha)+1);
        }
    });
    console.log(map2);
    let size = map2.size;
    if(size == 1) {
        return "YES";
    } else if(size == 2) {
        let found = false;
        map2.forEach((value)=>{
            if(value == 1) {
                found = true;
            }
        });
        if(found) {
            return "YES";
        }else {
            return "NO";
        }
    } else {
        return "NO";
    }
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
