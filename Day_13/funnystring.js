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

// Complete the funnyString function below.
function funnyString(s) {
    const temp = s.split('').reverse();
    let rev = temp.join('');
    
    let res1=[];
    let res2=[];
    for(let i=0; i<s.length-1; i++) {
        let diff1 = Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1));
        res1.push(diff1);
        
        let diff2 = Math.abs(rev.charCodeAt(i)-rev.charCodeAt(i+1));
        res2.push(diff2);
    }
    
    let status = true;
    for(let i=0; i<s.length; i++) {
        if(res1[i]!=res2[i]) {
            status = false;
            break;
        }
    }
    if(status) {
        return "Funny";
    } else {
        return "Not Funny";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = funnyString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
