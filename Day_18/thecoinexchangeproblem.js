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

// Complete the getWays function below.
function getWays(n, c) {
    if(n < 0) return 0;
    if(n == 0) return 1; 
    
    let count = 0; 
    for(let i = 0; i < c.length; i++){    
        let cacheKey = (n - c[i]) + "-" + c.slice(0, i + 1).join();
        let innerCount = cache[cacheKey]; 
        if(innerCount == undefined){
            innerCount = getWays(n - c[i], c.slice(0, i + 1));
            cache[cacheKey] = innerCount;
        }
        count += innerCount;
    }  
    return count; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    // Print the number of ways of making change for 'n' units using coins having the values given by 'c'

    let ways = getWays(n, c);

    ws.end();
}
