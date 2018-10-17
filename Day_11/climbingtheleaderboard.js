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

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    var uniq = [];
    scores.forEach(item=>{
        if(!uniq.includes(item)) {
            uniq.push(item);
        }
    });
    const res = [];
    /*
    alice.forEach(aliceScore =>{
        if(aliceScore >= uniq[0]) {
            res.push(1);
        } else if(aliceScore < uniq[uniq.length-1]) {
            res.push(uniq.length+1);
        } else {
            var index = 0;
            for(var i=1; i<uniq.length; i++) {
                if(aliceScore < uniq[i]) {
                    index = i;
                }
            }
            res.push(index+2);
        }
    });
    */
    alice.forEach(aliceScore =>{
        if(aliceScore >= uniq[0]) {
            res.push(1);
        } else if(aliceScore < uniq[uniq.length-1]) {
            res.push(uniq.length+1);
        } else {
            let mid = Math.floor(uniq.length/2);
            if(aliceScore > uniq[mid]) {
                var index = 0;
                for(var i=1; i<=mid; i++) {
                    if(aliceScore < uniq[i]) {
                        index = i;
                    }
                }
                res.push(index+2);
            } else {
                var index = 0;
                for(var i=mid; i<uniq.length; i++) {
                    if(aliceScore < uniq[i]) {
                        index = i;
                    }
                }
                res.push(index+2);
            }
        }
    });
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const scoresCount = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const aliceCount = parseInt(readLine(), 10);

    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
