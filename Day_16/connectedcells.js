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

// Complete the connectedCell function below.
function cellCount(r,c,maxr,maxc,arr){
    if(r>=maxr) {
        r = maxr-1;
    }
    if(c>=maxc) {
        c = maxc-1;
    }
    if(r<0) {
        r = 0;
    }
    if(c<0) {
        c = 0;
    }
    var count = 0;
    var val = arr[r][c];
    if(val == -1) return 0;
    if(val == 0) return 0;
    if(val == 1){
        count++;
        arr[r][c] = -1;
        
        count += cellCount(r+1,c,maxr,maxc,arr);
        count += cellCount(r-1,c,maxr,maxc,arr);
        count += cellCount(r,c+1,maxr,maxc,arr);
        count += cellCount(r,c-1,maxr,maxc,arr);
        count += cellCount(r+1,c+1,maxr,maxc,arr);
        count += cellCount(r-1,c-1,maxr,maxc,arr);
        count += cellCount(r+1,c-1,maxr,maxc,arr);
        count += cellCount(r-1,c+1,maxr,maxc,arr);
    }
    return count;
}
function connectedCell(matrix) {
    //console.log(matrix);
    //NUMBER OF ROWS IN MATRIX
    var rows = matrix.length;
    //NUMBER OF COLUMNS IN MATRIX
    var cols = matrix[0].length;
    
    var counts = [];
    for(var i=0; i<rows; i++){
        for(var j=0; j<cols; j++){
            if(matrix[i][j] == 1){
                counts.push(cellCount(i, j, rows, cols, matrix));
            }
        }
    }
    var result = 0;
    for(var i of counts){
        if(result<=i){
            result = i;
        }
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let matrix = Array(n);

    for (let i = 0; i < n; i++) {
        matrix[i] = readLine().split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
    }

    let result = connectedCell(matrix);

    ws.write(result + "\n");

    ws.end();
}
