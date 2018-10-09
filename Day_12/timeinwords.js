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

// Complete the timeInWords function below.
function timeInWords(h, m) {
    var words=
    [
    "zero", 
    "one",
    "two",
    "three","four","five","six","seven","eight","nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "quarter",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
    "half"
    ];


    if(m==0){
        return words[h]+" o' clock"; 
    }else if(m>=1 && m<=30){
        if(m<10){
            return words[m]+" minute past "+words[h];    
        }else if(m!=15 && m!=30){
            return words[m]+" minutes past "+words[h];
        }else{
            return words[m]+" past "+words[h];
        }
    }else{
        if(60-m==15 || 60-m==30){
            return words[60-m]+" to "+words[h+1];    
        }else{
            return words[60-m]+" minutes to "+words[h+1];    
        }
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");

    ws.end();
}
