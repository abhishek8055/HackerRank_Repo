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

// Complete the acmTeam function below.

function binaryToDecimal(n) {
    let decimalNumber = 0, i = 0, remainder;
    while (n!=0) {
        remainder = n%10;
        n = Math.floor(n/10);
        decimalNumber += remainder*Math.pow(2,i);
        ++i;
    }
    return decimalNumber;
}

function decimalToBinary(n) {
    let remainder, binary = 0, place = 1;
    while(n!=0) {
        remainder = n % 2;
        binary += remainder * place;
        place *= 10;
        n  =  Math.floor(n/2);
    }
    console.log(binary);
    return binary;
}

function acmTeam(topic) { 
    const n = topic.length;
    const len = topic[0].length;
    
    var map = new Map();
    for(let i=0; i<n-1; i++) {
        const n1 = binaryToDecimal(parseInt(topic[i]));
        for(let j=i+1; j<n; j++) {
            const n2 = binaryToDecimal(parseInt(topic[j]));
            let join = (n1 | n2);
            if(!map.has(join)) {
                map.set(join, 1);
            } else {
                map.set(join, map.get(join)+1);
            }
        }
    }
    console.log(map);
    
    let maxValue = Number.MIN_VALUE;
    let maxKey = Number.MIN_VALUE;
    map.forEach((value, key)=>{
        if(value >= maxValue && key > maxKey) {
            maxValue = value;
            maxKey = key;
        }
    });
    
    let binary = decimalToBinary(maxKey);
    let str = binary.toString();
    
    let count=0;
    for(let i=0; i<str.length; i++) {
        if(str.charAt(i) == '1') {
            count++;
        }
    }
    
    const res = [];
    res.push(count);
    res.push(maxValue);
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let topic = [];

    for (let i = 0; i < n; i++) {
        const topicItem = readLine();
        topic.push(topicItem);
    }

    let result = acmTeam(topic); 

    ws.write(result.join("\n") + "\n");

    ws.end();
}
