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

// Complete the encryption function below.
function encryption(string) {
    var res="";
    var row = Math.floor(Math.sqrt(string.length));
    var column = Math.ceil(Math.sqrt(string.length));
    if(row * column < string.length) {
        row = column;
    }
    for(var i = 0; i < column; i++){
        for(var j = i; j < string.length; j = j + column ){
            res+=string.charAt(j);
        }
        res+=" ";
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
