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

// Complete the stringSimilarity function below.
function stringSimilarity(s) {
    var suffix = [];
    var sum = s.length;;
    
    for(let i=1; i<s.length; i++) {
        suffix.push((s.substring(i, s.length)));
    }
    console.log(suffix);
    for(let i=0; i<suffix.length; i++) {
        let val = suffix[i];
        let count = 0;
        for(let j=0; j<val.length; j++) {
            if(val.charAt(j) == s.charAt(j)) {
                count++;
            } else {
                break;
            }
        }
        sum = sum + count;       
    }
    return sum;

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = stringSimilarity(s);

        ws.write(result + "\n");
    }

    ws.end();
}
