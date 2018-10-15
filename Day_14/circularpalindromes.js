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
 * Complete the circularPalindromes function below.
 */

function isPali(str) { 
    for(let i=0; i<str.length; i++) {
        if(str[i] != str[str.length-1-i]) {
            return false;
        }
    }
    return true;
} 

function subs(s){
    var max=0; 
    for(let len=s.length; len>=2; len--) {
        for(let i=0; i<=s.length-len; i++) {
            let sub = s.substring(i, i+len);
            if(isPali(sub) && sub.length>max){
                max = sub.length;
                return max;
            }
        }
    }
    return 1;
}

function circularPalindromes(s) {
    var n = s.length;
    var ar = s.split('');
    let res = [];
    res.push(subs(ar.join('')));
    for(let i=1; i<=n-1; i++) {
        let first = ar.shift();
        ar.push(first);
        let str = ar.join('');
        res.push(subs(str));
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();
     var result=circularPalindromes(s);
    ws.write(result.join("\n") + "\n");
    ws.end();
}
