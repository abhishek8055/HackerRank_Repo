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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    var drn = s.slice(8, 10);
    var hr = s.slice(0, 2);
    var Hr = Number(hr);
    
    if(drn == 'AM') {
        if(Hr == 12) {
            var res = s.replace(hr, '00');
            var result = res.replace('AM', '');
            return result;
        } else {
            var result = s.replace('AM', '');
            return result;
        }    
    } 
    
    if(drn == 'PM'){
        if(Hr == 12) {
            var result = s.replace('PM', '');
            return result;
        } else {
            Hr = Hr+12;
            var res = s.replace(hr, Hr);
            var result = res.replace('PM', '');
            return result;
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
