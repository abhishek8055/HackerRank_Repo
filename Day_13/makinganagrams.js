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

// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
    var s1Array = s1.split('');
    var s2Array = s2.split('');
    
  
    var map1 = new Map();
    var map2 = new Map();
    var smallString,largeString;
    if(s1.length == s2.length){
        smallString = s1;
        largeString = s2;
    }else{
         smallString = s1.length < s2.length ? s1 : s2;
         largeString = s1.length > s2.length ? s1 : s2;
    }
    smallString.split('').forEach((value,index) => {
        if(!map1.has(value)){
            map1.set(value,1);
        }else{
            map1.set(value,map1.get(value)+1);
        }
    });
    
    largeString.split('').forEach((value,index) => {
        if(!map2.has(value)){
            map2.set(value,1);
        }else{
            map2.set(value,map2.get(value)+1);
        }
    });
   
    
    var count=0;
    map1.forEach((value,key) => {
        if(map2.has(key)){
            count = count+Math.abs(map2.get(key)-value);
        }else{
            count+=value;
        }
    });
    
     map2.forEach((value,key) => {
        if(!map1.has(key)){
            count = count+value;
        }
    });
    
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = makingAnagrams(s1, s2);

    ws.write(result + "\n");

    ws.end();
}
