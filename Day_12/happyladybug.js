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

// Complete the happyLadybugs function below.
function happyLadybugs(b) {
    let bugs = [...b];
    let bugMap = new Map();
    
    bugs.forEach((item)=>{
        if(item != '_') {
            if(!bugMap.has(item)) {
                bugMap.set(item, 1);
            } else {
                bugMap.set(item, bugMap.get(item)+1);
            }
        }
    });
    console.log(bugMap);
    if(bugMap.size == 0) {
        return "YES";
    }
    let status = true;
    bugMap.forEach((value)=>{   
        if(bugMap.size == 1 && value < 2) {
            status = false;
            //return "NO";
        }
        if(value < 2 || bugMap.size > 1 && !bugs.includes('_')) {
            status = false;
        }
    });
    if(status) {
        return "YES";
    } else {
        return "NO";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const n = parseInt(readLine(), 10);

        const b = readLine();

        let result = happyLadybugs(b);

        ws.write(result + "\n");
    }

    ws.end();
}
