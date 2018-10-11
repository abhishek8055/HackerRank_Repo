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

// Complete the highestValuePalindrome function below.
function highestValuePalindrome(s, n, k) {
    if(n==1) {
        return '9';
    }
    let ar = s.split('');
    let count=0;
    
    if(ar[0]==0 || ar[n-1]==0) {
        ar[0]=9;
        ar[n-1]=9;
        count++;
    }
    if(ar[0] != ar[n-1]) {
        ar[0]=9;
        ar[n-1]=9;
        count++;
    }
    let mid = Math.floor(n/2);
    for(let i=1; i<mid; i++) {
        if(i!= mid-1) {
            ar[n-1-i]=9;
            ar[i]=9;
            count++;
        }
        if(i==mid-1 && ar[i] != ar[n-1-i]) {
            ar[n-1-i]=9;
            ar[i]=9;
            count++;
        }
        if(count>k){
            return -1;
        }
    }
    let str = ar.join('');
    return str;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const s = readLine();

    let result = highestValuePalindrome(s, n, k);

    ws.write(result + "\n");

    ws.end();
}
