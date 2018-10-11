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

// Complete the palindromeIndex function below.
function palindromeIndex(s) {
    let len = s.length;
    for(let i=0; i<=Math.floor(len/2); i++) {
        if(s[i] != s[len-1-i]) {
            if((s[i+1] == s[len-1-i]) && (s[i+2]==s[len-1-i-1])) {
                return i;
            } else if((s[i]==s[len-1-i-1]) && (s[i+1] == s[len-1-i-2])) {
                return len-1-i;
            }
        }
    }
    return -1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = palindromeIndex(s);

        ws.write(result + "\n");
    }

    ws.end();
}
