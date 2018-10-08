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

// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
    //SOLUTION WITH ORDER(N) 
    
    /*
    let i=s;
    m = m-1;
    while(m > 0) {
        i = (i+1)%n;
        if(i==0) {
            i=n;
        }
        m--;
    }
    return i;
    */
    
    //SOLUTION WITH ORDER(1)
    
    /*
    if(m>=n) {
        let firstServ = n-s+1;
        let leftSweets = m-firstServ;
        let person = leftSweets%n;
        if(person == 0) {
            return n;
        }
        return person;
    } else {
        if((n-s+1) >= m) {
            return m+s-1;
        } else {
            if(s == n) {
                return m-1;
            }
            return m%(n-s+1);
        }
    }
    */
    var last = ((m - 1) + (s - 1)) % n + 1;
    return last; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nms = readLine().split(' ');

        const n = parseInt(nms[0], 10);

        const m = parseInt(nms[1], 10);

        const s = parseInt(nms[2], 10);

        let result = saveThePrisoner(n, m, s);

        ws.write(result + "\n");
    }

    ws.end();
}
