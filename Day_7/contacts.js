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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the contacts function below.
 */
function contacts(queries) {
    var book = [];
    var result = [];
    var map = new Map();
    var testCases = queries.length;
    
    for(var test=0; test<testCases; test++) {    
        let action = queries[test][0];
        let name = queries[test][1]; 
        
        switch(action) {
            case 'add':
                for(var i=1; i<=name.length; i++) {
                    var subStr = name.substring(0, i);
                    if(map.get(subStr) == null) {
                        map.set(subStr, 1);
                    } else {
                        map.set(subStr, map.get(subStr)+1);
                    }
                }
                break;
            case 'find':
                if(map.get(name) == null) {
                    result.push(0); 
                } else {
                    result.push(map.get(name));
                }
                break;
            default:
                break;
        }  
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const queriesRows = parseInt(readLine(), 10);

    let queries = Array(queriesRows);

    for (let queriesRowItr = 0; queriesRowItr < queriesRows; queriesRowItr++) {
        queries[queriesRowItr] = readLine().split(' ');
    }

    let result = contacts(queries); 

    ws.write(result.join("\n") + "\n");

    ws.end();
}
