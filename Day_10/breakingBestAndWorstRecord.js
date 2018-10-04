'use strict';
 const fs = require('fs');
 process.stdin.resume();
process.stdin.setEncoding('utf-8');
 let inputString = '';
let currentLine = 0;
 process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
 process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
     main();
});
 function readLine() {
    return inputString[currentLine++];
}
 // Complete the breakingRecords function below.
function breakingRecords(scores) {
    var a=[];
    var length = scores.length;
    var i=0;
    var maxCount=0;
    var minCount=0;
    var max=scores[0],min=scores[0];
    while(length --){
        a.push(scores[i]);
        i++;
        if(scores[i]>max){
            maxCount++;
            max = scores[i];
        }
        if(scores[i]<min){
            minCount++;
            min = scores[i];
        }
    }
    var res=[];
    res.push(maxCount);
    res.push(minCount);
    return res;
}
 function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
     const n = parseInt(readLine(), 10);
     const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));
     const result = breakingRecords(scores);
     ws.write(result.join(' ') + '\n');
     ws.end();
}