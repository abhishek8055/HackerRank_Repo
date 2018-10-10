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

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    var status;
        var s1Set= new Set();
        var charS1 = s1.split('');
        charS1.forEach((c1) => {          
            s1Set.add(c1);         
        });
        
        var charsS2 = s2.split(''); 
        
        for(let i=0;i<charsS2.length;i++){
            if (s1Set.has(charsS2[i])) {
                status = true;
                break;
            }else{
                status = false;
                
            }
        }
    
       if(status){
           return "YES";
       }else{
           return "NO";
       }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        let result = twoStrings(s1, s2);

        ws.write(result + "\n");
    }

    ws.end();
}
