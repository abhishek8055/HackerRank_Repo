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

// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
    const sa = s.split('');
    const st = t.split('');
    let count = 0;
    
    for(let i = 0; i < sa.length; i++){
        if (sa[i] !== st[i]){
            break;
        }
        count++;
    }
    
    const toDel = Math.max(sa.length - count, 0);
    const toAdd = st.length - count;
    const total = toDel + toAdd;
    
    if (k < (st.length + sa.length) && (k - total) % 2 == 1)
        return 'No';
    
    if( k >= toDel + toAdd) {
        return 'Yes';
    }
    else {
        return 'No';
    }
}
    
    
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine(), 10);

    let result = appendAndDelete(s, t, k);

    ws.write(result + "\n");

    ws.end();
}
