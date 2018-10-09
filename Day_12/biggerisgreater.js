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

// Complete the biggerIsGreater function below.
function biggerIsGreater(w) {
    const word = w.split('');
    
    //CONDITION 1
    //IF WORD CONSIST OF A SINGLE LETTER THEN PRINT "NO ANSWER"
    let first = word[0];
    let flag = false;
    for(let i=1; i<word.length; i++) {
        if(word[i]!=first){
            flag = true;
            break;
        }
    }
    if(!flag) {
        return "no answer";
    }
    
    //CONDITION 2
    //IF WORD IS ALREADY THE LARGEST, PRINT "NO ANSWER"
    let largest = new Array(...word);
    largest.sort();
    largest.reverse();
    
    let status = true;
    for (var i = 0; i < word.length; ++i) {
        if (word[i] != largest[i]) {
            status = false;
            break;
        }
    }
    if(status) {
        return "no answer";
    }
    
    //ELSE
    //FIND THE CLOSEST LARGE WORD
    let size = word.length;
    let index;
    for(let i=size-1; i>=0; i--) { 
        let swapped = false;
        for(let j=i-1; j>=0; j--) {
            if(word[i] > word[j]) {
                let temp = word[i]; 
                word[i] = word[j];
                word[j] = temp;
                index = j;
                swapped = true;
                break;
            }
        }
        if(swapped) {
            break;
        }
    }
    
    for(let i=index+1; i<size-1; i++) {
        for(let j=i+1; j<size; j++) {
            if(word[i] > word[j]) {
                let temp = word[i]; 
                word[i] = word[j];
                word[j] = temp;
            }
        }
    }
    
    let str = word.toString();
    const n = str.replace(/,/g, '');
    return n;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const w = readLine();

        let result = biggerIsGreater(w);

        ws.write(result + "\n");
    }

    ws.end();
}
